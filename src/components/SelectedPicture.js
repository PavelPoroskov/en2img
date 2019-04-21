import React from "react";
import { observer, inject } from "mobx-react";
// import Card from "@material-ui/core/Card";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardTitle from "@material-ui/core/CardHeader";
import { withStyles } from "@material-ui/styles";

const styles = {
  card: {
    width: "50%",
    margin: 0,
    float: "left",
    overflow: "hidden"
    //height: '100vh'
  },
  media: {
    height: "100vh",
    //width: '100%',
    //height: 'auto',

    //'background-size': 'contain',
    "background-size": "auto auto",
    "background-position": "top center"
  },
  img: {
    width: "100%",
    height: "auto"
  }
};

@inject("selectedPicture")
@observer
class SelectedPicture extends React.Component {
  render() {
    const url = this.props.selectedPicture.picPath;
    const classes = this.props.classes;

    // //warning in material-ui v4
    // return (
    //   <Card style={style}>
    //     <CardMedia>{url ? <img src={url} /> : ""}</CardMedia>
    //   </Card>
    // );
    // return (
    //   <Card className={classes.card}>
    //     <CardMedia image={url} className={classes.media}/>
    //   </Card>
    // );
    // return (
    //   <Card className={classes.card}>
    //     <img src={url} className={classes.img} />
    //   </Card>
    // );
    return (
      <div className={classes.card}>
        <img src={url} className={classes.img} />
      </div>
    );
  }
}

export default withStyles(styles)(SelectedPicture);
