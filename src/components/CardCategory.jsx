import React from 'react'

import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

import styles from "./CardCategory.module.css";



const CardCategory = props=> {
  return (
    <>  
      <Card  >
        {/* <Box>
          <Typography variant="h6">Musics' Categories</Typography>
        </Box> */}
        <Box className={styles.boxy}>
          {props.options?.map((item, idx) => <div key={idx} value={item.id}>
            {/* {item.name} */}
              <CardMedia component="img"
              sx={{width:300}}
              image={`${item.icons.map(icon => icon.url)}`}
              // onClick={() => alert("Image clicked")}
              onClick={props.clickHandler}

              alt="CategoriesImage"
              ></CardMedia>
              <CardContent>
                <Typography variant="h6" sx={{textAlign: 'center'}}>{item.name}</Typography>
              </CardContent>
            </div>)}        
        </Box>
      </Card>
    </>
  )
}

export default CardCategory