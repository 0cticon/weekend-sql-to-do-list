const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

// const taskListArray = [
//     {
//         id: 1,
//         task: 'wash dishes',
//         completed: 'false',
        
//     },
// ];


// GET route using router to retrieve object data from sql
router.get('/', (req, res) => {
    console.log('in GET /tasks');
    const queryText = 'SELECT * FROM "tasks";';
    pool.query(queryText).then((result) => {
        console.log('SELECT SUCCESS!', result);
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in GET /tasks', error);
        res.sendStatus(500);
    });
});

// POST route using router to send new input data to sql database
router.post('/', (req, res) => {
    const tasks = req.body;
    const queryText = `INSERT INTO "tasks" ("task") 
                      VALUES ($1);`
    pool.query(queryText, [tasks.task])
        .then((results) => {
            console.log(results);
            res.send(results);
        })
        .catch((error) => {
            console.log('ERROR in POST /tasks', error);
            res.sendStatus(500);
        });
});


module.exports = router;