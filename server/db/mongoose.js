var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //uses inbuilt Promise library
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true })


module.exports = {
    mongoose
};
