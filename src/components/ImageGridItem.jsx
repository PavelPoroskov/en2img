import React, { useCallback } from "react";
import { observer, inject } from "mobx-react";
import ImageListItem from "@mui/material/ImageListItem"
import ImageListItemBar from "@mui/material/ImageListItemBar"
import { withStyles } from '@mui/styles'

const styles = {
  gridTile: {
    cursor: "pointer",
    height: 180,
    overflow: 'hidden',
  },
}

const ImageGridItem = (props) => {
  const classes = props.classes
  const selectPicture = useCallback(
    () => {
      props.photoGallery.selectedPicture(props.data.large_image);
    },
    [props.data.large_image],
  );

  return (
    <ImageListItem
      className={classes.gridTile}
      onClick={selectPicture}
    >
      <img src={props.data.image}/>
      <ImageListItemBar title={props.data.title}/>
    </ImageListItem>
  )
}

export default withStyles(styles)(
  inject("photoGallery")(
    observer(ImageGridItem)
));
