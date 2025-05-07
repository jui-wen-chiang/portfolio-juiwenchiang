import * as React from 'react';
import { RouteConfig } from "src/types/router";

import TimelinePage from "src/views/timeline";
import TestPage from "src/mocks/page/test";

import SkillsView from "src/views/SkillsView";
import TimelineView from "src/views/TimelineView";
import GalleryView from "src/views/GalleryView";


import MindMapView from "src/views/MindMapView";
import AboutView from "src/views/About";
import ProjectsView from "src/views/ProjectView";


export const ROUTES: RouteConfig[] = [
  // {
  //   path: "/",
  //   name: "Home",
  //   element: React.createElement(HomePage)
  // },
  {
    path: "/about",
    name: "About",
    element: React.createElement(AboutView)
  },
  {
    path: "/projects",
    name: "Projects",
    element: React.createElement(ProjectsView)
  },
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   element: React.createElement(DashboardPage)
  // },
  // {
  //   path: "/personality",
  //   name: "Personality",
  //   element: React.createElement(PersonalityPage)
  // },
  {
    path: "/MindMapView",
    name: "MindMapView",
    element: React.createElement(MindMapView)
  },
  // {
  //   path: "/skills",
  //   name: "SkillsView",
  //   element: React.createElement(SkillsView)
  // },
  {
    path: "/timeline",
    name: "TimelineView",
    element: React.createElement(TimelineView)
  },

  // {
  //   path: "/timeline",
  //   name: "timeline",
  //   element: React.createElement(TimelinePage)
  // },
  {
    path: "/gallery",
    name: "GalleryView",
    element: React.createElement(GalleryView)
  },
  {
    path: "/test",
    name: "TestPage",
    element: React.createElement(TestPage)
  }
];

export default ROUTES;