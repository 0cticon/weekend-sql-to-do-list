const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 5003;

app.get('/tasks', (req, res) => {
    res.send('hello world')
})

app.use(express.static('server/public'));
app.use(express.urlencoded({ extended: true}));


app.listen(PORT, () => {
    console.log('listening on port', PORT);
});