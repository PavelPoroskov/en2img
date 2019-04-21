import React from "react";
import { observer, inject } from "mobx-react";
import GridTile from "@material-ui/core/GridListTile";
import { withStyles } from '@material-ui/styles';

const styles = {
  gridTile: {
    cursor: "pointer"
  }
};

@inject("photoGallery")
@observer
class Tile extends React.Component {
  selectedPic(e) {
    this.props.photoGallery.selectedPicture(this.props.data.large_image);
  }

  render() {
    const classes = this.props.classes
    
    return (
      <GridTile
        className={classes.gridTile}
        onClick={this.selectedPic.bind(this)}
        title={this.props.data.title}
      >
        <img src={this.props.data.image} />
      </GridTile>
    );
  }
}

export default withStyles(styles)(Tile)
