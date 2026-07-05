import * as React from 'react';
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import theme from './theme/index';
import AppRoutes from "src/router/appRouters.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/portfolio-juiwenchiang">
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}