import * as React from 'react';
// theme
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import theme from './theme/index';
// views & Router
import { BrowserRouter as Router } from "react-router-dom";
import Appbar from './components/tools/Bars/MyAppBar.tsx';
import BackToTop from './components/tools/BackToTop/BackToTop.tsx';
import IndexViews from "src/views/IndexViews";
// style
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@xyflow/react/dist/style.css';
import { useState, useEffect } from 'react';
import { Container, Box } from "src/components/mui/components";
import { AppLayoutContainer, ViewSection, ViewBox } from 'src/assets/styles/layoutStyles';
import { BGCOLORS } from 'src/theme/UIstandard'
import BackgroundLayer from "src/components/tools/Background/BackgroundLayer";
// animation
import AOS from 'aos';
import 'aos/dist/aos.css';


function AppLayout() {
  const [bgColor, setBgColor] = useState(BGCOLORS.home);
  const [sectionId, setSectionId] = useState('home');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true,
      once: false,
    });
  }, []);

  return (
    <AppLayoutContainer maxWidth={false}>
      <ViewSection component="header" flex={5}>
        <Appbar />
      </ViewSection>
      <ViewSection component="main" flex={95}>
        <IndexViews />
      </ViewSection>
      <BackToTop />
    </AppLayoutContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Router basename="/portfolio-juiwenchiang">
        <AppLayout />
      </Router>
    </ThemeProvider>
  );
}