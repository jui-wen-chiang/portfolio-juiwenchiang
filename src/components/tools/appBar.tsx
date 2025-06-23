import * as React from 'react';
import { useState, useRef, useEffect } from "react";
import ROUTES from "src/router/pageRouters";

import { useStyles } from 'src/assets/styles/commonStyles'
import { HorizontalAppBar, HorizontalContainer, ButtonStyle } from 'src/assets/styles/components/appbarStyle'
import { Toolbar, Menu, MenuItem, Box, Button } from "src/components/mui/components";
import { MenuIcon } from 'src/components/mui/icons';


export default function Appbar() {
  /*
   The difference between the two responsive layouts is not obvious,
   so use sx.display { xs: '', md: '' }
   instead of useMediaQuery(theme.breakpoints.up('md'))
   */
  const [appBarHeight, setAppBarHeight] = useState(64);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const appBarRef = useRef(null);
  const classes = useStyles();

  // scroll to page
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Menu
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // set App Bar Height
  useEffect(() => {
    const updateHeight = () => {
      console.log('appBarHeight', appBarHeight)
      if (appBarRef.current) {
        setAppBarHeight(appBarRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    /* breakpoints xs & md */
    <HorizontalAppBar ref={appBarRef} position="fixed" enableColorOnDark>
      <HorizontalContainer maxWidth="xl">
        <Toolbar disableGutters>
          {/* xs layout */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, width:'100vw' }}>
            <Button aria-describedby="menu-appbar" variant="text" color="info" onClick={handleOpenNavMenu}>
              <MenuIcon />
            </Button>
            <Menu
              id="menu-appbar"
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorEl={null}
              anchorReference="anchorPosition"
              anchorPosition={{ top: appBarHeight - 10, left: 0 }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              className={classes.menu}
            >
              {ROUTES.map(({ path, name }) => (
                <MenuItem key={path} onClick={handleCloseNavMenu}>
                  <Button
                    key={path}
                    color="info"
                    size="large"
                    sx={name === "Home" ? { ...ButtonStyle, marginRight: "auto" } : ButtonStyle}
                    onClick={() => handleScroll(path)}
                  >
                    {name}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* md layout */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', alignItems: 'center' } }}>
            {ROUTES.map(({ path, name }) => (
              <Button
                key={path}
                color="info"
                size="large"
                // sx={name === "Home" ? { ...ButtonStyle, marginRight: "auto" } : ButtonStyle}
                onClick={() => handleScroll(path)}
              >
                {name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </HorizontalContainer>
    </HorizontalAppBar>
  )
}