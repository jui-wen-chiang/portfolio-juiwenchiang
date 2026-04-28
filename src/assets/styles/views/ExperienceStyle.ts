import { styled } from "@mui/material/styles";
import * as base from "src/assets/styles/baseStyle";

import { Stepper, Card, List, ListItem } from 'src/components/mui/components';


const StyledStepper = styled(Stepper)(({ theme }) => ({
  "width": "100%",
  [theme.breakpoints.down('sm')]: {
    maxWidth: '80vw',
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '100vw'
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '100vw'
  },
  // "& .MuiStepLabel-root .Mui-completed": "{color: 'theme.secondary.dark'}",
  // Just text label (COMPLETED)
  // "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel": { color: 'grey.500' },
  // circle color (ACTIVE)
  "& .MuiStepLabel-root .Mui-active": { color: theme.palette.secondary.main },
  // Just text label (ACTIVE)
  // "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel": {color: 'white' },
  // // circle's number (ACTIVE)
  // "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {fill: 'black'},
}));

const StepCard = styled(Card)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#11ffee00',
  ...base.commBorderRadius,
}));


export { StyledStepper, StepCard }

