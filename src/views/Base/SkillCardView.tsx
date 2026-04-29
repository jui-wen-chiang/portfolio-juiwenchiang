import { skillData } from "src/data/views/skillCardData";
import { SkillBox, SkillItemContainer } from 'src/assets/styles/views/SkillCardStyle'
import { ColContainer } from 'src/assets/styles/commonStyles';
import { Typography } from 'src/components/mui/components';


export default function SkillCardView() {
    return (
        <ColContainer component="section" aria-label="Skills" data-aos="zoom-in">
            <Typography variant="h2" sx={{ textAlign: "center" }}>Skills</Typography>
            <SkillBox sx={{ padding: '2rem' }}>
                {skillData.map((item) => (
                    <SkillItemContainer disableGutters>
                        <Typography variant="body1" color="primary" sx={{ fontWeight: '500', padding: '1rem' }}>{item.category}</Typography>
                        <ColContainer className="card-overlay">
                            {item.technologies.map((skill) => (
                                <ColContainer sx={{ margin: '0.5rem' }}>
                                    {skill.icon && <skill.icon size={25} />}
                                    <Typography variant="caption" sx={{ display: 'block' }}>{skill.name}</Typography>
                                </ColContainer>
                            ))}
                        </ColContainer>
                    </SkillItemContainer>
                ))
                }
            </SkillBox>
        </ColContainer>
    )
}