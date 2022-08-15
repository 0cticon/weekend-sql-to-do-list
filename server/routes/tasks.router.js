const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

const taskListArray = [
    {
        id: 1,
        task: 'wash dishes',
        completed: 'false',
        
    },
];

router.get('/', (req, res) => {
    console.log('in GET /tasks');
    const queryText = 'SELECT * FROM "list";';
    pool.query(queryText).then((result) => {
        console.log('SELECT SUCCESS!', result);
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in GET /tasks', error);
        res.sendStatus(500);
    });
});
module.exports = router;