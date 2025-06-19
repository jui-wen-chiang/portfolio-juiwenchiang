import * as React from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate } from "react-router-dom";
import ROUTES from "src/router/pageRouters";

import useScrollTrigger from '@mui/material/useScrollTrigger';
import { HorizontalAppBar, HorizontalToolbar, ButtonStyle } from 'src/assets/styles/components/appbarStyle'
import { Slide, Box, Button } from "src/components/mui/components";


import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Appbar() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md')); // md 為桌機以上

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

  const HideOnScroll = (props: { children: React.ReactElement }) => {
    // children is the element that needs to be hiden
    const trigger = useScrollTrigger(); // to verify if it is scrolled or not
    return (
      <Box>
        <Slide appear={false} direction="down" in={!trigger}>
          {props.children}
        </Slide>
      </Box>
    );
  }

  return (
    // Nav bar
    // <HideOnScroll>
    //   <HorizontalAppBar position="fixed" enableColorOnDark>
    //     <HorizontalToolbar>
    //       {ROUTES.map(({ path, name }) => (
    //         name == "Home"
    //           ? <Button
    //             key={path}
    //             color="info"
    //             size="large"
    //             sx={{ ...ButtonStyle, marginRight: "auto" }}
    //             onClick={() => handleScroll(path)}>
    //             {name}
    //           </Button>
    //           : <Button
    //             key={path}
    //             color="info"
    //             size="large"
    //             sx={ButtonStyle}
    //             onClick={() => handleScroll(path)}>
    //             {name}
    //           </Button>
    //       ))}
    //     </HorizontalToolbar>
    //   </HorizontalAppBar>
    // </HideOnScroll>

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

    <>
      {isDesktop ? (
        // 桌機版 Appbar
        <HideOnScroll>
          <HorizontalAppBar position="fixed" enableColorOnDark>
            <HorizontalToolbar>
              {ROUTES.map(({ path, name }) => (
                <Button
                  key={path}
                  color="info"
                  size="large"
                  sx={name === "Home" ? { ...ButtonStyle, marginRight: "auto" } : ButtonStyle}
                  onClick={() => handleScroll(path)}
                >
                  {name}
                </Button>
              ))}
            </HorizontalToolbar>
          </HorizontalAppBar>
        </HideOnScroll>
      ) : (
        // 手機版 Sidebar（你可以改為 Drawer）
        // sx={SideBar}
        <AppBar position="fixed" >
          <Container>
            <Toolbar>
              <Typography>
                {ROUTES.map(({ path, name }) => (
                  <Button
                    key={path}
                    color="info"
                    size="small"
                    onClick={() => handleScroll(path)}
                  >
                    {name}
                  </Button>
                ))}
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      )}
    </>
  );
}