// import * as React from 'react';
// import { useState, useRef, useEffect } from "react";
// import ROUTES from "src/router/pageRouters";

// import { HorizontalAppBar, HorizontalContainer, CustomMenu, ButtonStyle } from 'src/assets/styles/components/appbarStyle'
// import { Toolbar, MenuItem, Box, Button } from "src/components/mui/components";
// import { MenuIcon } from 'src/components/mui/icons';


// export default function TestAppbar() {
//   /*
//    The difference between the two responsive layouts is not obvious,
//    so use sx.display { xs: '', md: '' }
//    instead of useMediaQuery(theme.breakpoints.up('md'))
//    */
//   const [appBarHeight, setAppBarHeight] = useState(64);
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
//   const appBarRef = useRef(null);
//   // const classes = useStyles();

//   // scroll to page
//   const handleScroll = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   // Menu
//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   // set App Bar Height
//   useEffect(() => {
//     const updateHeight = () => {
//       console.log('appBarHeight', appBarHeight)
//       if (appBarRef.current) {
//         setAppBarHeight(appBarRef.current.offsetHeight);
//       }
//     };
//     updateHeight();
//     window.addEventListener('resize', updateHeight);
//     return () => window.removeEventListener('resize', updateHeight);
//   }, []);

//   return (
//     /* breakpoints xs & md */
//     <HorizontalAppBar ref={appBarRef} position="fixed" enableColorOnDark sx={{ width: '100vw' }}>
//       <HorizontalContainer maxWidth="xl">
//         <Toolbar disableGutters sx={{ width: "100%" }}>
//           {/* xs layout */}
//           <Box sx={{ width: '100%', flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <Button
//               aria-describedby="menu-appbar"
//               variant="text"
//               color="neutral"
//               onClick={handleOpenNavMenu}>
//               <MenuIcon />
//             </Button>
//             <CustomMenu
//               id="menu-appbar"
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               anchorEl={null}
//               anchorReference="anchorPosition"
//               anchorPosition={{ top: appBarHeight - 10, left: 0 }}
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}

//             >
//               {ROUTES.map(({ path, name }) => (
//                 <MenuItem key={path} onClick={handleCloseNavMenu}>
//                   <Button
//                     key={path}
//                     color="neutral"
//                     size="large"
//                     sx={name === "Home" ? { ...ButtonStyle, marginRight: "auto" } : ButtonStyle}
//                     onClick={() => handleScroll(path)}
//                   >
//                     {name}
//                   </Button>
//                 </MenuItem>
//               ))}
//             </CustomMenu>
//           </Box>

//           {/* md layout */}
//           <Box sx={{
//             width: '100%',
//             flexGrow: 1,
//             display: { xs: 'none', md: 'flex' },
//             alignItems: 'center',
//             alignContent: 'center',
//             justifyContent: 'flex-end',
//           }}>
//             {ROUTES.map(({ path, name }) => (
//               <Button
//                 key={path}
//                 color="neutral"
//                 size="large"
//                 sx={name === "Home" ? { ...ButtonStyle, marginRight: "auto" } : ButtonStyle}
//                 onClick={() => handleScroll(path)}
//               >
//                 {name}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </HorizontalContainer>
//     </HorizontalAppBar>
//   )
// }


import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

export default function TestAppbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
        <Typography sx={{ minWidth: 50 }}>Profile</Typography>

        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32, backgroundColor:'red' }}>JUI</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
