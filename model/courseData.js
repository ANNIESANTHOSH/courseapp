const mongoose= require('mongoose');
const courseSchema = new mongoose.Schema({
    courseImage:String,
    courseId:String,
    courseName:String,
    courseCategory:String,
    courseDescription:String

})
const Course = mongoose.model('Course',courseSchema);
module.exports =Course;