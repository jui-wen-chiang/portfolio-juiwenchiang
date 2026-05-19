import { styled } from "@mui/material/styles";
import { Container, Box, Typography } from 'src/components/mui/components';
import { ColorScheme } from "src/theme/UIstandard";


const HomeContainer = styled(Container)(({ theme }) => ({
    width: '100%',
    minHeight: '100vh',
    justifyItems: 'center',
    padding: '10rem',
    paddingTop: '13rem',
    [theme.breakpoints.down('xl')]: {
        minHeight: '100svh',
        padding: '1rem',
        paddingTop: '2rem'
    }
}));

const ContentWrapper = styled(Box)({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
});

const ContentBox = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingBottom: '5rem',
    [theme.breakpoints.down('md')]: {
        paddingBottom: '2rem',
    }
}));

const GradientText = styled(Typography)({
    background: `linear-gradient(90deg, ${ColorScheme.primary.dark}, ${ColorScheme.secondary.dark})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    lineHeight: 1.3,
    paddingBottom: '1.8rem',
    fontWeight: 'bold'
});


export { HomeContainer, ContentWrapper, ContentBox, GradientText }
