import { styled } from "@mui/material/styles";
import { Container, Box } from 'src/components/mui/components';


const HomeContainer = styled(Container)(({ theme }) => ({
    padding: '10rem'
}));

const ContentBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '0 0 1rem 0'
}));


export { HomeContainer, ContentBox }

