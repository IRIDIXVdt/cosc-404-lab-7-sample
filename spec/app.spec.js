var { COLLECTION_NAME, init, sample_query1, sample_query2 } = require("../app");
const { MongoClient } = require("mongodb");

describe("MongoDB Testing", () => {
    var con;

    beforeAll(async () => {
        con = await init();
    });
    afterAll(async () => {
        await con.close();
    })
   
});