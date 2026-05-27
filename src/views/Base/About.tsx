import { aboutData } from "src/data/views/aboutData";
import { Typography, Box, Chip } from 'src/components/mui/components';
import { ViewBox } from 'src/assets/styles/layoutStyles';
import { ColorScheme } from 'src/theme/UIstandard';
import { ListContainer, ListContent } from 'src/assets/styles/commonStyles';


export default function AboutView() {
    return (
        <ViewBox component="section" aria-label="About" data-aos="fade-left"
            sx={{ position: 'relative', overflow: 'hidden' }}>
            <Typography variant="h2" sx={{ textAlign: "center" }}>About</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '2rem',  }}>
                {aboutData.services.map((item, index) => {
                    return (
                        <Chip key={index} label={item.tag}
                            sx={{
                                mr: 2,
                                boxShadow: 1,
                                color: ColorScheme.text.light,
                                backgroundColor: ColorScheme.secondary.dark,
                                margin:'0.5rem'
                            }}
                        />
                    )
                })}
            </Box>
            <Typography>{aboutData.summary}</Typography>
            <br />
            <Typography>Highlights:</Typography>
            {aboutData.highlights.map((bullet: string) => (
                <ListContainer>
                    <ListContent className='list-content'>{bullet}</ListContent>
                </ListContainer>
            ))}
        </ViewBox>
    )
}