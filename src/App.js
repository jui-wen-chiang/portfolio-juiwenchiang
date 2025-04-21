import * as React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import { Box } from "src/components/mui";
import Appbar from './components/tools/appBar.tsx';
import AppRoutes from "./router/appRouters.tsx";

// Module not found: Error: Can't resolve './routers/app_routers.tsx' in '/Users/rea_wen/Desktop/code/deepheart_web/src'

// import { ThemeProvider, CssBaseline } from '@mui/material';
import { ThemeProvider, CssBaseline } from "@mui/material/styles";
// import theme from './assets/styles/theme';
import theme from './theme/index';


function AppLayout() {
  const theme = useTheme();
  // Automatically adapt to the height of AppBar
  const autoHeight = {
    ...theme.mixins.toolbar,
    padding: '1.5rem',
  };

  return (
    <React.Fragment> {/* JSX expressions must have one parent element. */}
      <Appbar />
      <Box sx={autoHeight} />
      <AppRoutes />
    </React.Fragment>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppLayout />
      </Router>
    </ThemeProvider>
  );
}