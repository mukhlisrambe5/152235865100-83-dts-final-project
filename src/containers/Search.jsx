import React, {useState, useEffect} from 'react';
import Footer from '../components/Footer'
import NavBar from '../components/NavBar';
import Dropdown from '../components/Dropdown';
import Listbox from '../components/Listbox';
import Detail from '../components/Detail';
import {Credentials} from '../data/Credentials';
import styles from './Search.module.css'

import axios from 'axios';


const Search = ()=>{
    const spotify = Credentials();

    const [token, setToken] = useState('');  
    const [genres, setGenres] = useState({selectedGenre: '', listOfGenresFromAPI: []});
    const [playlist, setPlaylist] = useState({selectedPlaylist: '', listOfPlaylistFromAPI: []});
    const [tracks, setTracks] = useState({selectedTrack: '', listOfTracksFromAPI: []});
    const [trackDetail, setTrackDetail] = useState(null);

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
      });
      
    });
    }, [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret]);

    const gendreChanged = val =>{
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
  const playlistChanged = val => {
    console.log(val);
    setPlaylist({
      selectedPlaylist: val,
      listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI
    });
  }

  const buttonClicked = e => {
    e.preventDefault();

    axios(`https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=10`, {
      method: 'GET',
      headers: {
        'Authorization' : 'Bearer ' + token
      }
    })
    .then(tracksResponse => {
      setTracks({
        selectedTrack: tracks.selectedTrack,
        listOfTracksFromAPI: tracksResponse.data.items
      })
    });
  }
    
  const listboxClicked = val => {

    const currentTracks = [...tracks.listOfTracksFromAPI];

    const trackInfo = currentTracks.filter(t => t.track.id === val);

    setTrackDetail(trackInfo[0].track);



  }

    return (
      <>
        <NavBar />
        <div className={styles.app}>
        <form onSubmit={buttonClicked}>
          <div className={styles.container}>
              <div className={styles.containerOption}>
                <div className={styles.genre}>
                  <label htmlFor="" style={{marginRight: '1em', color: '#468FEA'}}>Genre:</label>
                  <Dropdown options={genres.listOfGenresFromAPI} selectedValue={genres.selectedGenre} changed={gendreChanged} />
                </div>

                <div className={styles.playlist}>
                  <label htmlFor="" style={{marginRight: '0.6em' , color: '#468FEA' }}>Playlist:</label>
                  <Dropdown options={playlist.listOfPlaylistFromAPI}  selectedValue={playlist.selectedPlaylist} changed={playlistChanged}/>
                </div>
                <button type='submit' className={styles.search}>Search</button>
                <Listbox items={tracks.listOfTracksFromAPI} clicked={listboxClicked} />
              </div>
              <div>
                {trackDetail && <Detail {...trackDetail} /> }
              </div>
             
              
          </div>
       </form>
      </div>
      <Footer/>
      </>
      
     
    )
}

export default Search;