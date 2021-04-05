import React from 'react';
import { textStyles } from '../../assets/styles/sharedStyles'

function Home() {
    const classes = textStyles()

    return (
        <>
            <h1 className={classes.mainText}>Image Cards</h1>
            <h3 className={classes.infoText}>
                Welcome to <i>Image Cards</i> which is an 
                application showcasing images within different genres of photography 
                and art and allowing you to view the uploader's profile in addition to being able 
                to download images directly from Pexels or by being redirected to the Pexels website. 
                The images are retrieved from Pexels through the Pexels API and only a max 
                of 80 images will be retrieved at a given time.
            </h3>
            <h2 className={classes.mainText}>About Pexels</h2>
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

export default Home;