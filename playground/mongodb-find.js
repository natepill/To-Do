// const MongoClient = require('mongodb').MongoClient; //same as line below (object destrucutring)
const {MongoClient, ObjectId} = require('mongodb'); //pull off MongoClient and ObjectId from Mongodb

var obj = new ObjectId();
console.log(obj);
//object id is not a string, its type is object id
//Use Object Id construtor to have value

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rotten-potatoes');
MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to Mongodb server'); //Adding the return statement stoping the rest of the callback from running
    }//Instead of having a return statement, we can also have included an else block
    console.log('Connected to Mongodb Server')
    const db = client.db('ToDoApp')

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // client.close();
});








//NOTE start mongodb: /Users/natepill/mongo/bin
 // ./mongod --dbpath ~/mongo/data
