import { Box } from 'src/components/mui/components';
import AboutView from 'src/views/About';
import ProjectsView from 'src/views/ProjectView';
import MindMapView from 'src/views/MindMapView';
import TimelineView from 'src/views/TimelineView';
import GalleryView from 'src/views/GalleryView';

export default function IndexViews() {
  return (
    <Box sx={{ px: 2 }}>
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
