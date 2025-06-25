import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { projectData } from "src/data/projectsData";
import { Typography, CardContent, CardActions, Button } from 'src/components/mui/components';
import { ColContainer, RowContainer, TextCard,ListContainer, ListContent } from 'src/assets/styles/commonStyles';
import {
    TextContainer, ImageContainer, SummaryBox, BackgroundImageBox, IconBox, IconChip, ImageBox
} from 'src/assets/styles/views/ProjectStyle';

const { PUBLIC_URL } = process.env;

export default function ProjectsView() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md')); // laptop or desktop

    return (
        <ColContainer>
            <Typography variant="caption" component='h2' sx={{ paddingBottom: 0 }}>PROJECTS</Typography>
            {projectData.map((item, index) => (
                <RowContainer key={index}
                    sx={{ margin: '2rem auto', flexDirection: isDesktop ? 'row' : 'column-reverse' }}>
                    <TextContainer>
                        <TextCard sx={{ boxShadow: 0 }}>
                            <CardContent>
                                <Typography variant="subtitle2">{item.subtitle}</Typography>
                                <Typography variant="h2">{item.title}</Typography>
                                <SummaryBox>
                                    {isDesktop ? (
                                        <>
                                            <Typography variant="body1">{item.summary}</Typography>
                                            <Typography variant="body1" sx={{ mt: 2 }}>Key Features:</Typography>
                                            {item.keyFeatures?.map((bullet, idx) => (
                                                <ListContainer key={idx}>
                                                    <ListContent sx={{ padding: 0 }}>{bullet}</ListContent>
                                                </ListContainer>
                                            ))}
                                        </>
                                    ) : (
                                        <>
                                            <BackgroundImageBox sx={{ backgroundImage: `url(${PUBLIC_URL}${item.image})` }} />
                                            <Typography variant="body1">{item.summary} </Typography>
                                        </>
                                    )}
                                    {/* <CardActions sx={{ display: 'flex', padding: '1 0', justifyContent: 'flex-end' }}>
                                        <Button size="small" color="info" variant="contained">Learn More</Button>
                                    </CardActions> */}
                                </SummaryBox>
                                <IconBox>
                                    {item.icons.map((icon, idx) => (
                                        <IconChip
                                            key={idx} label={icon.lable} color="primary" size="small" />
                                    ))}
                                </IconBox>
                            </CardContent>
                        </TextCard>
                    </TextContainer>
                    {isDesktop && (
                        <ImageContainer>
                            <ImageBox alt={item.title} src={`${PUBLIC_URL}${item.image}`} />
                        </ImageContainer>
                    )}
                </RowContainer>
            ))}
        </ColContainer>
    )
}
