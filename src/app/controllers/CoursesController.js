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

    //[CREATE] /courses/create
    create(req, res, next) {
        res.render('courses/create')
    }
    //[POST] /courses/store
    store(req, res, next) {
        // res.json(req.body)
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        const course = new Course(req.body)
        course.save()
            .then(()=>{res.redirect('/me/stored/courses')})
            .catch(()=>{})
    }
    //[POST] /courses/store
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(courses => res.render('courses/edit',{courses: mongooseToObject(courses)}))
            .catch(next)
    }

    //[PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
            .then(()=> res.redirect('/me/stored/courses'))
            .catch(next)
    }
    //[DELETE] /courses/:id/force
    forceDestroy(req, res, next){
        Course.deleteOne({_id: req.params.id})
            .then(()=> res.redirect('back'))
            .catch(next)
    }

    //[SOFT DELETE] /courses/:id
    destroy(req, res, next){
        Course.delete({_id: req.params.id})
            .then(()=> res.redirect('back'))
            .catch(next)
    }

    //[RESTORE] /courses/:id/restore
    restore(req, res, next){
        Course.restore({_id: req.params.id})
            .then(()=> res.redirect('back'))
            .catch(next)
    }
}
module.exports = new CourseController();
// Create an element to export
// To Import this element: const newController = require('./NewsController')
