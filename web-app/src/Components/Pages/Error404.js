import React from 'react';
import { textStyles } from '../../assets/styles/sharedStyles'

function Error404() {
    const classes = textStyles()

    return (
        <>
            <h1 className={classes.mainText}>Error404 Page</h1>
            <h3 className={classes.infoText}>Looks like you took a wrong turn...</h3>
        </>
    )
};

export default Error404;