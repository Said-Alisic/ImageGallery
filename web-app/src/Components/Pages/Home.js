import React from 'react';
import { textStyles } from '../../assets/styles/sharedStyles'

function Home() {
    const classes = textStyles()

    return (
        <>
            <h1 className={classes.mainText}>Home Page</h1>
            <h3 className={classes.infoText}>
                Welcome to <i>Image In You</i> which is an 
                application showcasing images within different 
                genres of photography and art and allowing you  
                to view the uploaders name and more information 
                about the uploader in addition to being able 
                to download images. The images are retrieved 
                from Pexels through the Pexels API and only a max 
                of 80 images will be retrieved at a given time.
                </h3>
        </>
    )
};

export default Home;