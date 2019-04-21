import { inject, observer } from "mobx-react";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from '@material-ui/core/styles';

const styles = {
  buttonsearch: {
    margin: 12,
  },
  inputsearch: {
    'flex-direction': 'row',
    'vertical-align': 'middle',
    'justify-content': 'center',
  },
}

@inject("search")
@observer
class Form extends React.Component {
  setSearchTerm(evt) {
    this.props.search.changeSearchTerm(evt.target.value);
  }

  search() {
    this.props.search.requestPics();
  }

  getButton() {
    return (
      <Button
        variant="contained"
        color="primary"
        className={this.props.classes.buttonsearch}
        onClick={this.search.bind(this)}
      >
        SEARCH
      </Button>
    );
  }

  getSpinner() {
    return <CircularProgress size={35} thickness={5} />;
  }

  render() {
    return (
      <div>
        <TextField
          placeholder="e.g. Cat"
          onBlur={this.setSearchTerm.bind(this)}
          className={this.props.classes.inputsearch}
        />
        {this.props.search.isSearching ? this.getSpinner() : this.getButton()}
      </div>
    );
  }
}

export default withStyles(styles)(Form)