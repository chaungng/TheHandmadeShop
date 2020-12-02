const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID;

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// Server start on PORT 5000
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log("Web started on port ", port);
});


// MongoDB
const mongoUrl = "mongodb+srv://thsAdmin:csis3380@clusterthehandmadeshop2.4qp1j.mongodb.net/theHandmadeShopDB?retryWrites=true&w=majority"


// GET message from server - Testing purpose
// app.get("/", (req, res) => {
//     res.send("Hello from server port 5000");
// })


// Connect to MongoDB
async function main() {
    const client = new MongoClient(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);


// List databases in the console
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};


// GET products from MongoDB
app.get("/api/products", (req, res) => {
    MongoClient.connect(mongoUrl, (err, db) => {
        if (err) throw err;

        const dbo = db.db("theHandmadeShopDB");
        dbo.collection("products").find({}).toArray((error, result) => {
            if (error) {
                res.send("Error", error);
                return;
            }

            res.send(result);
            db.close();
        })
    })
})
