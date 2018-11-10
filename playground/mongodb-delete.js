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

    // deleteMany: deletes all matching records

    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     if (err){
    //         console.log('Could not delete item');
    //     }
    // })


    // deleteOne: deletes the matching record it finds
    //
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Could not delete item');
    // })


    //findOneAndDelete: finds first object and then delete

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })

    //UDEMY Excerise /challenge

    // db.collection('Users').deleteMany({name: 'Nathan Pillai'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log("Could not delete users", err);
    // })



    db.collection('Users').findOneAndDelete({_id: new ObjectId('5be606f3adc722e1b48b6e9a')}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    }, (err) =>{
        console.log("Could not find user with that id");
    });




    // client.close();
});








//NOTE start mongodb: /Users/natepill/mongo/bin
 // ./mongod --dbpath ~/mongo/data
