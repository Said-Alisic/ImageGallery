import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link as NavLink } from 'react-router-dom';
import { navBarStyles } from '../assets/styles/sharedStyles'

function NavBar() {
  const classes = navBarStyles();

  return (
    <AppBar className={classes.navBar}>
      <Toolbar>
        <Button className={`${classes.btnFont} ${classes.titleBtn}`}
                component={NavLink} to="/">Image Cards</Button>
        <Button className={`${classes.btnFont} ${classes.btn}`} 
                component={NavLink} to="/images">Images</Button>
        <Button className={`${classes.btnFont} ${classes.btn}`} 
                component={NavLink} to="/favorites">Favorites</Button>
        <Button className={`${classes.btnFont} ${classes.btn}`} 
                component={NavLink} to="/about">About</Button>
        <Button className={`${classes.btnFont} ${classes.btn}`}
                component={NavLink} to="/about-pexels">About Pexels</Button>
      </Toolbar> 
    </AppBar>  
  );
}

export default NavBar;
