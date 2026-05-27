import * as base from "src/assets/styles/baseStyle";
import { styled } from "@mui/material/styles";
import { Card, Box, Tab } from 'src/components/mui/components';
import { ColorScheme } from 'src/theme/UIstandard';


const TabBox = styled(Box)(({ theme }) => ({
    ...base.responsivePadding(theme, 'compact'),
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
        width: '100%',
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
    },
    '& .expand-box': {
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer'
    },
    '& .expand-button': {
        margin: '0.5rem 0',
        color: ColorScheme.secondary.dark,
        borderColor: ColorScheme.secondary.dark,
        '&:hover': {
            borderColor: ColorScheme.secondary.main
        }
    }
}));


export { TabBox, StyledTab, ExperienceCard }

