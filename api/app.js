const express = require('express');
const app = express();
const COLLECTION_NAME = "data";

const { init } = require('./db/mongodb');

// app.get('/', (req, res) => {
//     res.send('hi');
// });

app.get('/data', async (req, res) => {
    // return a simple query on all the data in the data base
    // res.send('hi');
    const con = await init();
    const db = con.db();
    const cursor = await db.collection(COLLECTION_NAME).findOne();
    console.log(cursor);
    res.send(cursor);
});

app.post('/data', (req, res) => {
    // we initialize data here
});

app.listen(3000, () => {
    console.log('3000 listen');
})