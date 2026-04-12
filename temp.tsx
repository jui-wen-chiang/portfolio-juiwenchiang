import { ViewMappingItem } from "src/types/view/index";
import { Box, Typography } from 'src/components/mui/components';
import { ViewsContainer, BackgroundBox, ViewsContainerT } from 'src/assets/styles/commonStyles';
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
import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
// test
// import ScrollTriggered from 'src/mocks/page/test';

import { BGCOLORS } from 'src/theme/UIstandard';

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



// const ViewsContainerT = styled(Box, {
//   shouldForwardProp: (prop) => prop !== 'bgcolor',
// })<{ bgcolor: string }>(({ bgcolor }) => ({
//   minHeight: '100vh',
//   width: '100%',
//   backgroundColor: bgcolor, // 這裡接收動態變化的顏色
//   transition: 'background-color 1.2s ease-in-out',
//   color: '#E2E8F0',
//   position: 'relative',
// }));
const Section = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '0 10%',
});

export default function IndexViews({ onColorChange }) {


  // 1. 定義 Ref 的型別為一個物件，其 key 是字串，value 是 HTMLDivElement 或 null
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 使用 type assertion 確保 id 存在
          const sectionId = (entry.target as HTMLElement).dataset.id;
          if (sectionId && BGCOLORS[sectionId as keyof typeof BGCOLORS]) {
            onColorChange(BGCOLORS[sectionId as keyof typeof BGCOLORS]);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // 2. 這裡的 section 就會被正確識別為 HTMLDivElement
    Object.values(sectionRefs.current).forEach((section) => {
      if (section instanceof Element) { // 加一層檢查確保它是真正的 Element
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [onColorChange]);


  return (
    <ViewsContainerT >
      {/* 
       <ViewsContainerT  currentBg={bgColor}> 
       <BackgroundBox>
        <CustomShape/>
        <VantaFogBackground />
      </BackgroundBox> 
      */}


      {/* <Section id="home" data-bg="#F8FAFC">
        <Typography variant="h2" fontWeight="bold">Home</Typography>
        <Typography variant="h5" color="textSecondary">Welcome to my space.</Typography>
      </Section>

      <Section id="about" data-bg="#F1F5F9">
        <Typography variant="h2" fontWeight="bold">About</Typography>
        <Typography>I am a software engineer focused on Blue/Green tech...</Typography>
      </Section>

      <Section id="skill" data-bg="#E2E8F0">
        <Typography variant="h2" fontWeight="bold">Skill</Typography>
        <Typography>Previously at Tech Corp...</Typography>
      </Section>

      <Section id="experience" data-bg="#F1F5F9">
        <Typography variant="h2" fontWeight="bold">Experience</Typography>
        <Typography>Previously at Tech Corp...</Typography>
      </Section>

      <Section id="project" data-bg="#F8FAFC">
        <Typography variant="h2" fontWeight="bold">Project</Typography>
        <Typography>Previously at Tech Corp...</Typography>
      </Section>

      <Section id="contact" data-bg="#F1F5F9">
        <Typography variant="h2" fontWeight="bold">Contact</Typography>
      </Section> */}

      <Box>
        {viewMapping.map((view, index) => {
          // let mbSetting = index == lastIndex ? 2 : 10;
          let mbSetting = view.id == 'home' ? 0
            : view.id == 'footer' ? 2 : 10;

          return (
            //     <div
            //   key={view.id}
            //   data-id={view.id} // 這裡存 ID 讓 Observer 讀取
            //   ref={(el) => (sectionRefs.current[view.id] = el)}
            // >
            //   {view.component}
            // </div>

            <Box data-id={view.id} id={view.id} 
            sx={{  width: '100%', scrollMarginTop: '80px', mb: mbSetting }} 
            // 明確指定 el 的型別為 HTMLDivElement 或 null
              ref={(el: HTMLDivElement | null) => {
                sectionRefs.current[view.id] = el;
              }}>
              {view.component}
            </Box>
          )
        })}
      </Box>
    </ViewsContainerT>

  );
}