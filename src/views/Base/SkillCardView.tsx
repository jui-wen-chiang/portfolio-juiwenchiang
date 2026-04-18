import { skillData } from "src/data/skillCardData";
import * as base from "src/assets/styles/baseStyle";
import { SkillBox, SkillItemContainer } from 'src/assets/styles/views/SkillCardStyle'
import { ColContainer } from 'src/assets/styles/commonStyles';
import { Box, Typography } from 'src/components/mui/components';
import BackgroundBlobs from "src/components/tools/Background/BackgroundBlobs";


export default function SkillCardView() {
    return (
        <ColContainer component="section" aria-label="Skills" data-aos="zoom-in">
            <Typography variant="h2" sx={{ textAlign: "center" }}>Skills</Typography>
            <BackgroundBlobs variant="skills" />

            <SkillBox sx={{ padding: '2rem' }}>
                {skillData.map((item) => (
                    <SkillItemContainer disableGutters sx={{ ...base.baseBoxShadow }}>
                        <Typography variant="body2" color="primary" sx={{ fontWeight: '500', padding: '1rem' }}>{item.category}</Typography>
                        <ColContainer>
                            {item.technologies.map((skill) => (
                                <SkillItemContainer disableGutters>
                                    <Box sx={{ paddingTop: '0.1rem', paddingBottom: '0' }}>
                                        {skill.icon && <skill.icon size={25} />}
                                    </Box>
                                    <Typography variant="caption">{skill.name}</Typography>
                                </SkillItemContainer>
                            ))}
                        </ColContainer>
                    </SkillItemContainer>
                ))
                }
            </SkillBox>
        </ColContainer>
    )
}