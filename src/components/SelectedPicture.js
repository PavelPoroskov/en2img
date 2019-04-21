import React from "react";
import { observer, inject } from "mobx-react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardTitle from "@material-ui/core/CardHeader";

const style = {
  width: "50%",
  margin: 0,
  float: "left",
  overflow: "hidden"
};

@inject("selectedPicture")
@observer
export default class SelectedPicture extends React.Component {
  render() {
    const url = this.props.selectedPicture.picPath;

    return (
      <Card style={style}>
        <CardMedia>{url ? <img src={url} /> : ""}</CardMedia>
      </Card>
    );
  }
}
