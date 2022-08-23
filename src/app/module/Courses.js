const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, default: '', maxLength: 255},
    description: {type: String, default: '', maxLength: 600},
    image: {type:String, default:'', maxLength: 600},
    createdAt: {type: Date, dafault: Date.now},
    updatedAt:{type: Date, default: Date.now}
})
module.exports = mongoose.model('Course', Course)