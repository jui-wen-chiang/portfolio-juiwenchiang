import { useRef } from 'react';
import type { ViewMappingItem } from "src/types/view/index";
import { Box } from 'src/components/mui/components';
import { responsiveSectionSpacing, ViewsContainer } from 'src/assets/styles/commonStyles';

// Base Views
import HomeView from 'src/views/Base/Home';
import AboutView from 'src/views/Base/About';
import SkillCardView from "src/views/Base/SkillCardView";
import ExperienceView from 'src/views/Base/ExperienceView';
import EduAndCertView from 'src/views/Base/EduAndCertView';
import ProjectsView from 'src/views/Base/ProjectView';
import ContactView from 'src/views/Base/ContactView';
import FooterView from 'src/views/Base/Footer';


const viewMapping: Array<ViewMappingItem> = [
  {
    id: 'home',
    component: <HomeView />
  },
  {
    id: 'about',
    component: <AboutView />
  },
  {
    id: 'experience',
    component: <ExperienceView />
  },
  {
    id: 'projects',
    component: <ProjectsView />
  },
  {
    id: 'eduAndcert',
    component: <EduAndCertView />
  },
  {
    id: 'skills',
    component: <SkillCardView />
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
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  return (
    <ViewsContainer>
      {viewMapping.map((view) => {

        return (
          <Box
            key={view.id}
            data-id={view.id}
            id={view.id}
            sx={(theme) => responsiveSectionSpacing(theme, view.id)}
            ref={(el: HTMLDivElement | null) => {
              sectionRefs.current[view.id] = el;
            }}
          >
            {view.component}
          </Box>
        );
      })}
    </ViewsContainer>
  );
}