import * as React from 'react';
import { useState, useRef, useEffect } from "react";
import ROUTES from "src/router/pageRouters";
import { useTheme } from '@mui/material/styles';

import {
  HorizontalAppBar, HorizontalContainer,
  XSBoxLayout, MDBoxLayout, CustomMenu, MenuSlotProps, ButtonStyle
} from 'src/assets/styles/components/appbarStyle'
import { Toolbar, MenuItem, IconButton, Button } from "src/components/mui/components";
import { MenuIcon } from 'src/components/mui/icons';
import { ColorScheme } from "src/theme/UIstandard"
import BackToTop from 'src/components/tools/BackToTop/BackToTop';

export default function Appbar() {
  /*
   The difference between the two responsive layouts is not obvious,
   so use sx.display { xs: '', md: '' }
   instead of useMediaQuery(theme.breakpoints.up('md'))
   */
  const [appBarHeight, setAppBarHeight] = useState(64);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const appBarRef = useRef(null);
  const open = Boolean(anchorElNav);
  const theme = useTheme();

  // const classes = useStyles();

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
    <HorizontalAppBar ref={appBarRef} position="fixed" enableColorOnDark sx={{ width: '100vw' }}>
      <HorizontalContainer maxWidth="xl">
        <Toolbar disableGutters sx={{ width: "100%" }}>
          {/* xs layout */}
          <XSBoxLayout>
            <BackToTop variant="text" textContent="JUI WEN, CHIANG" alwaysVisible={true} />
            <IconButton
              onClick={handleOpenNavMenu}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'menu-appbar' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}>
              <MenuIcon sx={{ color: theme.palette.primary.dark }} />
            </IconButton>
            <CustomMenu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={open}
              onClose={handleCloseNavMenu}
              onClick={handleCloseNavMenu}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: (theme) => MenuSlotProps(theme),
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
              {ROUTES.map(({ path, name }) => (
                <MenuItem key={path} onClick={handleCloseNavMenu}>
                  <Button
                    key={path}
                    color="neutral"
                    size="large"
                    sx={name === "Home" ? { ...ButtonStyle, marginRight: "auto" } : ButtonStyle}
                    onClick={() => handleScroll(path)}
                  >
                    {name}
                  </Button>
                </MenuItem>
              ))}
              {/* <MenuItem>
                <Box>
                  <Avatar /> Profile
                  <Logout fontSize="small" />
                  Logout
                </Box>
              </MenuItem> */}
            </CustomMenu>
          </XSBoxLayout>

          {/* md layout */}
          <MDBoxLayout >
            {ROUTES.map(({ path, name }) => (
              <Button
                key={path}
                color="neutral"
                size="large"
                sx={{
                  ...ButtonStyle,
                  ...(name === "Home" && { marginRight: "auto" }),
                  '&:hover': {
                    backgroundColor: 'inherit',
                    color: ColorScheme.secondary.dark
                  },
                }}
                onClick={() => handleScroll(path)}
              >
                {name}
              </Button>
            ))}
          </MDBoxLayout>
        </Toolbar>
      </HorizontalContainer>
    </HorizontalAppBar>
  )
}