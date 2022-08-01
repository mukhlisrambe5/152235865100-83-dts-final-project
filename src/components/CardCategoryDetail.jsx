import React from 'react'

import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

import styles from "./CardCategory.module.css";



const CardCategoryDetail = ({propMusic})=> {
  const position = parseInt("0");
  return (
    <>  
      <Card  >
        <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", marginBottom: '1em'}}>        
              <CardMedia component="img"
              sx={{width:300}}
              // image={`${propMusic.icons[0].url}`}
              image={`${propMusic.icons?.[0].url}`}
              alt="CategoriesImage"
              ></CardMedia>
              <CardContent>
              <Typography variant="h6" sx={{textAlign: 'center'}}>Href: {propMusic.href}</Typography>
              <Typography variant="h6" sx={{textAlign: 'center'}}>Id: {propMusic.id}</Typography>
              <Typography variant="h6" sx={{textAlign: 'center'}}>Name: {propMusic.name}</Typography>
              </CardContent>
                  
        </Box>
      </Card>
    </>
  )
}

export default CardCategoryDetail;