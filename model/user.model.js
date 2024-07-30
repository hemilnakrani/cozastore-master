var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

var user = new mongoose.model('user',userSchema)

module.exports = user
