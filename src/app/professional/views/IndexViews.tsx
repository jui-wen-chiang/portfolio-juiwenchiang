import { useRef, useEffect } from 'react';
import type { ViewMappingItem } from "src/types/view/index";
import { Box } from 'src/components/mui/components';
import { responsiveSectionSpacing, ViewsContainer } from 'src/app/professional/assets/styles/commonStyles';
import * as UIstandard from 'src/theme/UIstandard.ts';

// Base Views
import HomeView from 'src/app/professional/views/Home';
import AboutView from 'src/app/professional/views/About';
import SkillCardView from "src/app/professional/views/SkillCardView";
import ExperienceView from 'src/app/professional/views/ExperienceView';
import EduAndCertView from 'src/app/professional/views/EduAndCertView';
import ProjectsView from 'src/app/professional/views/ProjectView';
import ContactView from 'src/app/professional/views/ContactView';
import FooterView from 'src/app/professional/views/Footer';


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
        threshold: 0.3,
      }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section instanceof Element) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [onColorChange, onSectionChange]);


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