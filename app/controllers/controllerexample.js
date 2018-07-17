const Example = require('../models/modelexample');


exports.create = (req,res) =>{

//---- Handling empty forms
     if (!req.body.entry){
         return res.status(400).send({
                message: "title cannot be empty"
            });
        }
        if (!req.body.title){
            return res.status(400).send({
                message: "entry cannot be empty"
            });
        }

//----- Creating new user
    const newExample = new Example ();
    newExample.title = req.body.title;
    newExample.entry = req.body.entry;

//----- Saving user to DB
    newExample.save()
    .then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "something went wrong saving"
        });
    });

};