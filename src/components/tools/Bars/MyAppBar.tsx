import * as React from 'react';
import { useState, useRef, useEffect } from "react";
import ROUTES from "src/router/pageRouters";
import { useTheme } from '@mui/material/styles';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { AppBar, Container, Menu, Box } from "src/components/mui/components";

import {
  BaseAppBar, HorizontalAppBar, HorizontalContainer,
  VerticalSideBar, VerticalNavBar, VerticalNavItems,
  XSBoxLayout, MDBoxLayout, CustomMenu, MenuSlotProps, ButtonStyle
} from 'src/assets/styles/components/appbarStyle'
import { Toolbar, MenuItem, IconButton, Button, Tooltip } from "src/components/mui/components";
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
  }, [appBarHeight]);

  return (
    <BaseAppBar>
      {ROUTES.map(({ path, name, icon: Icon }) => (
        <Tooltip key={path} title={name} placement="right">
          <IconButton
            color="info"
            sx={{ boxShadow: '0' }}
            // size="small"
            onClick={() => handleScroll(path)}
          >
            <Icon />
          </IconButton>
        </Tooltip>
      ))}
    </BaseAppBar>
  )
}