import React, { useState, useEffect } from 'react';
import { Grid } from "@material-ui/core";
import { getPhotosByQuery, getPhotosCurated } from "../../api/imageApi"
import SearchBar from "../SearchBar"
import ImagePopper from './ImagePopper';
import { imageStyles } from '../../assets/styles/sharedStyles'


function ImagesGrid() {
  const classes = imageStyles();
  
  const [images, setImages] = useState([])
  const [input, setInput] = useState("")

  useEffect(() => {
    getPhotosCurated()
      .then((res) => {
        setImages(res.photos)      
      })
      .catch((err) => { 
          console.log(`Error occurred when loading images data into array: ${err}`)   
      });
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(input) {
      getPhotosByQuery(input)
      .then((res) => {
        setImages(res.photos)      
      })
      .catch((err) => { 
          console.log(`Error occurred when loading images data into array: ${err}`)   
      });
    } 
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <>
    
      <div className={classes.imgGrid}>
      <SearchBar input={input} handleChange={handleChange} handleSubmit={handleSubmit}/>
        <Grid container spacing={3}>
          {images.map((image, index) => {
            return (
                <Grid item xs={6} sm={3} key={index} >
                  <ImagePopper image={image}/>
                </Grid>
            )
          })}
        </Grid>
      </div>
    </>
  )
  
}

export default ImagesGrid;