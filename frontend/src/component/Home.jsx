import React, { useState ,useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Container, Link, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import './Home.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  // const user=sessionStorage.getItem('username');
  const [courses,setCourse] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/api/courses').then((res)=>{
            setCourse(res.data)
    })
  },[])
  let deleteCourse=(p)=>
  {
    axios.delete('http://localhost:3000/api/courses/delete/'+p).then((res)=>{
      alert('deleted');
      window.location.reload();
    })
    .catch(()=>{console.log("error")})
  }
     const navigate=useNavigate()
      function updateCourse(course){
        navigate('/add',{state:{course}})
      }
  return (
    <Container sx={{ paddingTop: 5 }} className="card-container">
      <Typography variant="h4" color="white" gutterBottom>
        Course List
      </Typography>
      <Grid container spacing={2}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={3} key={course.courseId}> {/* 4 cards in a row */}
            <Card sx={{ backgroundColor: '#E6E6FA', height: '100%' }}>
              <CardMedia
                component="img"
                alt={course.courseName}
                height="200" // Adjust height as needed
                image={course.courseImage}
                sx={{ objectFit: 'contain' }} // Ensures the full image is visible
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {course.courseName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Category: {course.courseCategory}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description: {course.courseDescription}
                </Typography>
                <Button variant="contained" color="success">
                  Success
                 </Button>
                 <Button variant="contained" color="error" onClick={() => {deleteCourse(course._id); }}>
                  Delete
                 </Button>
                 <Button variant="contained" color="success" onClick={()=>{updateCourse(course)}}>
                  update
                 </Button>
                <Typography variant="body2" sx={{ marginTop: 2 }}>
                  <Link href="#" color="primary">
                    Read More
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
