import * as React from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate } from "react-router-dom";
import ROUTES from "src/router/pageRouters";

import { styled, alpha } from '@mui/material/styles';
import { Box, AppBar, Toolbar, Button, Container, Divider, MenuItem, Drawer } from "src/components/mui/components";

// const StyledToolbar = styled(Toolbar)(({ theme }) => ({
const StyledToolbar = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: ((theme as any).vars || theme).palette.divider,
  backgroundColor: (theme as any).vars
    ? `rgba(${(theme as any).vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: ((theme as any).vars || theme).shadows[1],
  padding: '0.5rem 2rem',
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
    // Nav bar
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container>
        <StyledToolbar>
          {ROUTES.map(({ path, name }) => (
            <Button sx={{padding:"0 1rem"}} key={path} color="info" size="small" onClick={() => handleScroll(path)}>
              {name}
            </Button>
          ))}
        </StyledToolbar>
      </Container>
    </AppBar>

    // Side bar
    // <AppBar
    //   position="fixed"
    //   enableColorOnDark
    //   sx={barContainer}
    // >
    //   <Container>
    //     <NavBar>
    //       <NavItems>
    //         {ROUTES.map(({ path, name }) => (
    //           <Button key={path} color="info" size="small" onClick={() => handleScroll(path)}>
    //             {name}
    //           </Button>
    //         ))}
    //         {/* <Button variant="contained" size="small">Sign in</Button> */}
    //       </NavItems>
    //     </NavBar>
    //   </Container>
    // </AppBar>
  );
}