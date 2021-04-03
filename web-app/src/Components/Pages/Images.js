import React from 'react';
import ImagesGrid from './ImagesGrid';
import { textStyles } from '../../assets/styles/sharedStyles'

function Images() {
    const classes = textStyles()

    return (
        <>
            <h1 className={classes.mainText}>Images Page</h1>
            <h3 className={classes.infoText}>
                Try searching for images by typing 
                "Nature", "Art", "Music", 
                "Architecture", and more 
                in the searchbar! :)
            </h3>
            <ImagesGrid/>
        </>
    )
};

export default Images;