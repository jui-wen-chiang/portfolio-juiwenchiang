import { styled, alpha, type Theme } from '@mui/material/styles';
import * as base from "src/assets/styles/baseStyle";
import { AppBar, Container, Menu, Box, Toolbar } from "src/components/mui/components";

// horizontal bar
const HorizontalAppBar = styled(AppBar)(({ theme }) => ({
    height: 70,
    boxShadow: 'none',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
}));

const HorizontalContainer = styled(Container)(({ theme }) => ({
    ...base.baseBoxShadow,
    width: '95%',
    height: '7vh',
    padding: '2rem',
    marginTop: `calc(var(--template-frame-height, 0px) + 0.5rem)`,
    display: 'flex',
    alignItems: 'center',
    backdropFilter: 'blur(24px)',
    backgroundColor: alpha(theme.palette.primary.main, 0.4),
    borderRadius: `calc(${theme.shape.borderRadius}px + 5rem)`,
}));

const XSBoxLayout = styled(Box)(({ theme }) => ({
    width: '100%',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-between",
    [theme.breakpoints.up('md')]: {
        display: 'none',
    }
}));

const MDBoxLayout = styled(Box)(({ theme }) => ({
    width: '100%',
    flexGrow: 1,
    display: 'none',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'flex-end',
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    }
}));

const CustomMenu = styled(Menu)(({ theme }) => ({
    "& .MuiPaper-root": {
        width: '90vw',
        // maxWidth: '90vw',
        // minWidth: '90vw',
        display: 'block',
        // right: '0 !important',
        boxShadow: 'none',
        backdropFilter: 'blur(24px)',
        backgroundColor: alpha(theme.palette.primary.main, 0.4),
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
    [theme.breakpoints.up('md')]: {
        display: 'none',
    },
});

const ButtonStyle = {
    padding: "0 1rem",
    fontSize: '1.2rem',
    ...base.dmSerifFontFamily
};


// vertical bar
/*
const SideBar = {
    top: 0,
    left: 0,
    bottom: 0,
    width: '10%',
    boxShadow: 0,
    bgcolor: 'transparent',
    backgroundImage: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2rem'
};

const NavBar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: 'blur(24px)',
    borderColor: ((theme as any).vars || theme).palette.divider,
    backgroundColor: alpha(theme.palette.primary.main, 0.4),

    boxShadow: ((theme as any).vars || theme).shadows[1],
    padding: '0.5rem',
}));

const NavItems = styled(Box)({
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    gap: 10
});
 */

export {
    HorizontalAppBar,
    HorizontalContainer,
    XSBoxLayout,
    MDBoxLayout,
    CustomMenu,
    MenuSlotProps,
    ButtonStyle,
    // SideBar,
    // NavBar,
    // NavItems
}