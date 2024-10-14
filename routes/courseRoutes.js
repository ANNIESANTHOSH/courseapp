const express=require('express')
const router=express.Router();
const courseModel= require('../model/courseData');
router.use(express.json());
router.use(express.urlencoded({extended:true}));
router.get('/', async (req, res)=>{
    try{
        const courses = await courseModel.find();
        res.status(200).send(courses);
    }
    catch(error){
        res.status(404).send('course not found');
    }
});
router.post('/addCourse', async (req, res)=>{
    try{
    const course=req.body;
    const newCourse =new courseModel(course);
    const savedCourse = await newCourse.save();
    res.status(200).send('Course added successfull')
    }
    catch(error){
        res.status(404).send('error occured')
    }
});
router.put ('/edit/:id' ,async (req, res)=>{
    try{
        const id= req.params.id;
        const updatedCourse = await courseModel.findByIdAndUpdate(id,req.body);
        res.status(200).send('course updated successfully');
    }
    catch(error){
        res.status(404).send('error occured');
    }
});
router.delete('/delete/:id' ,async (req,res)=>
{
    try{
        const id= req.params.id;
        const deleteCourse= await courseModel.findByIdAndDelete(id);
        res. status(200).send('course deleted successfully')
    }
    catch(error){
        res.status(404).send('error occured in deletion');
    }
});
module.exports=router