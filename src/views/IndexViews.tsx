import { ViewMappingItem } from "src/types/view/index";
import { Container, Box } from 'src/components/mui/components';

import HomeView from 'src/views/Home';
import AboutView from 'src/views/About';
import ProjectsView from 'src/views/ProjectView';
import MindMapView from 'src/views/MindMapView';
import TimelineView from 'src/views/TimelineView';
import TimelinePage from 'src/views/timeline';
import GalleryView from 'src/views/GalleryView';
import ExperienceTabView from 'src/views/ExperienceTabView';
import ExperienceView from 'src/views/ExperienceView';
import ContactView from 'src/views/ContactView';
import FooterView from 'src/views/Footer';
// import BasicTabs from "src/mocks/page/test";

const viewMapping: Array<ViewMappingItem> = [
  {
    id: 'home',
    component: <HomeView />
  },
  // {
  //   id: 'test',
  //   component: <BasicTabs />
  // },
  {
    id: 'about',
    component: <AboutView />
  },
  {
    id: 'experience',
    component: <ExperienceTabView />
  },
  {
    id: 'projects',
    component: <ProjectsView />
  },
  {
    id: 'contact',
    component: <ContactView />
  },
  {
    id: 'footer',
    component: <FooterView />
  }
];
let lastIndex = viewMapping.length - 1;

export default function IndexViews() {
  return (
    <Box>
      {viewMapping.map((view, index) => {
        let mbSetting = index == lastIndex ? 2 : 10;
        return (
          <Box id={view.id} sx={{ scrollMarginTop: '80px', mb: mbSetting }}>
            {view.component}
          </Box>
        )
      })}
    </Box>
  );
}
