import * as base from "src/assets/styles/baseStyle";
import { styled, alpha } from "@mui/material/styles";
import { Stepper, Card, List, ListItem } from 'src/components/mui/components';
import { Tabs, Tab } from "src/components/mui/components";
import { FontSizeScheme } from "src/theme/UIstandard";

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
    // backgroundImage: `linear-gradient(
    // to top,
    // ${alpha(theme.palette.neutral.main, 1)} 0%,
    // ${alpha(theme.palette.neutral.main, 0)} 100%)`,
    // backgroundColor: 'transparent',
    backgroundColor: theme.palette.neutral.main,
}));


export { StyledTab, ExperienceCard }

