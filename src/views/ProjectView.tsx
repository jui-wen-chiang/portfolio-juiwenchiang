import { projectData } from "src/data/projectsData";

import { Typography, CardContent } from 'src/components/mui/components';
import { ColContainer, RowContainer, ListContainer, ListContent } from 'src/assets/styles/commonStyles';
import { TextContainer, ImageContainer, TextCard, SummaryBox, IconBox, IconChip, ImageBox } from 'src/assets/styles/views/ProjectStyle';

export default function ProjectsView() {
    return (
        <ColContainer>
            <Typography variant="caption" component='h2'>PROJECTS</Typography>
            {projectData.map((item, index) => {
                return (
                    <RowContainer sx={{ margin: '3rem auto' }}>
                        <TextContainer>
                            <TextCard sx={{ boxShadow: 0 }}>
                                <CardContent>
                                    <Typography variant="subtitle2" >{item.subtitle}</Typography>
                                    <Typography variant="h2">{item.title}</Typography>
                                    <SummaryBox>
                                        <Typography variant="body1">{item.summary}</Typography>
                                        <br />
                                        <Typography variant="body1">Key Features:</Typography>
                                        {item.keyFeatures?.map((bullet, index) => (
                                            <ListContainer>
                                                <ListContent sx={{ padding: 0 }}>{bullet}</ListContent>
                                            </ListContainer>
                                        ))}
                                    </SummaryBox>
                                    <IconBox>
                                        {item.icons.map((icon, index) => {
                                            return (
                                                <IconChip label={icon.lable} color="primary" size="small" />
                                            )
                                        })}
                                    </IconBox>
                                </CardContent>
                            </TextCard>
                        </TextContainer>
                        <ImageContainer>
                            <ImageBox alt="project image" src={item.image}></ImageBox>
                        </ImageContainer>
                    </RowContainer>
                )
            })}
        </ColContainer >
    )
}
