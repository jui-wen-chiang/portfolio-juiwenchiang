import { styled, alpha } from "@mui/material/styles";
import * as base from "./baseStyle";
import type { ViewsContainerProps, RatioRowProps } from "src/types/styles/commonStyle"
import type {  ContainerProps } from "src/components/mui/components";
import { Container, Box, Card, Button, List, ListItem, Typography } from "src/components/mui/components";


// 使用方式：
// <SectionTitle>About</SectionTitle>

const ViewsContainerT = styled(Box)<ViewsContainerProps>(({ theme, currentBg }) => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: currentBg,
    transition: 'background-color 1.2s cubic-bezier(0.4, 0, 0.2, 1)',

    color: '#1E293B', // 使用 Slate 800 作為主要文字顏色，比純黑更高級
    //  position: "relative"
}));

const ViewsContainer = styled(Box)<ContainerProps>(({ theme }) => ({
    position: 'relative',
    bacwidth: '100%',
    // 建立一個從上到下的長漸層
    background: 'linear-gradient(180deg, #060b14 0%, #0a1120 25%, #052e16 50%, #060b14 100%)',
    backgroundSize: '100% 100%',
    color: '#E2E8F0',

    // fontFamily: `'Inter', ${theme.typography.fontFamily}`,
    // scrollBehavior: 'smooth',
    // transition: 'background-color 0.8s ease',
    // backgroundImage: 'linear-gradient(180deg, #020617, #020617)',
}));

const BackgroundBox = styled(Box)<ContainerProps>(({ theme }) => ({
    position: "absolute",
    width: "100%",
    height: "120vh",
    top: 0,
    left: 0,
    zIndex: -1,
    padding: 0,
    margin: 0,
    pointerEvents: "none",
}));

const RowContainer = styled(Container)<ContainerProps>(({ theme }) => ({
    ...base.fullSize,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
    }
}));

const ColContainer = styled(Container)<ContainerProps>({
    ...base.fullSize,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const ControlButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.main,
    borderRadius: '5rem',
    fontSize: '3rem',
}));

const TextCard = styled(Card)(({ theme }) => ({
    backgroundColor: 'transparent'
    // backgroundColor: theme.palette.background.default
}));

const ListContainer = styled(List)(({ theme }) => ({
    listStyleType: 'disc',
    listStylePosition: 'outside',
    margin: 0,
    paddingTop: '0.15rem',
    paddingBottom:'0.15rem',
    paddingLeft: theme.spacing(3), // Indent a little to make the bullet visible
}));

const ListContent = styled(ListItem)(({ theme }) => ({
    display: 'list-item',
    color: theme.palette.text.primary,
    padding: 0 // remove default padding to avoid multiple indentations
}));

// for timeline
const RatioRowContainer = styled(Container, {
    // Indicates whether the prop should be forwarded to the Component.
    shouldForwardProp: (prop) => prop !== "ratio"
})<RatioRowProps>(({ ratio = [1, 1] }) => ({
    ...base.fullSize, // styled() expects a CSS-in-JS style object
    display: 'flex',
    gap: "1rem",
    alignItems: "center",

    "& > :first-of-type": {
        flex: ratio[0],
    },
    "& > :nth-of-type(2)": {
        flex: ratio[1],
    },
}));

export {
    ViewsContainerT,
    ViewsContainer,
    BackgroundBox,
    RowContainer,
    ColContainer,
    ControlButton,
    TextCard,
    ListContainer,
    ListContent,
    RatioRowContainer
}