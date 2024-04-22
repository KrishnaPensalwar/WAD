const dbConnect = require('./mongodb');
const express = require('express');

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const collection = await dbConnect(); // Establish MongoDB connection and retrieve the collection
        const result = await collection.find().toArray(); // Use the collection to perform database operations
        res.send(result);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.post('/', async (req, res) => {
    try {
        const collection = await dbConnect(); // Establish MongoDB connection and retrieve the collection
        const result = await collection.insertOne(req.body); // Use the collection to perform database operations
        res.send("Data inserted Successfully");
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});
// Add error handling for other routes as well

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
