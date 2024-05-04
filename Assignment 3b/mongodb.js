const mongodb = require('mongodb');

const mongodbUrl = `mongodb+srv://krishnapensalwar3:SkDjXfDygdDUSvwN@cluster0.vgiedtl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
    const client = await MongoClient.connect(mongodbUrl);
    database = client.db();
}

function getDb() {
  if (!database) {
    throw { message: 'You must connect first!' };
  }
  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb,
};

