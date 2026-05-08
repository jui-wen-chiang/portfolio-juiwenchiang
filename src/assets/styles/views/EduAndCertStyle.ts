import * as base from "src/assets/styles/baseStyle";
import { styled } from "@mui/material/styles";
import { Card, Box, Tab } from 'src/components/mui/components';
import { ColorScheme } from 'src/theme/UIstandard';


const TabBox = styled(Box)(({ theme }) => ({
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}));


const StyledTab = styled(Tab)(({ theme }) => ({
    color: theme.palette.text.primary,
    "&.Mui-selected": { color: theme.palette.primary.dark },
    fontSize: '1.2rem',
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.9rem',
    }
}));

const ExperienceCard = styled(Card)(() => ({
    ...base.commBorderRadius,
    ...base.basePaperColor,
    ...base.baseBoxShadow,
    padding: '0.5rem',

    '& .title': {
        display: "block",
        color: ColorScheme.primary.dark,
    },
    '& .info': {
        display: "block",
        margin: '0.3rem',
    }
}));


export { TabBox, StyledTab, ExperienceCard }

