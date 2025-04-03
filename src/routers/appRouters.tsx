import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import ROUTES from "../stores/pageRouters";

export default function AppRoutes() {
  return (
    <Routes>
      {ROUTES.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}