import React, {useState, useEffect} from 'react';
import styles from "./HomePage.module.css"; 
import CardCategory from '../components/CardCategory';
import {Box,  Typography} from "@mui/material";
import {Credentials} from '../data/Credentials';
import axios from 'axios';


const HomePage = ()=>{
    const spotify = Credentials();

    const [token, setToken] = useState('');  
    const [genres, setGenres] = useState({selectedGenre: '', listOfGenresFromAPI: []});
    const [playlist, setPlaylist] = useState({selectedPlaylist: '', listOfPlaylistFromAPI: []});
    // const [tracks, setTracks] = useState({selectedTrack: '', listOfTracksFromAPI: []});
    // const [trackDetail, setTrackDetail] = useState(null);

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
        setGenres({
          selectedGenre: genres.selectedGenre,
          listOfGenresFromAPI: genreResponse.data.categories.items
        })
        // setGenres(genreResponse.data.categories.items);
      });
      
    });
    }, [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret]);

    const genreChanged = val =>{
      setGenres({
        selectedGenre: val,
        listOfGenresFromAPI: genres.listOfGenresFromAPI,
      });
      axios(`https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=10`, {
      method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + token}
    })
    .then(playlistResponse => {
      setPlaylist({
        selectedPlaylist: playlist.selectedPlaylist,
        listOfPlaylistFromAPI: playlistResponse.data.playlists.items
      })
    });

    console.log(val);
  }
  

    return (
      <>
          <Box className={styles.container}>
              <Typography variant='h6' sx={{textAlign: 'center', marginBottom:'1em'}}>Musics' Genres</Typography>
              <CardCategory options={genres.listOfGenresFromAPI} clickHandler={genreChanged}/>
              <br />
              <CardCategory options={playlist.listOfPlaylistFromAPI}  selectedValue={playlist.selectedPlaylist}/>
              <CardCategory />

          </Box>
      </>
    )
}

export default HomePage;