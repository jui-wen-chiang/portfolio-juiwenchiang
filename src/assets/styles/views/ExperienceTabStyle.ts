import * as base from "src/assets/styles/baseStyle";
import { styled, alpha } from "@mui/material/styles";
import { Card } from 'src/components/mui/components';
import { Tab } from "src/components/mui/components";

const StyledTab = styled(Tab)(({ theme }) => ({
    color: theme.palette.text.primary,
    "&.Mui-selected": { color: theme.palette.primary.main },
    fontSize: '1.2rem',
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.9rem',
    },
}));

const ExperienceCard = styled(Card)(({ theme }) => ({
    ...base.commBorderRadius,
    ...base.baseBoxShadow,
    backgroundColor: alpha(theme.palette.neutral.main, 0.5),
}));


export { StyledTab, ExperienceCard }

