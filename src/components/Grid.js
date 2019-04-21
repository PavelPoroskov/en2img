import React from "react";
import { inject, observer } from "mobx-react";
import GridList from "@material-ui/core/GridList";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import Tile from "./Tile";
import { withStyles } from '@material-ui/styles';

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
    //margin: '-2.5px'
  },
  chip: {
    margin: "5px"
  }
}

@inject("photoGallery")
@observer
class Grid extends React.Component {
  render() {
    const classes = this.props.classes
    const photoGallery = this.props.photoGallery

    const tiles = photoGallery.pics.map(pic => {
      return <Tile key={pic.id} data={pic} />;
    });

    return (
      <div className={classes.root}>
        <Chip label={`total images: ${photoGallery.totalPics}`} className={classes.chip} />
        <GridList cellHeight={180} cols={3} spacing={5} className={classes.gridList}>
          {tiles}
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(Grid)