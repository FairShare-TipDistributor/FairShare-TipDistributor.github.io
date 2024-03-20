const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route 
 */
// router.get doesn't send a req.body. Must use router.post instead. :(
router.get('/:object', (req, res) => {
  // console.log('req.body', req.body);
  // console.log('req.body.searchInput', req.body.searchInput);
  console.log('req.params.object', req.params.object);
  // console.log('req.params.searchItem.searchInput', req.params.searchItem.searchInput);
  // console.log('req.params.searchInput', req.params.searchItem.searchInput);
  // -- If searchItem is empty then set it to an empty String. --
  // let searchItem = req.params.searchItem



//   console.log('req.params.searchItem', req.params.searchItem);
  
// let searchItem = req.params.searchItem
// if ( searchItem && searchItem.trim() ) {
//   // searchItem = req.params.searchItem
//   console.log('searchItem: searchItem', searchItem); 
// } else {
//   searchItem = ''
//   console.log('fail');
// }

// = (req.params.searchItem && req.params.searchItem.trim()) // if this (exists AND exists when trimmed)
// console.log('re', searchItem)
//       ?              // then 
//       req.params.searchItem   // this
//       :             // else
//       '';           // that
  // console.log('searchItem', searchItem); 

  // let searchItem = req.params.object
  let searchItem = ''
console.log('searchItem', searchItem);
  // const queryText = `
  //   SELECT * FROM "employees"
  //   WHERE "first_name" ILIKE '%${searchItem}%' 
  //   OR "last_name" ILIKE '%${searchItem}%' 
  //   OR "email" ILIKE '%${searchItem}%'
  //   ;
  //   `;
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