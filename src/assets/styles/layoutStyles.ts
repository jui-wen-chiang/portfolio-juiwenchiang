import { styled } from "@mui/material/styles";
import { Container, Box } from "src/components/mui/components";
import * as base from "./baseStyle";

const { VITE_PUBLIC_URL: PUBLIC_URL } = import.meta.env;

const AppLayoutContainer = styled(Container)<{ bgColor?: string }>(({ theme, bgColor }) => ({
    ...base.responsivePadding(theme, 'normal'),
    width: '100%',
    maxWidth: '100% !important',
    minHeight: '100vh',
    display: 'flex',
    margin: '0',
    position: 'relative',
    backgroundColor: bgColor || '#F0F8FF',
    transition: 'background-color 0.3s ease',
    '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${PUBLIC_URL}/imgs/bg_pexels_bosichong.jpg)`,
        backgroundPosition: 'center',
        opacity: 0.3,
        zIndex: 0,
        pointerEvents: 'none',
    },
    '& > *': {
        position: 'relative',
        zIndex: 1,
    },
    [theme.breakpoints.down('lg')]: {
        flexDirection: 'column',
    },
}));


const ViewSection = styled(Box)<{ flex?: number }>(({ theme, flex }) => ({
    ...base.responsivePadding(theme, 'normal'),
    width: '100%',
    display: 'flex',
    margin: '0.5rem',
    flex: flex ?? 1,
    [theme.breakpoints.down('lg')]: {
        flex: 'unset',
        width: '100%',
        margin: '0',
    }
}));

const ViewBox = styled(Box)(() => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
})) as typeof Box;


export {
    AppLayoutContainer,
    ViewSection,
    ViewBox
}