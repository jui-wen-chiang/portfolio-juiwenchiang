import { styled } from "@mui/material/styles";
import { Container, Box } from 'src/components/mui/components';
import * as base from "src/assets/styles/baseStyle";

const HomeContainer = styled(Container)(({ theme }) => ({
    padding: '10rem',
    [`@media (max-width:${base.breakpoints.sm}px)`]: {
        padding: '1.5rem',
        paddingTop:'7rem'
    }
}));

const ContentBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '0 0 1rem 0'
}));


export { HomeContainer, ContentBox }

