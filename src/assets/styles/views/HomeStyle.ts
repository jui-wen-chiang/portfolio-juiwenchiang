import { styled } from "@mui/material/styles";
import { Container, Box } from 'src/components/mui/components';
import * as base from "src/assets/styles/baseStyle";

const HomeContainer = styled(Container)(({ theme }) => ({
    width: '100%',
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

const ContentBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    // padding: '0 0 rem 0'
    paddingBottom:'2rem'
}));


export { HomeContainer, ContentWrapper, ContentBox }

