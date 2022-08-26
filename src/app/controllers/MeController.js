const Course = require('../module/Courses')
const { multipleMongooseToObject} = require('../../util/mongoose');
class MeController{

    //[GET] /me/stored/courses
    storedCourses(req, res, next){
        Course.find({})
            .then(courses => res.render('me/stored-courses', {
                courses: multipleMongooseToObject(courses) 
            }))
            .catch(next)
        
    }
}
module.exports = new MeController();
// Create an element to export
// To Import this element: const newController = require('./NewsController')
