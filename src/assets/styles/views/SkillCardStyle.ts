import { styled } from '@mui/material/styles';
import * as base from "src/assets/styles/baseStyle";
import { Box } from "src/components/mui/components";


const SkillLayout = styled(Box)({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    paddingTop: '1rem',

    '& .category': {
        fontWeight: '500',
        padding: '1rem',
        textAlign: 'center'
    },
    '& .item-box': {
        padding: '0.5rem',
        textAlign: 'center'
    },
    '& .skill-name': {
        display: 'block',
        fontStyle: 'normal'
    }
});

const SkillWrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
    [theme.breakpoints.down('sm')]: {
        // justifyContent: 'flex-start',
        // justifyContent: 'space-between',
        justifyContent: 'center'
    }
}));


const CategoryBox = styled(Box)({
    ...base.basePaperColor,
    ...base.baseBoxShadow,
    padding: '1rem',
    minWidth: '80px',
    maxWidth: '100px',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    borderRadius: '0.5rem',
    flex: '1 1 80px',
    alignItems: 'center'
});

export { SkillLayout, SkillWrapper, CategoryBox }