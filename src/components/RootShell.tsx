import { Outlet, Link, useLocation } from "react-router-dom";
import { Box } from "src/components/mui/components";

const APPS = [
  { path: "/", label: "Home" },
  { path: "/professional", label: "Professional" },
  { path: "/map", label: "Map" },
  { path: "/art", label: "Art" },
];

export default function RootShell() {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      {!isLanding && (
        <Box
          sx={{
            position: "fixed",
            top: 16,
            right: 16,
            zIndex: 1300,
            display: "flex",
            gap: 2,
            bgcolor: "rgba(0,0,0,0.6)",
            borderRadius: 2,
            px: 2,
            py: 1,
          }}
        >
          {APPS.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              style={{
                color: location.pathname === path ? "#FFD54F" : "#fff",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: location.pathname === path ? 700 : 400,
              }}
            >
              {label}
            </Link>
          ))}
        </Box>
      )}
      <Outlet />
    </Box>
  );
}