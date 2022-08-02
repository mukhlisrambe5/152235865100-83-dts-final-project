import React from 'react';
import Footer from '../components/Footer'
import NavBar from '../components/NavBar';
import { Typography } from '@mui/material';

const About =()=> {
  return (
    <div className="App">
      <NavBar />
        <Typography sx={{textAlign:'center', marginTop:'3em', color:'#013769'}} variant="h6">
        <span style ={{fontSize: '30px'}}>Garlic's Music List </span>merupakan sebuah situs referensi untuk mendapatkan informasi terkait genre, playlist, tracks, dan artis music.
        </Typography>
      <Footer/>
    </div>
  )
}

export default About