var mongoose = require('mongoose')

var productSchema = mongoose.Schema({
    name: String,
    price: String,
    image: String,
})

var product = new mongoose.model('product',productSchema)

module.exports = product
