import { styled } from "@mui/material/styles";
import * as base from "./baseStyle";
import type { Theme } from '@mui/material/styles';
import type { ViewsContainerProps, RatioRowProps } from "src/types/styles/commonStyle"
import type { ContainerProps } from "src/components/mui/components";
import { Container, Box, Button, List, ListItem } from "src/components/mui/components";


const spacingConfig = {
    home: { base: 0, lg: 0, sm: 0 },
    footer: { base: 1.5, lg: 1, sm: 0.5 },
    default: { base: 10, lg: 7, sm: 4 },
};

export const responsiveSectionSpacing = (theme: Theme, id: string) => {
    const config = spacingConfig[id as keyof typeof spacingConfig] ?? spacingConfig.default;

    return {
        width: '100%',
        scrollMarginTop: '5rem',
        marginTop: config.base,
        marginBottom: config.base,
        [theme.breakpoints.down('lg')]: {
            marginTop: config.lg,
            marginBottom: config.lg,
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: config.sm,
            marginBottom: config.sm,
        },
    };
};

const ViewsContainer = styled(Box)<ViewsContainerProps>(({ theme }) => ({
    ...base.responsivePadding(theme, 'compact'),
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%',
    paddingBottom: 0,
}));


const BackgroundBox = styled(Box)<ContainerProps>(() => ({
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


const ListContainer = styled(List)(({ theme }) => ({
    listStyleType: 'disc',
    listStylePosition: 'outside',
    margin: 0,
    padding: '0.15rem 0 ',
    paddingLeft: theme.spacing(3), // Indent a little to make the bullet visible
    '& .list-content': {
        padding: 0,
        margin: '0.1rem 0'
    }
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
    ViewsContainer,
    BackgroundBox,
    RowContainer,
    ColContainer,
    ControlButton,
    ListContainer,
    ListContent,
    RatioRowContainer
}