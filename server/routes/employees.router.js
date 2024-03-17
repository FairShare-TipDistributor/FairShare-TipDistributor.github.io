const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route 
 */
// SELECT and SEARCH "first_name", "last_name", "id", "email"
// FROM employees; 
router.get('/', (req, res) => {
    const queryText = `
    SELECT * FROM "employees"
    WHERE "first_name" LIKE '%%'
    OR "last_name" LIKE '%%'
    OR "email" LIKE '%%'
    ;
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
  const { firstName, lastName, email } = req.body;
  // console.log('req.body', req.body);
  const queryText = `
  INSERT INTO "employees" ( "first_name", "last_name", "email" )
  VALUES ($1, $2, $3);`;
  // VALUES ('a', 'b', 'c');`;
  pool 
    .query(queryText, [firstName, lastName, email])
    // .query(queryText, [firstName, lastName, email])
    .then(() => {
      res.sendStatus(200)
    })
    .catch((error) => {
      console.log('Error in employee.router POST', error);
      console.log('req.body', req.body);
    });
});

module.exports = router;