const Course = require('../module/Courses')
class SiteController{

    // [GET] / news
    index(req, res){
        // res.render('home');
        Course.find({}, function (err, courses){
            if(!err){
                res.json(courses);
            }
            else{
                res.status(400).json({err: "ERROR!"})
            }
        })
    }

    // [GET] / news/:slug
    search(req, res) {
        res.render('search')
    }
}
module.exports = new SiteController;
// Create an element to export
// To Import this element: const newController = require('./NewsController')
