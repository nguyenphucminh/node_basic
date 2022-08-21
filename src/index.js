const express = require('express')
const morgan = require('morgan')
const { engine } = require ('express-handlebars');
const app = express()
const port = 3000
const path = require('path')

//STATIC 
app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
app.use(morgan('combined'))

//TEMPLATE ENGINE
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resources', 'views'));

//PATH
app.get('/', (req, res) => {
    res.render('home');
});
app.get('/news', (req, res) => {
  res.render('news');
});

//PORT
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})