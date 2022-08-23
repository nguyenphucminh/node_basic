const mongoose = require('mongoose')
async function connect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/TrainingNodeJS');
        console.log("Connect Successful!")
    } catch (error) {
        console.log("Connect Failed!")
        console.log('ERR: ', error)
    }
}
module.exports = {connect}