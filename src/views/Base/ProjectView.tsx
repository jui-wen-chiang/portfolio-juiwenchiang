import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { projectData } from "src/data/projectsData";
import { Container, Typography, Box, CardContent, CardActions, Button, IconButton } from 'src/components/mui/components';
import { ColContainer, RowContainer, TextCard, ListContainer, ListContent } from 'src/assets/styles/commonStyles';
import {
    ProjectRows, OverlapTitle, ColumnCard,
    TextContainer, ImageContainer, SummaryBox, BackgroundImageBox, IconBox, IconChip, ImageBox
} from 'src/assets/styles/views/ProjectStyle';
import { AppLayoutContainer, ViewSection, ViewBox } from 'src/assets/styles/layoutStyles';
import { MoreHorizIcon } from 'src/components/mui/icons';

const { PUBLIC_URL } = process.env;


export default function ProjectsView() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md')); // laptop or desktop

    return (
        <ViewBox data-aos="zoom-in">
            <Typography variant="h3" component='h3' fontWeight="bold">Projects</Typography>
            <Box sx={{ position: 'relative', maxWidth: '1400px', margin: '0 auto' }}>
                <ProjectRows>
                    {projectData.map((item, index) => (
                        <Box key={index} sx={{ margin: '0'}}>
                            <OverlapTitle>
                                <h3>{item.title}</h3>
                            </OverlapTitle>
                            <ColumnCard>
                                <p>{item.summary}</p>
                                <CardActions disableSpacing>
                                    <Button variant="contained" endIcon={<MoreHorizIcon />}>
                                    </Button>
                                    <Button variant="contained" endIcon={<MoreHorizIcon />}>
                                    </Button>
                                    <Button variant="contained" endIcon={<MoreHorizIcon />}>
                                    </Button>
                                    <Button variant="contained" endIcon={<MoreHorizIcon />}>
                                    </Button>
                                </CardActions>
                            </ColumnCard>
                        </Box>
                    ))}
                </ProjectRows>
            </Box>

        </ViewBox>
    )
}
