import React from "react";
import { observer, inject } from "mobx-react";
import { withStyles } from "@mui/styles";

const styles = {
  card: {
    width: "50%",
    margin: 0,
    float: "left",
    overflow: "hidden",
    height: '90vh',
    display: 'flex',
    'justify-items': 'center',
    'align-items': 'start',
  },
  media: {
    height: "100vh",
    "background-size": "auto auto",
    "background-position": "top center"
  },
  img: {
    'object-fit': 'contain',
    width: '100%',
    height: '100%',
    flex: 1,
  }
};


const SelectedPicture = (props) => {
  const url = props.selectedPicture.picPath;
  const classes = props.classes;

  return (
    <div className={classes.card}>
      {url ? <img src={url} className={classes.img} /> : null }
    </div>
  );
}

export default withStyles(styles)(
  inject("selectedPicture")(
    observer(SelectedPicture)
));
