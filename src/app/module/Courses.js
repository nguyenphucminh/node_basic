const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, default: '', maxLength: 255, required: true},
    description: {type: String, default: '', maxLength: 600},
    videoId: {type: String, maxLength: 225},
    image: {type:String, default:'', maxLength: 600},
    slug:{type: String, maxLength: 225, slug:'name', unique: true}
},{
    timestamps: true
})
// Add plugin
mongoose.plugin(slug)
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
})
module.exports = mongoose.model('Course', Course)