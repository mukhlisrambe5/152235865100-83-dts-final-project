import React from 'react'
import {
    Box,
    Typography,
  } from '@mui/material';
  
const Footer = () => {
  return (
    <Box sx={{backgroundColor: 'rgb(80,153,244)',color:'white', textAlign:'center', paddingTop:'0.5em', paddingBottom: '0.5em', width: '100vw' , position:'fixed', bottom: 0}}>
        <Typography variant="h7">&copy; Muklis Rambe: 152235865100-83 </Typography>
    </Box>
  )
}

export default Footer