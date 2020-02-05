const express = require('express');
const exhb = require('express-handlebars');
const controller = require('./controllers/burgerController')
const db = require('./models');

let app = express();
let PORT = process.env.PORT || 8000;


// STATIC folder
app.use(express.static('assets'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(controller)

// Setting HANDLEBARS main page
app.engine('handlebars',exhb({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
// Server LISTENING

db.sequelize.sync({ force: false }).then(() => {
    app.listen((PORT = () => console.log('Server listening on PORT: ' + PORT)));

})
