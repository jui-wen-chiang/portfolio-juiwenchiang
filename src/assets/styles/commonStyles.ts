import { styled } from "@mui/material/styles";
import { RatioRowProps } from "src/types/styles/commonStyle"
import * as base from "./baseStyle";

import { Container, Box, Card, Button,IconButton } from "src/components/mui";


export const RatioRowContainer = styled(Container, {
    // Indicates whether the prop should be forwarded to the Component.
    shouldForwardProp: (prop) => prop !== "ratio" })<RatioRowProps>(({ ratio = [1, 1] }) => ({
    ...base.fullSize,
    ...base.rowFlexContainer,
    gap: "1rem",
    alignItems: "center",

    "& > :first-of-type": {
        flex: ratio[0],
    },
    "& > :nth-of-type(2)": {
        flex: ratio[1],
    },
}));

export const ColPageContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
});

export const ViewLayout = styled(Container)({
    ...base.fullSize,
    display: 'flex',
    alignItems: 'center'
});

export const ControlButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.main,
    'border-radius': '5rem',
    'font-size':'3rem',
}));

// export const BaseCardLayout = styled(Card)(({ theme }) => ({
//     background: "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
//     color: "white",
//     padding: theme.spacing(2),
//     borderRadius: theme.shape.borderRadius,
//     boxShadow: theme.shadows[3],
//     "&:hover": {
//         boxShadow: theme.shadows[6],
//     }
// }));