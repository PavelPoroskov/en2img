import React from "react";
import { inject, observer } from "mobx-react";
import ImageList from "@mui/material/ImageList";
import Chip from "@mui/material/Chip";
import ImageGridItem from "./ImageGridItem";
import { withStyles } from '@mui/styles';

const styles = {
  root: {
    width: "50%",
    float: "left",
    display: "flex",
    flexWrap: "wrap"
  },
  gridList: {
    width: "100%",
    overflowY: "auto",
  },
  chip: {
    margin: "5px"
  }
}

const ImageGrid = (props) => {
  const classes = props.classes
  const photoGallery = props.photoGallery

  const tiles = photoGallery.pics.map(pic => {
    return <ImageGridItem key={pic.id} data={pic} />;
  });

  return (
    <div className={classes.root}>
      <Chip label={`total images: ${photoGallery.totalPics}`} className={classes.chip} />
      <ImageList rowHeight={180} cols={3} gap={5} className={classes.gridList}>
        {tiles}
      </ImageList>
    </div>
  );
}

export default withStyles(styles)(
  inject("photoGallery")(
    observer(ImageGrid)
));
