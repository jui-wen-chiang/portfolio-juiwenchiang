import { styled, alpha, type Theme } from '@mui/material/styles';
import { AppBar, Menu, Box, IconButton } from "src/components/mui/components";
import { ColorScheme } from "src/theme/UIstandard"


// Display vertical app bar on large screens
// Ortherwise will be horizontal app bar

const BaseAppBar = styled(AppBar)(({ theme }) => ({
    width: '100%',
    // vertical app bar
    position: 'sticky',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'none',

    [theme.breakpoints.up('lg')]: {
        height: '100vh',
    },
    // horizontal app bar
    [theme.breakpoints.down('lg')]: {
        position: "fixed",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'start',
    }
}));

const HorizontalLayout = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '7vh',
    padding: '1rem',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-between",
    backgroundImage: 'linear-gradient(to right,rgba(71, 118, 230, 0.75) 0%,rgba(142, 84, 233, 0.75) 51%,rgba(71, 118, 230, 0.75) 100%)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderBottom: '2px solid rgba(255, 255, 255, 0.15)',
    [theme.breakpoints.up('lg')]: {
        display: 'none'
    }
}));


const CustomMenu = styled(Menu)(({ theme }) => ({
    "& .MuiPaper-root": {
        boxShadow: 'none',
        backdropFilter: 'blur(24px)',
        backgroundColor: alpha(theme.palette.primary.main, 0.4)
    },
}));

const MenuSlotProps = (theme: Theme) => ({
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    mt: 2.5,
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
    [theme.breakpoints.up('lg')]: {
        display: 'none',
    },
});

const VerticalIconButton = styled(IconButton)(({ theme }) => ({
    color: ColorScheme.primary.dark,
    [theme.breakpoints.down('lg')]: {
        display: 'none'
    }
}));


export { BaseAppBar, HorizontalLayout, CustomMenu, MenuSlotProps, VerticalIconButton }