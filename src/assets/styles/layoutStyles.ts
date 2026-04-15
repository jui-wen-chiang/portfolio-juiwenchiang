import { styled, alpha } from "@mui/material/styles";
import * as base from "./baseStyle";
import type { ViewsContainerProps, RatioRowProps } from "src/types/styles/commonStyle"
import { Container, type ContainerProps, Box, Card, Button, List, ListItem } from "src/components/mui/components";

const AppLayoutContainer = styled(Container)(({ theme }) => ({
    minHeight: '100vh',
    display: 'flex',
    margin: '0',
    padding: '0',
    transition: 'background-color 0.5s ease', // 讓顏色切換更平滑
    // backgroundColor: 'red',

    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
    },
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

const ViewBox = styled(Box)(({ theme }) => ({
    width: '100%',
    // height: '100vh',
    display: 'flex',
    flexDirection: 'column',

    // padding: '0.5rem',
    // margin: '0.5rem',
    // backgroundColor: 'blue',
    // justifyContent: 'center',
    // alignItems: 'center'
}));
{/* width="95%" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} */ }

export {
    AppLayoutContainer,
    ViewSection,
    ViewBox
}