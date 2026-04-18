import { aboutData } from "src/data/aboutData";
import { Typography, Box, Chip } from 'src/components/mui/components';
import { ViewBox } from 'src/assets/styles/layoutStyles';
import BackgroundBlobs from "src/components/tools/Background/BackgroundBlobs";


export default function AboutView() {
    return (
        <ViewBox component="section" aria-label="About" data-aos="fade-left"
            sx={{ height: '40vh', position: 'relative', overflow: 'hidden' }}>
            <BackgroundBlobs variant="about" />
            <Typography variant="h2" sx={{ textAlign: "center" }}>About</Typography>
            <Box sx={{ display: 'flex',justifyContent: 'center', padding:'2rem' }}>
                {aboutData.services.map((item, index) => {
                    return (
                        <Chip key={index} label={item.tag} color='info' sx={{ mr: 2, boxShadow: 1, color:"white" }} />
                    )
                })}
            </Box>
            <Typography>{aboutData.summary}</Typography>
        </ViewBox>
    )
}