const Quotes = require('../models/quoteschema');


exports.create = (req,res) =>{

//---- Handling empty forms and passing weeor
     if (!req.body.author ||!req.body.quote ){
         return res.status(400).send({
                message: "title cannot be empty"
            });
        }

//----- Creating new user from our schema
    const Quote = new Quotes();
    Quote.author = req.body.author;
    Quote.quote = req.body.quote;

//----- Saving user to the DB and handling any errors
    Quote.save()
    .then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "something went wrong saving"
        });
    });

};