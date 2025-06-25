import * as base from "src/assets/styles/baseStyle";
import { styled, alpha } from "@mui/material/styles";

import { Stepper, Card, List, ListItem } from 'src/components/mui/components';

import { Tabs, Tab } from "src/components/mui/components"

const StyledTab = styled(Tab)(({ theme }) => ({
    color: theme.palette.text.primary,
    "&.Mui-selected": { color: theme.palette.warning.main }
}));

const ExperienceCard = styled(Card)(({ theme }) => ({    
    ...base.commBorderRadius,
    backgroundImage: `linear-gradient(
    to top,
    ${alpha(theme.palette.blueCard.main, 1)} 0%,
    ${alpha(theme.palette.blueCard.main, 0)} 100%)`,
    backgroundColor: 'transparent',
}));


export { StyledTab, ExperienceCard }

