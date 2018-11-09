const MongoClient = require('mongodb').MongoClient;
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rotten-potatoes');
MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to Mongodb server'); //Adding the return statement stoping the rest of the callback from running
    }//Instead of having a return statement, we can also have included an else block
    console.log('Connected to Mongodb Server')
    const db = client.db('ToDoApp')

    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false

    }, (err, result) => {
        if(err){
            return console.log("Unable to insert todo", err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2)) //ops stores all the docs that were inserted
    }) //new document to collection
    client.close();
});








//NOTE start mongodb: /Users/natepill/mongo/bin
 // ./mongod --dbpath ~/mongo/data
