const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const expressSession = require('express-session');

const app = express();
const path = require('path');

//---------------
//----- CONFIGS
//---------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(expressSession({secret: 'max', saveUninitialized: false, resave: false}));

//----DB connection
const dbConfig = require('../config/database');
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {useNewUrlParser:true})
.then(()=>{
    console.log('connected to db');
}).catch (err => {
    console.log('could not connect to db, exiting');
    process.exit();
});

//---- call in out routes file
require('./routes')(app);

//---- listen for requests
app.listen(3000,() => {
    console.log('ears open on 3000');
});