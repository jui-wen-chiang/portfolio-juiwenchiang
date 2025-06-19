import { styled } from "@mui/material/styles";
import * as base from "./baseStyle";
import { RatioRowProps } from "src/types/styles/commonStyle"
import { Container, ContainerProps, Box, Card, Button, List, ListItem } from "src/components/mui/components";

const RowContainer = styled(Container)<ContainerProps>({
    ...base.fullSize,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    [`@media (max-width:${base.breakpoints.sm}px)`]: {
        flexDirection: 'column',
        // padding: '2rem 1rem',
    }
    // 手機螢幕下改為直向排版
    // '@media (max-width: 768px)': {
    //     // project layout
    //     flexDirection: 'column-reverse',
    //     alignItems: 'center',
    //     marginBottom: '3rem'
    // }
});

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
    listStylePosition: 'inside',
    padding: 0
}));

const ListContent = styled(ListItem)(({ theme }) => ({
    display: 'list-item',
    color: theme.palette.text.primary
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

export { RowContainer, ColContainer, ControlButton, ListContainer, ListContent, RatioRowContainer }