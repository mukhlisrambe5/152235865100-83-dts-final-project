import React from 'react'

import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

import styles from "./CardCategory.module.css";



const CardCategory = ({propMusic})=> {
  return (
    <>  
      <Card  >
        <Box className={styles.boxy}>        
              <CardMedia component="img"
              sx={{width:300}}
              image={`${propMusic.icons[0].url}`}
              alt="CategoriesImage"
              ></CardMedia>
              
              <CardContent>
              <Typography className={styles.genreTitle} variant="h6" >{propMusic.name}</Typography>
              </CardContent>
                  
        </Box>
      </Card>
    </>
  )
}

export default CardCategory