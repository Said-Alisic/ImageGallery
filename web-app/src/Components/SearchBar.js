import React from 'react';
import { Input, Button, Paper } from "@material-ui/core";
import { searchBarStyles } from '../assets/styles/sharedStyles'

function SearchBar (props) {
  const  classes = searchBarStyles();

  return (
    <Paper component="form" className={classes.searchBar} onSubmit={props.handleSubmit}>
      <Input className={classes.input} id="searchBar" type="text" value={props.input} onChange={props.handleChange}/>
      <Button className={classes.subBtn} type="submit" name="action">Search</Button>
    </Paper>
  );
}

export default SearchBar;