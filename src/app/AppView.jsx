import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { ThemeProvider } from '@mui/material/styles';

import SearchForm from "../components/SearchForm";
import ImageGrid from "../components/ImageGrid";
import SelectedPicture from "../components/SelectedPicture";
import theme from "./theme";

export const AppView = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container maxWidth={false}>
      <Box>
        <SearchForm />
        <ImageGrid />
        <SelectedPicture />
      </Box>
    </Container>
  </ThemeProvider>
);
