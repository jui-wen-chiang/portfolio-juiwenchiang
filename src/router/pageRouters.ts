import * as React from 'react';
import { RouteConfig } from "src/types/router";

import TimelinePage from "src/views/timeline";
import TestPage from "src/mocks/page/test";


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
    element: React.createElement(TimelinePage)
  },
  {
    path: "/test",
    name: "TestPage",
    element: React.createElement(TestPage)
  }
];

export default ROUTES;