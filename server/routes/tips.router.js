const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
// importing calc.js which allocates tips and uses Dinero.js
const shareOfTips = require("../calc.js");
const Dinero = require("dinero.js");

/**
 * GET route
 */
router.get("/", (req, res) => {
	const queryText = `
  SELECT "name", "employees"."id", to_char("date", 'YYYY-MM-DD') AS date, "share_total", "share_cash", "share_cc"
  FROM "tips" 
  JOIN "date" on "tips"."date_id" = "date"."id"
  JOIN "employees" ON "tips"."emp_id" = "employees"."id"; 
  `;
	pool.query(queryText)
		.then((result) => {
			res.send(result.rows);
		})
		.catch((error) => {
			console.log(`Error in GET tipsRouter ${error}`);
			res.sendStatus(500);
		});
});

/**
 * POST route
 */
router.post("/", async (req, res) => {
	console.log(req.body);
	let dateId;
	const { tipsTotal, employeeInfo } = req.body;
	// Takes total tips and makes it into a Dinero object
	const dineroTipsTotal = Dinero({
		amount: tipsTotal * 100,
		currency: "USD",
	});
	// Passes Dinero object and employee info to calc.js which allocates tips
	let empTips = shareOfTips(dineroTipsTotal, employeeInfo);

	//connect to PostGreSQL database
	const db = await pool.connect();

	// Begin SQL queries
	try {
		await db.query("BEGIN");

		//! Insert for date table. Adds current date and tip total, returning date ID
		let queryText = `
      INSERT INTO "date"("date", "tip_total", "hours_total")
      VALUES (CURRENT_DATE, $1, $2)
      RETURNING "date"."id";
    `;
		await db
			.query(queryText, [tipsTotal, empTips.totalHours])
			.then((res) => {
				dateId = res.rows[0].id;
				console.log(dateId);
			});

		//! Insert for employee data and payout using date ID
		queryText = `
      INSERT INTO "tips" ("date_id", "emp_id", "hours", "share_total")
      VALUES ($1, $2, $3, $4);
    `;

		for await (let employee of empTips.employees) {
			db.query(queryText, [
				dateId,
				employee.emp_id,
				employee.hours,
				employee.share,
			]);
		}

		// If no errors, all queries will be commited to db
		await db.query("COMMIT");
		res.sendStatus(200);
	} catch (error) {
		// If a query has an error, none of the queries will succeed
		// and an error is shown
		console.log("ROLLBACK", error);
		await db.query("ROLLBACK");
		res.sendStatus(500);
	}
});

/**
 * PUT route template
 */
router.put("/:id", (req, res) => {
	// PUT route code here
});

/**
 * DELETE route template
 */
router.delete("/:id", (req, res) => {
	// DELETE route code here
});

module.exports = router;
