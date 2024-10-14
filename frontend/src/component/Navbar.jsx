import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
function Navbar() {
  return (
    <div>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"sx={{ backgroundColor: 'peach' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            COURSEAPP
          </Typography>
          <Stack spacing={2} direction="row">
          <Link to={'/'}><Button color="inherit" variant='contained'>HOME</Button></Link> 
         <Link to={'/add'}><Button color="inherit" variant='contained'>ADD</Button></Link>
         </Stack>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar