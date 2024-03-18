const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route 
 */
// router.get doesn't send a req.body. Must use router.post instead. :(
router.post('/', (req, res) => {
  // console.log('req.body', req.body);
  // console.log('req.body.searchInput', req.body.searchInput);

  // -- If searchItem is empty then set it to an empty String. --
  const searchItem = 
      (req.body.searchInput  && req.body.searchInput .trim()) // if this (exists AND exists when trimmed)
      ?              // then 
      req.body.searchInput     // this
      :             // else
      '';           // that
  // console.log(searchItem); 

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