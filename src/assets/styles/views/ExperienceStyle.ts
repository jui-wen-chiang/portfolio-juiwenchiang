import { styled } from "@mui/material/styles";
import * as base from "src/assets/styles/baseStyle";
import { Stepper, Card } from 'src/components/mui/components';


const StyledStepper = styled(Stepper)(({ theme }) => ({
  ...base.responsivePadding(theme, 'compact'),
  "width": "100%",
  [theme.breakpoints.down('lg')]: {
    padding: '1rem 0'
  },
  "& .MuiStepLabel-root .Mui-active": {
    color: theme.palette.secondary.main
  }
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

