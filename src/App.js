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
import { Container, Box } from "src/components/mui/components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@xyflow/react/dist/style.css';
import { useState, useEffect } from 'react';

import { AppLayoutContainer, ViewSection, ViewBox } from 'src/assets/styles/layoutStyles';

import { BGCOLORS } from 'src/theme/UIstandard.ts'
// import { displayPartsToString } from 'typescript';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AppLayout() {
  const [bgColor, setBgColor] = useState(BGCOLORS.home);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true, // 關鍵：讓往上捲動時也能觸發動畫
      once: false,  // 讓動畫可以重複觸發
    });
  }, []);

  return (
    <AppLayoutContainer style={{ backgroundColor: bgColor }} maxWidth={false}>
      <ViewSection flex={5}>
        <Appbar />
      </ViewSection>
      <ViewSection flex={95}>
        <IndexViews onColorChange={setBgColor} />
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