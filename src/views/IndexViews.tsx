import { Container, Box } from 'src/components/mui/components';
import HomeView from 'src/views/Home';

import AboutView from 'src/views/About';
import ProjectsView from 'src/views/ProjectView';
import MindMapView from 'src/views/MindMapView';
import TimelineView from 'src/views/TimelineView';
import TimelinePage from 'src/views/timeline';

import GalleryView from 'src/views/GalleryView';
import ExperienceView from 'src/views/ExperienceView';
import FooterView from 'src/views/Footer';


export default function IndexViews() {
  return (
    <Box>
      <Box id="home" sx={{ scrollMarginTop: '80px', mb: 8 }}>
        <HomeView />
      </Box>
      <Box id="about" sx={{ scrollMarginTop: '80px', mb: 8 }}>
        <AboutView />
      </Box>
      <Box id="experience" sx={{ scrollMarginTop: '80px', mb: 8 }}>
        <ExperienceView />
      </Box>
      {/* <Box id="timeline" sx={{ scrollMarginTop: '80px', mb: 8 }}>
        <TimelinePage />
      </Box> */}
      {/* <Box id="timeline" sx={{ scrollMarginTop: '80px', mb: 8 }}>
        <TimelineView />
      </Box> */}
      <Box id="projects" sx={{ scrollMarginTop: '80px', mb: 8 }}>
        <ProjectsView />
      </Box>
      {/* <Box id="mindmap" sx={{ scrollMarginTop: '80px', mb: 8 }}>
        <MindMapView />
      </Box> */}
      {/* <Box id="gallery" sx={{ scrollMarginTop: '80px', mb: 8 }}>
        <GalleryView />
      </Box> */}
      <Box id="footer" sx={{ scrollMarginTop: '80px', mb: 8 }}>
        <FooterView />
      </Box>


    </Box>
  );
}
