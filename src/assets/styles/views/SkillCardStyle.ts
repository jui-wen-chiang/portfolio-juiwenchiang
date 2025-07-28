import { styled, alpha } from '@mui/material/styles';
import * as base from "src/assets/styles/baseStyle";
import * as common from "src/assets/styles/commonStyles";
import { ContainerProps, Box } from "src/components/mui/components";


const SkillContainer = styled(Box)(({ theme }) => ({
    display: 'grid',
    gap: theme.spacing(2),
    gridTemplateColumns: 'repeat(2, 1fr)', // xs

    [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(6, 1fr)',
    }
}));

const SkillItemContainer = styled(common.ColContainer)<ContainerProps>({
    ...base.baseBoxShadow,
    padding: '0.5rem',
    borderRadius: '0.5rem',
});

export { SkillContainer, SkillItemContainer }