const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const queryText = `
  SELECT "name", "share", "tip_total", "tips_date"."date"
  FROM "tips"
  JOIN "tips_date" ON "tips"."date_id" = "tips_date"."id"
  ORDER BY "tips_date"."date";
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