const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route 
 */
router.get('/', (req, res) => {
  const queryText = `
  SELECT "name", to_char("date", 'YYYY-MM-DD') AS date, "share_total", "share_cash", "share_cc"
  FROM "tips" 
  JOIN "date" on "tips"."date_id" = "date"."id"
  JOIN "employees" ON "tips"."emp_id" = "employees"."id"; 
  `;
  pool.query(queryText).then(result => {
    res.send(result.rows);
  }).catch(error => {
    console.log(`Error in GET tipsRouter ${error}`);
    res.sendStatus(500);
  });
});

/**
 * POST route 
 */
router.post('/', async (req, res) => {
  //connect to PostGreSQL database
  console.log(req.body);
  const { tipsTotal, employeeInfo } = req.body;
  const db = await pool.connect();
  let dateId;

  try {
    await db.query('BEGIN');

    //! Insert for date table. Adds current date and tip total returning date ID
    let queryText = `
      INSERT INTO "date"("date", "tip_total")
      VALUES (CURRENT_DATE, $1)
      RETURNING "date"."id";
    `;
    await db.query(queryText, [tipsTotal]).then(res => {
      dateId = res.rows[0].id;
      console.log(dateId);
    });

    //! Insert for employee data and payout
    queryText = 
    


    // If no errors, all queries will be commited to db
    await db.query('COMMIT');
    res.sendStatus(200);
  } catch(error) {
    // If a query has an error, none of the queries will succeed
    // and an error is shown
    console.log('ROLLBACK', error);
    await db.query('ROLLBACK');
    res.sendStatus(500);
  }
});

/**
 * PUT route template
 */
router.put('/:id', (req, res) => {
    // PUT route code here
})


/**
 * DELETE route template
 */
router.delete('/:id', (req, res) => {
    // DELETE route code here
})

module.exports = router;