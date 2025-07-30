import { ViewMappingItem } from "src/types/view/index";
import { Box } from 'src/components/mui/components';
import { ViewsContainer, BackgroundBox } from 'src/assets/styles/commonStyles';
import VantaFogBackground from "src/components/tools/Background/VantaFogBackground";

/**
 * 命名	說明
    /Base	公開訪問的頁面，如首頁、登入、註冊、關於
    /User	一般登入者能訪問的頁面
    /Admin	管理員權限的頁面
    /Shared	所有角色共用元件
    /Guest	未登入使用者特有頁面（可選）
 */

// Base views
import HomeView from 'src/views/Base/Home';
import AboutView from 'src/views/Base/About';
import SkillCardView from "src/views/Base/SkillCardView";
import ExperienceTabView from 'src/views/Base/ExperienceTabView';
import ProjectsView from 'src/views/Base/ProjectView';
import ContactView from 'src/views/Base/ContactView';
import FooterView from 'src/views/Base/Footer';

// User views
import MindMapView from 'src/views/User/MindMapView';
import TimelineView from 'src/views/User/TimelineView';
import TimelinePage from 'src/views/User/timeline';
import GalleryView from 'src/views/User/GalleryView';
import ExperienceView from 'src/views/User/ExperienceView';

// test
// import ScrollTriggered from 'src/mocks/page/test';

const viewMapping: Array<ViewMappingItem> = [
  {
    id: 'home',
    component: <HomeView />
  },
  // {
  //   id:'test',
  //   component:<ScrollTriggered/>
  // },
  {
    id: 'about',
    component: <AboutView />
  },
  {
    id: 'skills',
    component: <SkillCardView />
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

export default function IndexViews() {
  return (
    <ViewsContainer>
      <BackgroundBox>
        {/* <CustomShape/> */}
        <VantaFogBackground />
      </BackgroundBox>
      <Box>
        {viewMapping.map((view, index) => {
          // let mbSetting = index == lastIndex ? 2 : 10;
          let mbSetting = view.id == 'home' ? 0
            : view.id == 'footer' ? 2 : 10;

          return (
            <Box id={view.id} sx={{ scrollMarginTop: '80px', mb: mbSetting }}>
              {view.component}
            </Box>
          )
        })}
      </Box>
    </ViewsContainer>
  );
}