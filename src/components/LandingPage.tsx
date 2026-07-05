// src/components/LandingPage.tsx
import { Link } from "react-router-dom";
import { Box, Typography } from "src/components/mui/components";

const APPS = [
  {
    path: "/professional",
    title: "Professional",
    desc: "履歷、經歷、專案作品",
    color: "#2c3e50",
  },
  {
    path: "/map",
    title: "Map",
    desc: "互動式心智圖 / 探索地圖",
    color: "#1b4332",
  },
  {
    path: "/art",
    title: "Art",
    desc: "藝術與視覺創作展示",
    color: "#4a1942",
  },
];

export default function LandingPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        color: "#fff",
        px: 2,
      }}
    >
      <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
        Jui-Wen Chiang
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, opacity: 0.7 }}>
        選擇一個空間進入
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {APPS.map(({ path, title, desc, color }) => (
          <Link key={path} to={path} style={{ textDecoration: "none" }}>
            <Box
              sx={{
                width: 220,
                height: 160,
                bgcolor: color,
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                color: "#fff",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {title}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8, textAlign: "center", px: 2 }}>
                {desc}
              </Typography>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
}