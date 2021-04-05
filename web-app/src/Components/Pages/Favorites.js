import React from 'react';
import { textStyles } from '../../assets/styles/sharedStyles'

function Favorites() {
    const classes = textStyles()

    return (
        <>
            <h1 className={classes.mainText}>Favorites Page</h1>
            <h1 className={classes.mainText}>(Still under development!!!)</h1>
            <h3 className={classes.infoText}>
                Here you can find all your favorite images! 
                Note that these images will only be saved locally 
                and will disappear if and when the browser cache 
                is cleared!!!
                </h3>
        </>
    )
};

export default Favorites;