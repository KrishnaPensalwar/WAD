const { MongoClient } = require('mongodb');

const username = "krishnapensalwar";
const password = "Krish@19"; // Update with your actual password
const clusterName = "cluster0";
const database = "student";

// Construct the MongoDB connection URI with proper encoding
const uri = `mongodb+srv://${username}:${encodeURIComponent(password)}@${clusterName}.wgsrqie.mongodb.net/${database}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const dbConnect = async () => {
    try {
        await client.connect();
        const db = client.db(database);
        console.log("DB Connected");
        return db.collection('profile');
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error; // Re-throw the error to indicate connection failure
    }
}

module.exports = dbConnect;
