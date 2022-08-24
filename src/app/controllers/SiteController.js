const Course = require('../module/Courses')
const { multipleMongooseToObject} = require('../../util/mongoose')
class SiteController{

    index(req, res, next){
        Course.find({})
            .then(courses=> {
                res.render('home', { courses: multipleMongooseToObject(courses) })
            })
            .catch(next)
    }

    search(req, res) {
        res.render('search')
    }
}
module.exports = new SiteController;
// Create an element to export
// To Import this element: const newController = require('./NewsController')
