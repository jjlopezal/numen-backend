const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const storeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    adress: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
});
const Bookshoop = mongoose.model('Bookshoop', storeSchema);

module.exports = {Bookshoop}