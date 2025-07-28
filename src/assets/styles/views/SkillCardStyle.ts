import { styled, alpha } from '@mui/material/styles';
import * as base from "src/assets/styles/baseStyle";
import * as common from "src/assets/styles/commonStyles";
import { Container, ContainerProps } from "src/components/mui/components";

const SkillItemContainer = styled(common.ColContainer)<ContainerProps>({
    ...base.baseBoxShadow,
    padding: '0.5rem',
    borderRadius: '0.5rem',
});

export { SkillItemContainer }