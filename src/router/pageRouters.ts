import * as React from 'react';
import { RouteConfig } from "src/types/router";

import TimelinePage from "src/views/timeline";
import TestPage from "src/mocks/page/test";

import TimelineView from "src/views/TimelineView";
import GalleryView from "src/views/GalleryView";



export const ROUTES: RouteConfig[] = [
  // {
  //   path: "/",
  //   name: "Home",
  //   element: React.createElement(HomePage)
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   element: React.createElement(AboutPage)
  // },
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