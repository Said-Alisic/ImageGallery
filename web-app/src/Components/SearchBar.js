import React from 'react';
import { InputBase, IconButton, Paper,  } from "@material-ui/core";
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import { searchBarStyles } from '../assets/styles/sharedStyles'

function SearchBar (props) {
  const  classes = searchBarStyles();

  return (
    <Paper component="form" className={classes.searchBar} onSubmit={props.handleSubmit}>
      <InputBase className={classes.input} 
                  id="searchBar" 
                  type="text" 
                  value={props.input} 
                  onChange={props.handleChange}
                  placeholder="Search for images"
                  autoComplete='off'/>
      <IconButton className={classes.searchBtn} type="submit" name="action">
        <SearchSharpIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;