import React from 'react';
import { 
    Typography, List, ListItem, 
    CardContent, Card, Button
} from '@material-ui/core';
import GetAppSharpIcon from '@material-ui/icons/GetAppSharp';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import ImageSearchSharpIcon from '@material-ui/icons/ImageSearchSharp';
import { imageStyles } from '../../assets/styles/sharedStyles'

function ImageContent (props) {
    const classes = imageStyles();

    return (
        <>
            <Card>
                <CardContent className={classes.imgCard}>
                    <List>
                        <ListItem className={`${classes.cardContent} ${classes.cardHeader}`}>
                            <Typography variant="h5" component="h2">Image Details</Typography>
                        </ListItem>
                        <ListItem className={classes.cardContent}>
                            <Button className={classes.cardBtn} 
                                    variant="contained"
                                    href={`https://www.pexels.com/photo/${props.image.id}/download/`} 
                                    rel="noreferrer" 
                                    target="_blank">
                                <Typography className={classes.cardBtnText}>Download</Typography>
                                <GetAppSharpIcon className={classes.cardBtnIcon}/>
                            </Button>
                        </ListItem>
                        <ListItem className={classes.cardContent}>
                        <Button className={classes.cardBtn} 
                                variant="contained"
                                href={props.image.photographer_url} 
                                rel="noreferrer" 
                                target="_blank">
                            <Typography className={classes.cardBtnText}>Go to Pexels Artist</Typography>
                            <PersonSharpIcon className={classes.cardBtnIcon}/>
                        </Button>
                        </ListItem>
                        <ListItem className={classes.cardContent}>
                        <Button className={classes.cardBtn} 
                                variant="contained"
                                href={props.image.url} 
                                rel="noreferrer" 
                                target="_blank">
                            <Typography className={classes.cardBtnText}>Go to Pexels Image</Typography>
                            <ImageSearchSharpIcon className={classes.cardBtnIcon}/>
                        </Button>
                        </ListItem>
                    </List>
                </CardContent>
            </Card> 
        </>
    )
}

export default ImageContent;