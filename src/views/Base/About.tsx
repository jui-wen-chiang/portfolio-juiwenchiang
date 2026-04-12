import { aboutData } from "src/data/aboutData";
import { ColContainer } from 'src/assets/styles/commonStyles';
import { Typography, Box, Chip } from 'src/components/mui/components';
import { ViewBox } from 'src/assets/styles/layoutStyles';

const { PUBLIC_URL } = process.env;

export default function AboutView() {
    return (
        <ViewBox data-aos="fade-left" sx={{ height: '50vh' }}>
            <ColContainer sx={{ alignItems: 'flex-start', padding: '0, 2rem' }}>
                <Typography variant="h3" component='h3' fontWeight="bold">About</Typography>
                <Box sx={{ pl: 0 }}>
                    {aboutData.services.map((item, index) => {
                        return (
                            <Chip key={index} label={item.tag} sx={{ mr: 2, boxShadow: 1 }} />
                        )
                    })}
                </Box>
                <Typography>{aboutData.summary}</Typography>
            </ColContainer>
        </ViewBox>
    )
}