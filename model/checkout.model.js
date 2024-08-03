var mongoose = require('mongoose')

var productSchema = mongoose.Schema({
    country: String,
    fname: String,
    lname: String,
    address: String,
    state: String,
    zipcode : Number,
    email: String,
    phone: Number,
    ordernote : String
})

var checkout = new mongoose.model('checkout',productSchema)

module.exports = checkout
