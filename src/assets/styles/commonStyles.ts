import { styled } from "@mui/material/styles";
import * as base from "./baseStyle";

import { RatioRowProps } from "src/types/styles/commonStyle"
import { Container, Box, Card, Button } from "src/components/mui/components";


const RowContainer = styled(Container)({
    ...base.fullSize,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
});

const ColContainer = styled(Container)({
    ...base.fullSize,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
});


const ControlButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.main,
    borderRadius: '5rem',
    fontSize: '3rem',
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

export { RowContainer, ColContainer, ControlButton, RatioRowContainer }