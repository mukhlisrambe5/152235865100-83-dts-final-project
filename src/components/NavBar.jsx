import React from "react";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import { logout } from "../authentication/firebase"

import {Routes, Route, Link} from 'react-router-dom';

import { useNavigate } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar = () => {
  const navigate = useNavigate();

  const buttonLogoutOnClickHandler = async() => {
    await logout();
    navigate("/login");
  };

  return (
    <Box className={styles.grow}>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h8" component="div" className={styles.grow}>
            <Box sx={{ display: 'flex', gap: '2em', fontSize: '1.5em', color:"inherit"}}>
              <Link to="/" style={{textDecoration: 'none', color: 'white'}}>Home</Link>
              <Link to="/search" style={{marginLeft:"0.5em", textDecoration: 'none', color: 'white'}}>Search</Link>
              <Link to="about" style={{marginLeft:"0.5em", textDecoration: 'none', color: 'white'}}>About</Link>
            </Box>
          </Typography>
          <Button color="inherit" onClick={buttonLogoutOnClickHandler}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};


export default NavBar;
