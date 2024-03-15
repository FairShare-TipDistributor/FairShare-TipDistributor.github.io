const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route 
 */
router.get('/', (req, res) => {
    const queryText = `
    SELECT "first_name", "last_name", "id", "email"
    FROM employees; 
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

module.exports = router;