import React, {useState, useEffect} from 'react';
import styles from "./HomePage.module.css"; 
import CardCategory from '../components/CardCategory';
import { Box,  Typography} from "@mui/material";
import {Credentials} from '../data/Credentials';
import axios from 'axios';
import { Link } from "react-router-dom";
import {useParams} from "react-router-dom";
import CardCategoryDetail from '../components/CardCategoryDetail';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const DetailPage = ()=>{
    const spotify = Credentials();
    let param= useParams();

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
        setGenres((genreResponse.data.categories.items).find((genre)=>genre.id === param.id));
      });
    });
    }, []);

    console.log(genres)
  
    return (
      <>  <NavBar />
          <Box>
          <Typography variant='h6' sx={{textAlign: 'center',marginTop: '1em', marginBottom:'1em', fontWeight: 'bold'}}>Musics' Genres Detail</Typography>
          </Box>

          <Box className={styles.container}>
                <CardCategoryDetail key={genres.id} propMusic={genres} />
          </Box>
          <Footer />
      </>
    )
}

export default DetailPage;