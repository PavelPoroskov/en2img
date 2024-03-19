import { inject, observer } from "mobx-react";
import React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { withStyles } from '@mui/styles';

const styles = {
  spinnerContainer: {
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center'
  },
  buttonsearch: {
    margin: 12,
  },
  inputsearch: {
    // 'flex-direction': 'row',
    // 'vertical-align': 'middle',
    // 'justify-content': 'center',
  },
}

const SearchForm = (props) => {
  const setSearchTerm = (evt) => {
    props.search.changeSearchTerm(evt.target.value);
  }

  const search = () => {
    props.search.requestPics();
  }

  return (
    <div className={props.classes.container}>
      <Stack spacing={2} direction="row">
        <TextField
          placeholder="e.g. Cat"
          onBlur={setSearchTerm}
          className={props.classes.inputsearch}
        />
        <Button
          variant="contained"
          color="primary"
          className={props.classes.buttonsearch}
          disabled={props.search.isSearching}
          onClick={search}
        >
          SEARCH
        </Button>
        <div className={props.classes.spinnerContainer}>
          {props.search.isSearching && (
            <CircularProgress size={35} thickness={5} />
          )}
        </div>
      </Stack>
    </div>
  );
}

export default withStyles(styles)(
  inject("search")(
    observer(SearchForm)
));
