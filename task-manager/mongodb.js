// CRUD (Create, Read, Update, Delete) Application

const { MongoClient, ObjectID } = require('mongodb')

const connectionURl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';


MongoClient.connect(connectionURl, {  useUnifiedTopology: true }, (error, client) => {

    if (error) {
        return console.log('Unable to connect to database due to 👉',error);
    }
    const db = client.db(databaseName)
    
})