import { styled } from "@mui/material/styles";
// import * as base from "./baseStyle";
import { RatioRowProps } from "src/types/styles/commonStyle"
import { Typography, Container, ContainerProps, Box, Card, Button, List, ListItem } from "src/components/mui/components";

//  The theme can only set the responsiveness of font size
const StyledTypography = styled(Typography)(({ theme, variant }) => ({

    // ...(variant === 'subtitle1' && {
    //     padding: '1rem 0',
    //     letterSpacing: '0.1rem',
    //     [theme.breakpoints.down('md')]: {
    //         padding: '0.5rem 0',
    //         letterSpacing: '0.05rem',
    //     },
    // }),

    ...(variant === 'h4' && {
        padding: '2rem',
        letterSpacing: '0.1rem',
        [theme.breakpoints.down('md')]: {
            padding: '1rem',
            letterSpacing: '0.05rem',
        },
    }),
    ...(variant === 'stepTitle' && {
        // padding: '2rem',
        // // fontSize: '2rem',
        // letterSpacing: '0.1rem',
        // color: 'lemonYellow',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.2rem',
            // padding: '1rem',
            // //   fontSize: '1.5rem',
            // letterSpacing: '0.05rem',
        },
    }),


}));

export { StyledTypography }