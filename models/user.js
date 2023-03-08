const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname: String,
    secondname: String,
    login: String,
    pass: String
});

const User = mongoose.model('Users', userSchema);

module.exports = User;