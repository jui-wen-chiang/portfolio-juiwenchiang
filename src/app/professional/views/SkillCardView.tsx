import { skillData } from "src/data/views/skillCardData";
import { SkillLayout, SkillWrapper, CategoryBox } from 'src/app/professional/assets/styles/views/SkillCardStyle'
import { ColContainer } from 'src/app/professional/assets/styles/commonStyles';
import { Box, Typography } from 'src/components/mui/components';


export default function SkillCardView() {
    return (
        <ColContainer component="section" aria-label="Skills" data-aos="zoom-in">
            <Typography variant="h2" sx={{ textAlign: "center" }}>Skills</Typography>
            <SkillLayout>
                {skillData.map((item) => (
                    <Box>
                        <Typography variant="body1" color="primary" className="category">{item.category}</Typography>
                        <SkillWrapper>
                            {item.technologies.map((skill) => (
                                <CategoryBox className="item-box">
                                    {skill.icon && <skill.icon size={25} />}
                                    <Typography variant="caption" className="skill-name">{skill.name}</Typography>
                                </CategoryBox>
                            ))}
                        </SkillWrapper>
                    </Box>
                ))
                }
            </SkillLayout>
        </ColContainer>
    )
}