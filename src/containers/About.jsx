import React from 'react';
import Footer from '../components/Footer'
import NavBar from '../components/NavBar';
import { Typography } from '@mui/material';

const About =()=> {
  return (
    <div className="App">
      <NavBar />
        <Typography sx={{textAlign:'center', marginTop:'1em'}} variant="h6">
        Ini Adalah Halaman About
        </Typography>
      <Footer/>
    </div>
  )
}

export default About