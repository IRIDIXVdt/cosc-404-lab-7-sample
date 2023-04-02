
const { MongoClient } = require('mongodb');

const DATABASE_NAME = "lab7";
const COLLECTION_NAME = "data";
const url = "mongodb://lab7:404mgbpw@localhost:27017";

const INPUT_DATA = [
    { "id": 1, "name": "Joe Jackson", "state": "BC", "orders": [{ "num": 100, "items": 5, "total": 125.35 }] }
    , { "id": 2, "name": "Frank Funk", "state": "AB", "orders": [{ "num": 101, "items": 3, "total": 74.55 }, { "num": 102, "items": 12, "total": 250.00 }, { "num": 104, "items": 1, "total": 10 }] }
    , { "id": 3, "name": "Ingrid Irene", "state": "BC", "orders": [{ "num": 105, "items": 1, "total": 16.45 }, { "num": 109, "items": 3, "total": 23.00 }] }
    , { "id": 4, "name": "Kyla Kurter", "state": "ON", "orders": [{ "num": 110, "items": 5, "total": 89.11 }, { "num": 110, "items": 10, "total": 603.22 }, { "num": 111, "items": 2, "total": 36 }, { "num": 125, "items": 2, "total": 66.66 }] }
    , { "id": 5, "name": "Larry Lawrence", "state": "MB", "orders": [{ "num": 114, "items": 5, "total": 5835.00 }] }
    , { "id": 6, "name": "Mallory May", "state": "ON", "orders": [{ "num": 117, "items": 1, "total": 999.99 }, { "num": 122, "items": 32, "total": 5215.00 }] }
    , { "id": 7, "name": "Nelly Noris", "state": "BC", "orders": [] }
    , { "id": 8, "name": "Patty Park", "state": "AB", "orders": [{ "num": 120, "items": 50, "total": 1023.89 }, { "num": 123, "items": 1, "total": 89.89 }] }
    , { "id": 9, "name": "Rory Ruthers", "state": "SK", "orders": [] }
    , { "id": 10, "name": "Sam Smith", "state": "ON", "orders": [{ "num": 103, "items": 3, "total": 76.99 }] }
]

const init = async function () {
    const client = new MongoClient(url);
    const con = await client.connect().catch((e) => {
        console.log(e);
    });
    console.log('success');
    const db = con.db();
    const cursor = await db.collection(COLLECTION_NAME).findOne();
    if (cursor != null) {
        await db.dropCollection(COLLECTION_NAME);
    }
    // console.log(cursor);
    await db.collection(COLLECTION_NAME).insertMany(INPUT_DATA);
    // con.close();
    return con;
}

async function sample_query1(con) {
    //Select * from data limit 1
    // **find single document
    // https://www.mongodb.com/docs/drivers/node/current/usage-examples/findOne/
    const db = con.db();
    const cursor = await db.collection(COLLECTION_NAME).findOne();
    return cursor;
}

module.exports = {
    COLLECTION_NAME,
    init,
    sample_query1,
    sample_query2,
    // import tasks here
    taks_query_1,
};