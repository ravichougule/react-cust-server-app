var mongo = require("mongodb");
async function getDB() {
  try {
    const url =
      "mongodb+srv://ravichougule:Mslearning@11am.z32kfvi.mongodb.net/?retryWrites=true&w=majority&appName=11am";
    const mongoClient = mongo.MongoClient;
    const server = await mongoClient.connect(url);
    const db = server.db("nit");
    return db;
  } catch (ex) {
    console.error(ex);
    return ex.message;
  }
}
module.exports = getDB;
