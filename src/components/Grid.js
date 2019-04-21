import React from "react";
import { inject, observer } from "mobx-react";
import GridList from "@material-ui/core/GridList";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import Tile from "./Tile";

const styles = {
  root: {
    width: "50%",
    float: "left",
    display: "flex",
    flexWrap: "wrap"
  },
  gridList: {
    width: "100%",
    overflowY: "auto"
  },
  chip: {
    margin: "5px"
  }
};

@inject("photoGallery")
@observer
export default class Grid extends React.Component {
  render() {
    const tiles = this.props.photoGallery.pics.map(pic => {
      return <Tile key={pic.id} data={pic} />;
    });

    return (
      <div style={styles.root}>
        <Chip style={styles.chip}>
          {`total images: ${this.props.photoGallery.totalPics}`}
        </Chip>
        <GridList cellHeight={180} cols={3} padding={5} style={styles.gridList}>
          {tiles}
        </GridList>
      </div>
    );
  }
}
