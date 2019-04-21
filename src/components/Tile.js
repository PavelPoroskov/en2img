import React from "react";
import { observer, inject } from "mobx-react";
import GridTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import { withStyles } from '@material-ui/styles'

const styles = {
  gridTile: {
    cursor: "pointer",
    height: 185,
    width: '33.333%',
    padding: '2.5px',
  },
  img: {
    width: '100%',
    height: 'auto',
    left: '0px',
    transform: 'translateY(-50%)',
    top: '50%',    
    position: 'relative',
  },
}

@inject("photoGallery")
@observer
class Tile extends React.Component {
  selectedPic(e) {
    this.props.photoGallery.selectedPicture(this.props.data.large_image)
  }

  render() {
    const classes = this.props.classes
    
    return (
      <GridTile
        className={classes.gridTile}
        onClick={this.selectedPic.bind(this)}
      >
        <img src={this.props.data.image} className={classes.img}/>
        <GridListTileBar title={this.props.data.title}/>
      </GridTile>
    )
  }
}

export default withStyles(styles)(Tile)
