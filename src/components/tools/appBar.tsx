import * as React from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate } from "react-router-dom";

import { styled, alpha } from '@mui/material/styles';
import { Box, AppBar, Toolbar, Button, Container, Divider, MenuItem, Drawer } from "src/components/mui/components";
import ROUTES from "src/router/pageRouters";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  flexDirection: "column",
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: ((theme as any).vars || theme).palette.divider,
  backgroundColor: (theme as any).vars
    ? `rgba(${(theme as any).vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: ((theme as any).vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function Appbar() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        top: 0,
        left: 0,
        bottom: 0,
        width: '10%',
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ display: { xs: 'none', md: 'flex', display: 'flex', alignItems: 'center', flexDirection: "column" }, px: 0, gap: 2 }}>
              {/* {ROUTES.map(({ path, name }) => (
                <Button key={path} color="info" size="small" onClick={() => navigate(path)}>
                  {name}
                </Button>
              ))} */}
              {ROUTES.map(({ path, name }) => (
              <Button key={path} color="info" size="small" onClick={() => handleScroll(path)}>
                {name}
              </Button>
            ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex', flexDirection: "column" },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Button variant="text" size="small">Sign in</Button>
            <Button variant="contained" size="small">Sign up</Button>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}