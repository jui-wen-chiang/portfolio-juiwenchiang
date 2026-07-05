import { Routes, Route } from "react-router-dom";
import RootShell from "src/components/RootShell";
import LandingPage from "src/components/LandingPage";
import ProfessionalLayout from "src/app/professional/ProfessionalLayout";
import MapLayout from "src/app/map/MapLayout";
import ArtLayout from "src/app/art/ArtLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootShell />}>
        <Route index element={<LandingPage />} />
        <Route path="/professional/*" element={<ProfessionalLayout />} />
        <Route path="/map/*" element={<MapLayout />} />
        <Route path="/art/*" element={<ArtLayout />} />
      </Route>
    </Routes>
  );
}