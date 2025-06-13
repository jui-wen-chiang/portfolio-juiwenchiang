import { styled, alpha } from '@mui/material/styles';
import * as base from "src/assets/styles/baseStyle";

import { AppBar, Container, Box, Toolbar } from "src/components/mui/components";

// horizontal bar
const HorizontalAppBar = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    marginTop: `calc(var(--template-frame-height, 0px) + 1rem)`
}));

const HorizontalToolbar = styled(Container)(({ theme }) => ({
    height: '8vh',
    display: 'flex',
    justifyContent: 'flex-end',
    borderRadius: `calc(${theme.shape.borderRadius}px + 30px)`,
    backdropFilter: 'blur(24px)',
    // border: '1px solid',
    borderColor: ((theme as any).vars || theme).palette.divider,
    backgroundColor: (theme as any).vars
        ? `rgba(${(theme as any).vars.palette.divider} / 0.4)`
        : alpha(theme.palette.divider, 0.4),
    // backgroundColor: (theme as any).vars
    //     ? `rgba(${(theme as any).vars.palette.text.primary} / 0.4)`
    //     : alpha(theme.palette.text.primary, 0.4),
    boxShadow: ((theme as any).vars || theme).shadows[1],
    // padding: '0.5rem 2rem',
}));

const ButtonStyle = {
    padding: "0 1rem",
    fontSize: '1.2rem',
    ...base.dmSerifFontFamily
};

// vertical bar
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
    backgroundColor: (theme as any).vars
        ? `rgba(${(theme as any).vars.palette.background.defaultChannel} / 0.4)`
        : alpha(theme.palette.background.default, 0.4),
    boxShadow: ((theme as any).vars || theme).shadows[1],
    padding: '0.5rem',
}));

const NavItems = styled(Box)({
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    gap: 10
});

export { HorizontalAppBar, HorizontalToolbar, ButtonStyle, SideBar, NavBar, NavItems }