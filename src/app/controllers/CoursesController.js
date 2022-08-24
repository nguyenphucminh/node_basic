const Course = require('../module/Courses')
const { mongooseToObject} = require('../../util/mongoose');
class CourseController{

    //[GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then(course =>{
                res.render('courses/show', {course: mongooseToObject(course)})
            })
            .catch(next)
    }
}
module.exports = new CourseController();
// Create an element to export
// To Import this element: const newController = require('./NewsController')
