const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    author: {
        type: String,
        required: true,
    },
    editorial: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});
const Book = mongoose.model('Book', storeSchema);

module.exports = {Book}