const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const path = require('path');
const routes = require('./routes');
var bodyParser = require('body-parser')

//CONNECT TO DATABASE
const db = require('./config/db/index')
db.connect();

//STATIC PUBLIC FILE
app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

//TEMPLATE ENGINE
app.engine('hbs', engine({extname: '.hbs',}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views',),);

//CAN USE FORM DATA(BODY)
app.use(express.urlencoded({extended: true,}));
app.use(express.json())

//PATH
routes(app);

//PORT
app.listen(port, () => {console.log(`App listening on port ${port}`)});
