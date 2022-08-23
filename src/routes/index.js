const newsRouter = require('./news')
const siteRouter = require('./site')
function route(app){
    app.get('/news', newsRouter)
    app.get('/', siteRouter)
}
module.exports = route