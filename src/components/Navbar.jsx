import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          firstApp
        </Typography>
        
     <Link to={'/'}> <Button style={{color:'white'}}>View</Button></Link>
     <Link to={'/Add'}>  <Button style={{color:'white'}}>Add</Button></Link>
     <Link to={'/Mcard'}>  <Button style={{color:'white'}}>MCard</Button></Link>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar 
