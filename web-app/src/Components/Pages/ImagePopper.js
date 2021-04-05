import React, { useState } from 'react';
import { Popper } from '@material-ui/core';
import ImageContent from './ImageContent';
import { imageStyles } from '../../assets/styles/sharedStyles'

function ImagePopper(props) {
  const classes = imageStyles()

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handlePopoverClick = () => (event) => {
    
    if (!open) {
      setAnchorEl(event.currentTarget);
      setOpen(true);
      setPlacement("bottom")
    } else {
      setAnchorEl(null);
      setOpen(false)
    }
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setOpen(false)
  };

  return (
    <div 
        onMouseEnter={() => clearTimeout(null)} 
        onMouseLeave={() => {
            setTimeout(handlePopoverClose, 200);
          }}>
      <Popper open={open} 
              anchorEl={anchorEl} 
              placement={placement}
              popperOptions={{
                modifiers: {
                   offset: {
                       offset: '0, -430',
                   },
                },
              }}>
        <ImageContent image={props.image}/>
      </Popper>
      <img  className={classes.img}
            onClick={handlePopoverClick()}
            src={props.image.src.portrait} 
            alt={props.image.src.portrait}/>
    </div>
  );
}

export default ImagePopper;