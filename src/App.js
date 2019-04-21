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

// const style = {
//   cont: {
//     width: "100%",
//     margin: "auto"
//   },
//   child: {
//     float: "left"
//   }
// };
//                 <Grid style={style.child} />
//                <SelectedPicture style={style.child} />
//        <ThemeProvider theme={theme}>
//          <Container maxWidth="sm">
//            <Box my={4}>

//@observer
export class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container>
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

ReactDOM.render(<App />, document.getElementById("app"));
