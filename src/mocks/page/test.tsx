// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import Popover from '@mui/material/Popover';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function ResponsiveAppBar() {
//     const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
//     const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

//     const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//         setAnchorElNav(event.currentTarget);
//     };
//     const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//         setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//     };
//     const [open, setOpen] = React.useState(false);
//     const toggleDrawer = (newOpen: boolean) => () => {
//         setOpen(newOpen);
//     };

//     return (
//         <Box>
//             haha
//             <Popover
//                 id="menu-appbar"
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 anchorOrigin={{
//                     vertical: 'bottom',
//                     horizontal: 'left',
//                 }}
//                 transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'left',
//                 }}
//             >
//                 <Button>The content of the Popover.</Button>
//             </Popover>
//         </Box>
//         // <AppBar position="static">
//         //     <Container maxWidth="xl">
//         //         <Toolbar disableGutters>
//         //             {/* 小螢幕 */}
//         //             {/* 文字 */}
//         //             <Typography
//         //                 variant="h6"
//         //                 noWrap
//         //                 component="a"
//         //                 href="#app-bar-with-responsive-menu"
//         //                 sx={{
//         //                     mr: 2,
//         //                     display: { xs: 'none', md: 'flex' },
//         //                     fontFamily: 'monospace',
//         //                     fontWeight: 700,
//         //                     letterSpacing: '.3rem',
//         //                     color: 'inherit',
//         //                     textDecoration: 'none',
//         //                 }}
//         //             >
//         //                 LOGO
//         //             </Typography>
//         //             {/* 頁面選項(開合) */}
//         //             <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//         //                 <IconButton
//         //                     size="large"
//         //                     aria-label="account of current user"
//         //                     aria-controls="menu-appbar"
//         //                     aria-haspopup="true"
//         //                     onClick={handleOpenNavMenu}
//         //                     color="inherit"
//         //                 >
//         //                     <MenuIcon />
//         //                 </IconButton>
//         //                 <Menu
//         //                     id="menu-appbar"
//         //                     anchorEl={anchorElNav}
//         //                     anchorOrigin={{
//         //                         vertical: 'bottom',
//         //                         horizontal: 'left',
//         //                     }}
//         //                     keepMounted
//         //                     transformOrigin={{
//         //                         vertical: 'top',
//         //                         horizontal: 'left',
//         //                     }}
//         //                     open={Boolean(anchorElNav)}
//         //                     onClose={handleCloseNavMenu}
//         //                     sx={{ display: { xs: 'block', md: 'none' } }}
//         //                 >
//         //                     {pages.map((page) => (
//         //                         <MenuItem key={page} onClick={handleCloseNavMenu}>
//         //                             <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
//         //                         </MenuItem>
//         //                     ))}
//         //                 </Menu>
//         //             </Box>


//         //             {/* 大螢幕 */}
//         //             {/* 文字 */}
//         //             <Typography
//         //                 variant="h5"
//         //                 noWrap
//         //                 component="a"
//         //                 href="#app-bar-with-responsive-menu"
//         //                 sx={{
//         //                     mr: 2,
//         //                     display: { xs: 'flex', md: 'none' },
//         //                     flexGrow: 1,
//         //                     fontFamily: 'monospace',
//         //                     fontWeight: 700,
//         //                     letterSpacing: '.3rem',
//         //                     color: 'inherit',
//         //                     textDecoration: 'none',
//         //                 }}
//         //             >
//         //                 LOGO
//         //             </Typography>
//         //             {/* 頁面選項 */}
//         //             <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//         //                 {pages.map((page) => (
//         //                     <Button
//         //                         key={page}
//         //                         onClick={handleCloseNavMenu}
//         //                         sx={{ my: 2, color: 'white', display: 'block' }}
//         //                     >
//         //                         {page}
//         //                     </Button>
//         //                 ))}
//         //             </Box>
//         //             {/* 設定選項（開合） */}
//         //             <Box sx={{ flexGrow: 0 }}>
//         //                 <Tooltip title="Open settings">
//         //                     <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//         //                         <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//         //                     </IconButton>
//         //                 </Tooltip>
//         //                 <Menu
//         //                     sx={{ mt: '45px' }}
//         //                     id="menu-appbar"
//         //                     anchorEl={anchorElUser}
//         //                     anchorOrigin={{
//         //                         vertical: 'top',
//         //                         horizontal: 'right',
//         //                     }}
//         //                     keepMounted
//         //                     transformOrigin={{
//         //                         vertical: 'top',
//         //                         horizontal: 'right',
//         //                     }}
//         //                     open={Boolean(anchorElUser)}
//         //                     onClose={handleCloseUserMenu}
//         //                 >
//         //                     {settings.map((setting) => (
//         //                         <MenuItem key={setting} onClick={handleCloseUserMenu}>
//         //                             <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
//         //                         </MenuItem>
//         //                     ))}
//         //                 </Menu>
//         //             </Box>
//         //         </Toolbar>
//         //     </Container>
//         // </AppBar>
//     );
// }
// export default ResponsiveAppBar;

import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useStyles } from 'src/assets/styles/commonStyles'

export default function ResponsiveAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const classes = useStyles();

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        // anchorReference="anchorPosition"
        // anchorPosition={{ top: 55, left: -16}}
        // transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        sx={{left:0}}
        className={classes.menu}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
}
