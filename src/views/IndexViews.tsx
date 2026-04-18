import { useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
// style
import type { ViewMappingItem } from "src/types/view/index";
import { Box, Typography } from 'src/components/mui/components';
import { ViewsContainer, BackgroundBox, ViewsContainerT } from 'src/assets/styles/commonStyles';
import VantaFogBackground from "src/components/tools/Background/VantaFogBackground";
import * as UIstandard from 'src/theme/UIstandard.ts';
// Base Views
import HomeView from 'src/views/Base/Home';
import AboutView from 'src/views/Base/About';
import SkillCardView from "src/views/Base/SkillCardView";
import ExperienceView from 'src/views/Base/ExperienceView';
import EduAndCertView from 'src/views/Base/EduAndCertView';
import ProjectsView from 'src/views/Base/ProjectView';
import ContactView from 'src/views/Base/ContactView';
import FooterView from 'src/views/Base/Footer';
// User Views
// import MindMapView from 'src/views/User/MindMapView';
// import TimelineView from 'src/views/User/TimelineView';
// import TimelinePage from 'src/views/User/timeline';
// import GalleryView from 'src/views/User/GalleryView';


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


type IndexViewsProps = {
  onColorChange: (color: string) => void;
  onSectionChange: (id: string) => void;
};

export default function IndexViews({ onColorChange, onSectionChange }: IndexViewsProps) {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const sectionId = (entry.target as HTMLElement).dataset.id;
          if (!sectionId) return;

          onSectionChange(sectionId);

          const bgColor = UIstandard.BGCOLORS[sectionId as keyof typeof UIstandard.BGCOLORS];
          if (bgColor) onColorChange(bgColor);
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section instanceof Element) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [onColorChange, onSectionChange]);

  return (
    <ViewsContainerT>
      {viewMapping.map((view) => {
        const mbSetting = view.id === 'home' ? 0 : view.id === 'footer' ? 2 : 10;

        return (
          <Box
            key={view.id}
            data-id={view.id}
            id={view.id}
            sx={{ width: '100%', scrollMarginTop: '80px', mb: mbSetting }}
            ref={(el: HTMLDivElement | null) => {
              sectionRefs.current[view.id] = el;
            }}
          >
            {view.component}
          </Box>
        );
      })}
    </ViewsContainerT>
  );
}