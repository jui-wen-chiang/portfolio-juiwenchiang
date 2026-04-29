import { styled } from "@mui/material/styles";
import { Container, Box } from "src/components/mui/components";


const AppLayoutContainer = styled(Container)(({ theme }) => ({
    minHeight: '100vh',
    display: 'flex',
    margin: '0',
    padding: '0',
    background: 'linear-gradient(180deg, #F5F7FF 0%, #E8EEF7 25%, #e5edfa 50%, #F0F4FA 100%)',
    backgroundSize: '100% 100%',
    transition: 'background 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
    }
}));

const ViewSection = styled(Box)<{ flex?: number }>(({ theme, flex }) => ({
    width: '100%',
    display: 'flex',
    padding: '0.5rem',
    margin: '0.5rem',
    flex: flex ?? 1,

    [theme.breakpoints.down('sm')]: {
        flex: 'unset',
        width: '100%',
    },
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