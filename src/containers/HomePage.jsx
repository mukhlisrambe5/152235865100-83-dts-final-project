import React, {useState, useEffect} from 'react';
import styles from "./HomePage.module.css"; 
import CardCategory from '../components/CardCategory';
import { Box,  Typography} from "@mui/material";
import {Credentials} from '../data/Credentials';
import axios from 'axios';
import { Link } from "react-router-dom";


const HomePage = ()=>{
    const spotify = Credentials();

    const [token, setToken] = useState('');  
    const [genres, setGenres] = useState([]);

  
    useEffect(()=>{
        axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {  
      console.log(tokenResponse.data.access_token)    
      setToken(tokenResponse.data.access_token);

      axios('https://api.spotify.com/v1/browse/categories?locale=sv_ID', {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      })
      .then (genreResponse => {        
        setGenres(genreResponse.data.categories.items)
      });
    });
    }, []);

    console.log(genres)
  
    return (
      <>  
          <Box>
          <Typography variant='h6' sx={{textAlign: 'center',marginTop: '1em', marginBottom:'1em', fontWeight: 'bold'}}>Musics' Genres</Typography>
        </Box>

          <Box className={styles.container}>
              {genres.map((genre)=>{
                return <Link to={`/browse/categories/${genre.id}`} style={{textDecoration: 'none'}} propmusic={genre}><CardCategory key={genre.id} propMusic={genre} /></Link>
             })}
          </Box>
      </>
    )
}

export default HomePage;