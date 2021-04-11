import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Link as NavLink } from 'react-router-dom';
import { navBarStyles } from '../assets/styles/sharedStyles'

function NavBar() {
  const classes = navBarStyles();

  return (
    <AppBar className={classes.navBar}>
      <Toolbar>
        <Button className={classes.titleBtn}
                component={NavLink} to="/">Image Cards</Button>
        <Button className={classes.btn} 
                component={NavLink} to="/images">Images    
        </Button>
        <Button className={classes.btn} 
                component={NavLink} to="/favorites">Favorites 
        </Button>
      </Toolbar> 
    </AppBar>  
  );
}

export default NavBar;
