import * as React from 'react';
import { RouteConfig } from "src/types/router";
import TimelinePage from "src/views/timeline";
import TestPage from "src/mocks/page/i18ntest";
import ResponsiveAppBar from "src/mocks/page/test";

import SkillsView from "src/views/SkillsView";
import TimelineView from "src/views/TimelineView";
import GalleryView from "src/views/GalleryView";
import MindMapView from "src/views/MindMapView";
import AboutView from "src/views/About";
import ProjectsView from "src/views/ProjectView";

// Single Page Application
const ROUTES:Array<any> = [
  { path: 'home', name: 'Home' },
  // { path: 'test', name: 'Test' },
  { path: 'about', name: 'About' },
  { path: 'experience', name: 'Experience' },
  // { path: 'timeline', name: 'timeline' },
  { path: 'projects', name: 'Project' },
  { path: 'contact', name: 'Contact' },
  // { path: 'mindmap', name: 'mindmap' },
  // { path: 'gallery', name: 'gallery' },
];

// multiple pages
// const ROUTES: RouteConfig[] = [
//   // {
//   //   path: "/",
//   //   name: "Home",
//   //   element: React.createElement(HomePage)
//   // },
//   {
//     path: "/about",
//     name: "About",
//     element: React.createElement(AboutView)
//   },
//   {
//     path: "/projects",
//     name: "Projects",
//     element: React.createElement(ProjectsView)
//   },
//   // {
//   //   path: "/dashboard",
//   //   name: "Dashboard",
//   //   element: React.createElement(DashboardPage)
//   // },
//   // {
//   //   path: "/personality",
//   //   name: "Personality",
//   //   element: React.createElement(PersonalityPage)
//   // },
//   {
//     path: "/MindMapView",
//     name: "MindMap",
//     element: React.createElement(MindMapView)
//   },
//   // {
//   //   path: "/skills",
//   //   name: "SkillsView",
//   //   element: React.createElement(SkillsView)
//   // },
//   {
//     path: "/timeline",
//     name: "Timeline",
//     element: React.createElement(TimelineView)
//   },

//   // {
//   //   path: "/timeline",
//   //   name: "timeline",
//   //   element: React.createElement(TimelinePage)
//   // },
//   {
//     path: "/gallery",
//     name: "GalleryView",
//     element: React.createElement(GalleryView)
//   },
//   {
//     path: "/test",
//     name: "Test",
//     element: React.createElement(TestPage)
//   }
// ];

export default ROUTES;