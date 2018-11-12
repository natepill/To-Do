// const MongoClient = require('mongodb').MongoClient; //same as line below (object destrucutring)
const {MongoClient, ObjectId} = require('mongodb'); //pull off MongoClient and ObjectId from Mongodb

// var obj = new ObjectId();
// console.log(obj);

//object id is not a string, its type is object id
//Use Object Id construtor to have value

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rotten-potatoes');
MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to Mongodb server'); //Adding the return statement stoping the rest of the callback from running
    }//Instead of having a return statement, we can also have included an else block
    console.log('Connected to Mongodb Server')
    const db = client.db('ToDoApp')


    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectId('5be618abadc722e1b48b731f')
    // }, {
    //     $set: {
    //         completion: false,
    //     }
    // }, {
    //     returnOrginal: false
    // }).then((result) => {
    //     console.log(result);
    // });


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId('5be60533c7d476908d3b13ce')
    },{
        $set: {
            name: 'Nathan Pillai'
        },
        $inc: {
            age: 1
        }
    }, {
        returnNewDocument: true
    }).then((result) => {
        console.log(result)
    });


    // client.close();
});








//NOTE start mongodb: /Users/natepill/mongo/bin
 // ./mongod --dbpath ~/mongo/data
