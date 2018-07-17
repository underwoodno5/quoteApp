const mongoose = require('mongoose');

//----------------
//-- MODEL EXAMPLE
//-----------------

const exampleSchema = new mongoose.Schema({
    title: String,
    entry: String,
});

module.exports = mongoose.model('Example', exampleSchema);