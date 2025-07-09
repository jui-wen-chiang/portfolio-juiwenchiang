import { styled, alpha } from "@mui/material/styles";
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import * as base from "./baseStyle";
import { RatioRowProps } from "src/types/styles/commonStyle"
import { Container, ContainerProps, Box, Card, Button, List, ListItem } from "src/components/mui/components";


const useStyles = makeStyles((theme) => ({
    menu: {
        "& .MuiPaper-root": {
            width: '100vw',
            maxWidth: '100vw',
            minWidth: '100vw',
            display: 'block',
            left: 'auto !important',
            // borderRadius: '0 0 50px 50px',
            boxShadow: 'none',
            backdropFilter: 'blur(24px)',
            borderColor: '#0007b1',
            // borderRadius: `calc(${theme.shape.borderRadius}px + 30px)`,
            // padding: '2rem',
            // marginTop: `calc(var(--template-frame-height, 0px) + 1rem)`,
            backgroundColor: (theme as any).vars
                ? `rgba('#0007b1' / 0.4)`
                : alpha('#0007b1', 0.4)
        },
    }
}));

const ViewsContainer = styled(Box)<ContainerProps>(({ theme }) => ({
    position: "relative"
}));

const BackgroundBox = styled(Box)<ContainerProps>(({ theme }) => ({
    position: "absolute",
    width: "100%",
    height: "150vh",
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
    backgroundColor: theme.palette.background.default
}));

const ListContainer = styled(List)(({ theme }) => ({
    listStyleType: 'disc',
    listStylePosition: 'outside',
    margin: 0,
    paddingLeft: theme.spacing(3), // Indent a little to make the bullet visible
}));

const ListContent = styled(ListItem)(({ theme }) => ({
    display: 'list-item',
    color: theme.palette.text.primary,
    paddingLeft: 0, // remove default padding to avoid multiple indentations
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
    useStyles,
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