const mongoose = require('mongoose');

const Product = mongoose.model('products', {
    name : String,
    price : Number
});

module.exports = Product;