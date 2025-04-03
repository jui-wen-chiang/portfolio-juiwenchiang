import * as React from 'react';
import TestPage from "../mocks/page/test";

export interface RouteConfig {
  path: string;
  name: string;
  element: React.ReactNode;
}

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
    path: "/test",
    name: "TestPage",
    element: React.createElement(TestPage)
  }
];

export default ROUTES;