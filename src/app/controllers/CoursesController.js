const Course = require('../module/Courses')
var bodyParser = require('body-parser')
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

    //[CREATE] /courses/create
    create(req, res, next) {
        res.render('courses/create')
    }
    //[POST] /courses/store
    store(req, res, next) {
        // res.json(req.body)
        const formData = req.body
        formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`
        const course = new Course(req.body)
        course.save()
            .then(()=>{res.redirect('/')})
            .catch(()=>{})
    }
}
module.exports = new CourseController();
// Create an element to export
// To Import this element: const newController = require('./NewsController')
