import * as React from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate } from "react-router-dom";
import ROUTES from "src/router/pageRouters";

import { AppBar, Container, Button } from "src/components/mui/components";
import { barContainer, NavBar, NavItems } from 'src/assets/styles/components/appbarStyle'

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
      sx={barContainer}
    >
      <Container>
        <NavBar>
          <NavItems>
            {ROUTES.map(({ path, name }) => (
              <Button key={path} color="info" size="small" onClick={() => handleScroll(path)}>
                {name}
              </Button>
            ))}
            <Button variant="contained" size="small">Sign in</Button>
          </NavItems>
        </NavBar>
      </Container>
    </AppBar>
  );
}