const Course = require('../module/Courses')
const { multipleMongooseToObject} = require('../../util/mongoose');
class MeController{

    //[GET] /me/stored/courses
    storedCourses(req, res, next){
        Promise.all([Course.find({}),Course.countDocumentsDeleted()])
            .then(([courses, deletedCount])=> {
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: multipleMongooseToObject(courses) 
                })
            })
            .catch(next)
    }

    //[GET] /me/stored/courses
    trashCourses(req, res, next){
        Course.findDeleted({})
            .then(courses => res.render('me/trash-courses', {
                courses: multipleMongooseToObject(courses) 
            }))
            .catch(next)
    }
}
module.exports = new MeController();
// Create an element to export
// To Import this element: const newController = require('./NewsController')
