// CRUD Applications
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURl, {  useUnifiedTopology: true }, (error, client) => {

    if (error) {
        return console.log('Unable to connect to database due to 👉',error);
    }
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Maodo',
    //     age:23
    // },(error, result) => {
    //     if(error) return console.log('Unable to insert user')
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Malick',
    //         age: 29
    //     },
    //     {
    //         name: 'Yero',
    //         age: 25
    //     }
    // ], (error, result) => {
    //     if(error) return console.log('Unable to insert documents !')

    //     console.log(result.ops)
    // })

    //
    db.collection('tasks').insertMany([
        {
            description: 'Tache 1',
            compeleted: true
        },
        {
            description: 'Tache 2',
            compeleted: false
        },
        {
            description: 'Tache 3',
            compeleted: true
        }
    ],(error, result) => {
        if(error) return console.log('Unable to insert documents')
        console.log(result.ops)
    })

})