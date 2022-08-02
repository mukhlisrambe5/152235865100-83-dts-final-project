import React from 'react'
import styles from './Footer.module.css'
import {
    Box,
    Typography,
  } from '@mui/material';
  
const Footer = () => {
  return (
    <Box className={styles.footer}>
        <Typography variant="h7">&copy; Muklis Rambe: 152235865100-83 </Typography>
    </Box>
  )
}

export default Footer