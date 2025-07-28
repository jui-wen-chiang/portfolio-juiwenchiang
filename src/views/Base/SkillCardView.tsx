import { skillData } from "src/data/skillCardData";
import { useTheme } from '@mui/material/styles';
import { basePadding } from 'src/assets/styles/baseStyle';
import { SkillContainer, SkillItemContainer } from 'src/assets/styles/views/SkillCardStyle'
import { ColContainer } from 'src/assets/styles/commonStyles';
import { Box, Typography } from 'src/components/mui/components';


export default function SkillCardView() {
    const theme = useTheme();

    return (
        <ColContainer>
            <Typography variant="h4" component='h4'>Skills</Typography>
            {skillData.map((item) => (
                <ColContainer sx={basePadding}>
                    <Typography variant="h5" component='h5' sx={basePadding}>{item.category}</Typography>
                    <SkillContainer>
                        {item.technologies.map((skill) => (
                            <SkillItemContainer>
                                {/* Rendering a dynamic icon component */}
                                <Box sx={{ paddingTop: '0.5rem', paddingBottom: '0' }}>
                                    {skill.icon && <skill.icon size={25} color={theme.palette.primary.main} />}
                                </Box>
                                <Typography>{skill.name}</Typography>
                            </SkillItemContainer>
                        ))}
                    </SkillContainer>
                </ColContainer >
            ))
            }
        </ColContainer >
    )
}