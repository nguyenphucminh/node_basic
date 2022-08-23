class NewsController{
    index(req, res){
        res.render('news');
    }
}
module.exports = new NewsController;
// Create an element to export
// To Import this element: const newController = require('./NewsController')
