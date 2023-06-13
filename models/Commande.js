const mongoose = require('mongoose');

const Commande = mongoose.model('products', {
    products : Array,
    Total : Number,
    date_commande : Date
});

module.exports = Commande;