import { Container, Box } from 'src/components/mui/components';
import HomeView from 'src/views/Home';

import AboutView from 'src/views/About';
import ProjectsView from 'src/views/ProjectView';
import MindMapView from 'src/views/MindMapView';
import TimelineView from 'src/views/TimelineView';
import GalleryView from 'src/views/GalleryView';

export default function IndexViews() {
  return (
    <Box>
      <Box id="home" sx={{ scrollMarginTop: '80px', mb: 8 }}>
        <HomeView />
      </Box>
      <Box id="about" sx={{ scrollMarginTop: '80px', mb: 8 }}>
        <AboutView />
      </Box>
      <Box id="projects" sx={{ scrollMarginTop: '80px', mb: 8 }}>
        <ProjectsView />
      </Box>
      <Box id="mindmap" sx={{ scrollMarginTop: '80px', mb: 8 }}>
        <MindMapView />
      </Box>
      <Box id="timeline" sx={{ scrollMarginTop: '80px', mb: 8 }}>
        <TimelineView />
      </Box>
      <Box id="gallery" sx={{ scrollMarginTop: '80px', mb: 8 }}>
        <GalleryView />
      </Box>
    </Box>
  );
}
