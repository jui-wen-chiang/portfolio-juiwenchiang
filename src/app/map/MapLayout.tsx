// src/apps/map/MapLayout.tsx
import { Box, Typography } from "src/components/mui/components";

export default function MapLayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#0d0d0d",
        color: "#fff",
      }}
    >
      <Typography variant="h4">🗺️ Map App(建置中)</Typography>
    </Box>
  );
}