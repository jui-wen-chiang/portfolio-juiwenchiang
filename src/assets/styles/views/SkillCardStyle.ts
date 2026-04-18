import { styled } from '@mui/material/styles';
import * as common from "src/assets/styles/commonStyles";
import type { ContainerProps } from "src/components/mui/components";
import { Box } from "src/components/mui/components";


const SkillBox = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'grid',
    margin: '0 auto',
    gap: theme.spacing(2),
    gridTemplateColumns: 'repeat(2, 1fr)', // xs
    
    [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(4, 1fr)',
    }
}));


const SkillItemContainer = styled(common.ColContainer)<ContainerProps>({
    margin: '0.5rem',
    borderRadius: '0.5rem',
});

export { SkillBox, SkillItemContainer }