import { styled } from "@mui/material/styles";
import * as base from "src/assets/styles/baseStyle";
import { Stepper, Card } from 'src/components/mui/components';


const StyledStepper = styled(Stepper)(({ theme }) => ({
  "width": "100%",
  padding: '2rem',
  [theme.breakpoints.down('md')]: {
    padding: 0
  },
  // [theme.breakpoints.up('sm')]: {
  //   maxWidth: '100vw'
  // },
  // [theme.breakpoints.up('lg')]: {
  //   maxWidth: '100vw'
  // },

  // "& .MuiStepLabel-root .Mui-completed": "{color: 'theme.secondary.dark'}",
  // Just text label (COMPLETED)
  // "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel": { color: 'grey.500' },
  // circle color (ACTIVE)
  "& .MuiStepLabel-root .Mui-active": {
    color: theme.palette.secondary.main
  },

  // Just text label (ACTIVE)
  // "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel": {color: 'white' },
  // // circle's number (ACTIVE)
  // "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {fill: 'black'},
}));

const StepCard = styled(Card)(() => ({
  width: '100%',
  ...base.basePaperColor,
  ...base.commBorderRadius,
  ...base.baseBoxShadow,
  // "& content-text": {
  //   color: theme.palette.secondary.main
  // },
}));


export { StyledStepper, StepCard }

