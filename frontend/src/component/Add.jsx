import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const Addcourse = () => {
  const [course, setCourse] = useState({
    courseImage: "",
    courseId: "",
    courseName: "",
    courseCategory: "",
    courseDescription: ""
  });
  
  const navigate= useNavigate();

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(course); // Log Course data

    // Reset form
    setCourse({
      courseImage: "",
      courseId: "",
      courseName: "",
      courseCategory: "",
      courseDescription: ""
    });
  };
  const location= useLocation()
  let sendData=()=>{
    if(location.state!=null){
      axios.put('http://localhost:3000/api/courses/edit/'+location.state.course._id,course).then((res)=>{
        alert('data updated');
        navigate('/home')
      }).catch((error)=>{
        console.log(error);
      })
    }
    else{
      axios.post('http://localhost:3000/api/courses/addCourse/',course).then((res)=>{
         navigate('/home')
      }).catch((error)=>{
        console.log(error)
      })
    }
  }
  useEffect(()=>
  {
    if(location.state!=null)
    {
      setCourse({...course,
        courseImage:location.state.course.courseImage,
        courseId:location.state.course.courseId,
        courseName:location.state.course.courseName,
        courseCategory:location.state.course.courseCategory,
        courseDescription:location.state.course.courseDescription,
      })
    }
  },[])
// courseImage:String,
//courseId:String,
//courseName:String,
//cousrseCategory:String,
//courseDiscription:String
  return (
    <Container sx={{ paddingTop: 3, background: 'white'}} className="add">
      <Typography variant="h4" className="add-title" color="blueviolet">
        Add Course Details
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="courseImage"
          label="Course Image URL"
          variant="outlined"
          fullWidth
          margin="normal"
          value={course.courseImage}
          onChange={handleChange}
        />
        <TextField
          name="courseId"
          label="Course ID"
          variant="outlined"
          fullWidth
          margin="normal"
          value={course.courseId}
          onChange={handleChange}
        />
        <TextField
          name="courseName"
          label="Course Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={course.courseName}
          onChange={handleChange}
        />
        <TextField
          name="courseCategory"
          label="Course Category"
          variant="outlined"
          fullWidth
          margin="normal"
          value={course.courseCategory}
          onChange={handleChange}
        />
        <TextField
          name="courseDescription"
          label="Course Description"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={course.courseDescription}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="add-button"
          onClick={sendData}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Addcourse;
