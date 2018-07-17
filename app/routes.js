module.exports = (app) => {

    const example = require('./controllers/controllerexample');

    //---------------
    //-- POST EXAMPLE
    //---------------

    app.post('/post', example.create)
}