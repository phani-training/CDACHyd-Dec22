const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    BookId: Number,
    Title : String, 
    Author : String,
    Price : Number    
});

module.exports = mongoose.model('Book', bookSchema);