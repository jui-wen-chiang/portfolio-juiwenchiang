import * as React from 'react';
// theme
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import theme from './theme/index';
// views & Router
import { BrowserRouter as Router } from "react-router-dom";
import Appbar from './components/tools/appBar.tsx';
import BackToTop from './components/tools/backToTop.tsx';
import IndexViews from "src/views/IndexViews";
// style
import { Container } from "src/components/mui/components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@xyflow/react/dist/style.css';


function AppLayout() {
  return (
    <Container
      disableGutters // a prop to cancel the default left and right padding
      maxWidth={false}
      sx={{
        margin: '0',
        padding: '0'
      }}
    >
      <Appbar />
      <IndexViews />
      <BackToTop />
    </Container>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Router basename="/personal_jui_wen_chiang_website">
        <AppLayout />
      </Router>
    </ThemeProvider>
  );
}