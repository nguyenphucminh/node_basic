module.exports = {
    //multiple object
    multipleMongooseToObject: function(mongooses){
        return mongooses.map(mongoose => mongoose.toObject())
    },
    // 1 object
    mongooseToObject: function (mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }
}