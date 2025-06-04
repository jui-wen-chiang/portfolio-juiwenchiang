import * as React from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate } from "react-router-dom";
import ROUTES from "src/router/pageRouters";

import useScrollTrigger from '@mui/material/useScrollTrigger';
import { HorizontalAppBar, HorizontalToolbar, ButtonStyle } from 'src/assets/styles/components/appbarStyle'
import { Slide, Box, Button } from "src/components/mui/components";

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
    <HideOnScroll>
      <HorizontalAppBar position="fixed" enableColorOnDark>
        <HorizontalToolbar>
          {ROUTES.map(({ path, name }) => (
            name == "Home"
              ? <Button
                key={path}
                color="info"
                size="large"
                sx={{ ...ButtonStyle, marginRight: "auto" }}
                onClick={() => handleScroll(path)}>
                {name}
              </Button>
              : <Button
                key={path}
                color="info"
                size="large"
                sx={ButtonStyle}
                onClick={() => handleScroll(path)}>
                {name}
              </Button>
          ))}
        </HorizontalToolbar>
      </HorizontalAppBar>
    </HideOnScroll>

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