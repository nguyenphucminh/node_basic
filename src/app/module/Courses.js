const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)
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
module.exports = mongoose.model('Course', Course)