// src/apps/art/ArtLayout.tsx
import { Box, Typography } from "src/components/mui/components";

export default function ArtLayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#1a1a1a",
        color: "#fff",
      }}
    >
      <Typography variant="h4">🎨 Art App(建置中)</Typography>
    </Box>
  );
}