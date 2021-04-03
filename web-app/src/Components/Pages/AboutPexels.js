import React from 'react';
import { textStyles } from '../../assets/styles/sharedStyles'

function AboutPexels() {
    const classes = textStyles()

    return (
        <>
            <h1 className={classes.mainText}>About Pexels Page</h1>
            <h3 className={classes.infoText}>
                This application uses the Pexels API 
                from Pexels.com, which is a free website 
                for uploading photos and videos in addition 
                to being able to download the images in various 
                sizes directly from the website. Check it out 
                at <a href="https://www.pexels.com/"> here</a>!!
            </h3>
        </>
    )
};

export default AboutPexels;