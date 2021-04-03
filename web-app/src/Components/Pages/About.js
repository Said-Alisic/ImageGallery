import React from 'react';
import { textStyles } from '../../assets/styles/sharedStyles'

function About() {
    const classes = textStyles()

    return (
        <>
            <h1 className={classes.mainText}>About Page</h1>
            <h3 className={classes.infoText}>This is a simple frontend app for...</h3>
        </>
    )
};

export default About;