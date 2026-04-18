import { Box } from '@mui/material';
import BackgroundBlobs from 'src/components/tools/Background/BackgroundBlobs';

type BackgroundLayerProps = {
  sectionId: string;
};

export default function BackgroundLayer({ sectionId }: BackgroundLayerProps) {
  const variant = (() => {
    if (sectionId === 'home') return 'hero';
    if (sectionId === 'about') return 'about';
    if (sectionId === 'projects') return 'projects';
    if (sectionId === 'skills') return 'skills';
    if (sectionId === 'experience') return 'experience';
    if (sectionId === 'contact') return 'contact';
    return 'soft';
  })();

  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
        padding:0,
        margin:0
      }}
    >
      <BackgroundBlobs variant={variant} side="right" />
    </Box>
  );
}