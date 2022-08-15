const express = require('express');

// moved const pool due to use of tasks.router
// const pool = require('../modules/pool.js');

const app = express();
const PORT = process.env.PORT || 5003;

app.use(express.static('server/public'));
app.use(express.urlencoded({ extended: true}));

const tasksRouter = require('./routes/tasks.router.js');

app.use('/tasks', tasksRouter);

// changed to app.use for tasksRouter
// app.get('/tasks', (req, res) => {
//     res.send('hello world')
// })




app.listen(PORT, () => {
    console.log('listening on port', PORT);
});