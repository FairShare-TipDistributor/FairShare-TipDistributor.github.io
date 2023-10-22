const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
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
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
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