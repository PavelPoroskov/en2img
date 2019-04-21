import React from "react";
import ReactDOM from "react-dom";
import { observer, Provider } from "mobx-react";
import { ThemeProvider } from "@material-ui/styles";
import Form from "./components/Form";
import Grid from "./components/Grid";
import SelectedPicture from "./components/SelectedPicture";
import * as stores from "./stores/Stores";

import Container from "@material-ui/core/Container";
//import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";

import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
// import { withStyles } from "@material-ui/styles";

// const styles = {
//   box: {
//     overflow: 'scroll',
//   },
// };

//@observer
//@withStyles(styles)
class App extends React.Component {
  render() {
    const classes = this.props.classes;

    return (
      <Provider {...stores}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth={false}>
            <Box>
              <Form />
              <Grid />
              <SelectedPicture />
            </Box>
          </Container>
        </ThemeProvider>
      </Provider>
    );
  }
}

export {
  App
}

ReactDOM.render(<App />, document.getElementById("app"));
