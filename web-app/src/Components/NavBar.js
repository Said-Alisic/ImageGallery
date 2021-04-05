import React from 'react';
import { AppBar, InputBase, Toolbar, Button } from '@material-ui/core';
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';
import PhotoLibrarySharpIcon from '@material-ui/icons/PhotoLibrarySharp';
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
                component={NavLink} to="/images">Images 
                <PhotoLibrarySharpIcon className={`${classes.btnIcon}`}/>    
        </Button>
        <Button className={`${classes.btnFont} ${classes.btn}`} 
                component={NavLink} to="/favorites">Favorites 
                <FavoriteBorderSharpIcon className={`${classes.btnIcon}`}/>
        </Button>
      </Toolbar> 
    </AppBar>  
  );
}

export default NavBar;
