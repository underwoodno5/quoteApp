module.exports = (app) => {

    const quote = require('./controllers/quotecontroller');

    //-------------------
    //-- POST QUOTE ROUTE
    //-------------------

    app.post('/post', quote.create)
}