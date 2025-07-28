import { skillData } from "src/data/skillCardData";
import { RowContainer, ColContainer } from 'src/assets/styles/commonStyles';
import { Typography } from 'src/components/mui/components';
import { SkillItemContainer } from 'src/assets/styles/views/SkillCardStyle'

const { PUBLIC_URL } = process.env;
export default function SkillCardView() {
    return (
        <ColContainer>
            <Typography variant="h4" component='h4'>Skills</Typography>
            {skillData.map((item) => (
                <ColContainer sx={{ padding: '1rem' }}>
                    <Typography variant="h6" component='h6'>{item.category}</Typography>
                    <RowContainer sx={{ padding: '1rem', gap: 2 }}>
                        {item.technologies.map((skill) => (
                            <SkillItemContainer>
                                {/* Rendering a dynamic icon component */}
                                {skill.icon && <skill.icon size={25} />}
                                <Typography>{skill.name}</Typography>
                            </SkillItemContainer>
                        ))}
                    </RowContainer>
                </ColContainer>
            ))}
        </ColContainer>
    )
}