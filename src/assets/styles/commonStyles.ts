import { styled } from "@mui/material/styles";
// import styled from "styled-components";
import { Container, Box, Card, Button,IconButton } from "src/components/mui";
import * as styles from "./componentStyle";
import React, { ReactNode, Children } from "react";


interface RatioRowProps {
    ratio?: [number, number]; // optional ratio [left, right], defalut is [1, 1]
}


export const RatioRowContainer = styled(Container, {
    // Indicates whether the prop should be forwarded to the Component.
    shouldForwardProp: (prop) => prop !== "ratio" })<RatioRowProps>(({ ratio = [1, 1] }) => ({
    ...styles.fullSize,
    ...styles.rowFlexContainer,
    gap: "1rem",
    alignItems: "center",

    "& > :first-of-type": {
        flex: ratio[0],
    },
    "& > :nth-of-type(2)": {
        flex: ratio[1],
    },
}));

// export const RowPageContainer = styled(Container)`
//     ${styles.fullSize};
//     ${styles.rowFlexContainer};
//     align-items: center;
//     gap: 1rem;
// `;


// export const ColPageContainer = styled(Container)`
//     ${styles.colFlexContainer};
//     align-items: center;
//     gap: 1rem;
// `;

// export const TimelineButton = styled(Button)`
//     padding: 1rem;
//     background-color:red;
//     border-radius: 5rem;
//     color: white;
// `;

export const ControlButton = styled(IconButton)({
    color:'bule',
    '&:active': {
        color: 'red',
      }
});
// styled
export const ColPageContainer = styled(Container)({ // PageContainer
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    // width: '100%',
    // height: '100%'
});

export const RowPageContainer = styled(Container)({
    ...styles.fullSize,
    ...styles.rowFlexContainer,
    alignItems: 'center',
});

export const TimelineButton = styled(Button)({
    padding: '1rem',
    backgroundColor: 'red',
    borderRadius: '10rem',
    color: 'white'
});

// export const BasicBox = styled(Box)({
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: '5rem',
//     width: '100%',
//     height: '100%'
// });

// export const TwoColsBox = styled(Box)({
//     display: 'flex',
//     alignItems: 'center',
//     width: '100%',
//     height: '100%'
// });

// // for components
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


// // sx
// export const leftColumn: React.CSSProperties = {
//     flex: 2
// };

// export const rightColumn: React.CSSProperties = {
//     flex: 1,
// };