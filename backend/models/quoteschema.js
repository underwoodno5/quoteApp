const mongoose = require('mongoose');

//----------------
//---- QUOTE MODEL
//-----------------

const QuoteSchema = new mongoose.Schema({
    author: String,
    quote: String,
});

module.exports = mongoose.model('Quotes', QuoteSchema);