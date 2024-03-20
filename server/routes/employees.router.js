const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route 
 */
// router.get doesn't send a req.body, only a req.params. Must use router.post for req.body.
router.get('/:searchInput', (req, res) => {
  let searchItem 

  // If the req.params is '-searchAll-', then use empty string to search All employees
  // Else if req.params has any other value, search for that value.
  if (req.params.searchInput === '-searchAll-' ){
    searchItem = ""
    // console.log('search all');
  } else {
    searchItem = req.params.searchInput
    // console.log('search one');
  };
  
console.log('searchItem', searchItem);

  const queryText = `
    SELECT * FROM "employees"
    WHERE "first_name" ILIKE '%${searchItem}%' 
    OR "last_name" ILIKE '%${searchItem}%' 
    OR "email" ILIKE '%${searchItem}%'
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
  console.log('req.body', req.body);
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