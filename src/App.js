import * as React from 'react';
// theme
import { useTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import theme from './theme/index';
// views & Router
import { BrowserRouter as Router } from "react-router-dom";
import Appbar from './components/tools/appBar.tsx';
import MouseGlow from './components/tools/MouseGlow.tsx';

import IndexViews from "src/views/IndexViews";
import AppRoutes from "./router/appRouters.tsx";
// style
import { Container, Box } from "src/components/mui/components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@xyflow/react/dist/style.css';


function AppLayout() {
  // const theme = useTheme();
  // Automatically adapt to the height of AppBar
  // const autoHeight = {
  //   ...theme.mixins.toolbar,
  //   padding: '5rem',
  // };

  return (
    <Container
      disableGutters // a prop to cancel the default left and right padding
      maxWidth={false}
      sx={{
        // backgroundColor: '#1d3557',
        // backgroundImage: "url(/test.jpg)",
        margin: '0',
        padding: '0'
      }}
    >
      {/* <MouseGlow /> */}
      <Appbar />
      {/* <Box sx={autoHeight}/> */}
      {/* <AppRoutes/> */}
      <IndexViews />
    </Container>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Router>
        <AppLayout />
      </Router>
    </ThemeProvider>
  );
}