var {mongoose} = require('./db/mongoose')

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlenth: 1, //no empty strings
        trim: true //deletes leading and trailing spaces

    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
})


// var newTodo = new Todo({
//     text: 'Cooked dinner'
// });
//
//  //Saves to MongoDb database and returns promise
// newTodo.save().then((doc) => {
//     console.log(doc);
// }, (err) =>{
//     console.log('Unable to save Todo');
// });
//
// var newTodo2 = new Todo(
//     {text: 'Wash Dishes',
//     completed: false,
//     completedAt: 123}
// );
//
// newTodo2.save().then((doc) =>{
//     console.log(doc);
// }, (err) => {
//     console.log('unable to save todo 2');
// })



var User = mongoose.model('Users', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlenth: 1
    }
})

var userOne = new User({email: 'natepill@gmail.com    '})

userOne.save().then((doc) =>{
    console.log(doc);
}, (err) => {
    console.log('unable to save User');
})
