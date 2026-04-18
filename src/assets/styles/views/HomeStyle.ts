import { styled } from "@mui/material/styles";
import { Container, Box,Typography } from 'src/components/mui/components';
import * as base from "src/assets/styles/baseStyle";

const HomeContainer = styled(Container)(() => ({
    width: '100%',
    height: '100vh',
    justifyItems: 'center',
    padding: '10rem',
    paddingTop: '12rem',
    [`@media (max-width:${base.breakpoints.sm}px)`]: {
        padding: '1.5rem',
        paddingTop: '7rem'
    }
}));

const ContentWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
});

const ContentBox = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '2rem'
}));

const GradientText = styled(Typography)({
    background: 'linear-gradient(90deg, #60A5FA, #A78BFA)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    lineHeight: 1.3,
    paddingBottom: '0.15em',
    paddingRight: '0.1em',
});


export { HomeContainer, ContentWrapper, ContentBox,GradientText }

