const mongoose = require('mongoose');

const connect_to_db = (url) => {
    mongoose.connect(url).then(() => console.log('database is connected ...')).catch(err => console.log('connection to db Error', err));
}

module.exports = connect_to_db;