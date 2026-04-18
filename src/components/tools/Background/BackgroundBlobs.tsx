import { Box } from '@mui/material';

type BackgroundBlobsProps = {
  variant?: 'hero' | 'about' | 'projects' | 'skills' | 'experience' | 'contact' | 'soft';
  side?: 'right' | 'left' | 'both';
};

type BlobItem = {
  width: number;
  height: number;
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
  rotate?: number;
  radius: string;
  background: string;
  filter?: string;
};

const variantMap: Record<NonNullable<BackgroundBlobsProps['variant']>, BlobItem[]> = {
  hero: [
    {
      width: 360,
      height: 260,
      top: -60,
      right: 20,
      background: 'radial-gradient(circle, rgba(165,196,255,0.30) 0%, rgba(165,196,255,0) 72%)',
      radius: '50%',
      filter: 'blur(1px)',
    },
    {
      width: 430,
      height: 250,
      bottom: 10,
      right: 150,
      background: 'radial-gradient(circle, rgba(167,139,250,0.20) 0%, rgba(167,139,250,0) 74%)',
      radius: '999px',
      rotate: -12,
      filter: 'blur(1px)',
    },
    // {
    //   width: 200,
    //   height: 200,
    //   top: 170,
    //   right: 120,
    //   background: 'radial-gradient(circle, rgba(96,165,250,0.18) 0%, rgba(96,165,250,0) 74%)',
    //   radius: '42% 58% 56% 44% / 45% 40% 60% 55%',
    // },
  ],
  about: [
    {
      width: 300,
      height: 300,
      top: 0,
      left: 80,
      background: 'radial-gradient(circle, rgba(151,123,255,0.20) 0%, rgba(151,123,255,0) 74%)',
      radius: '20%',
    },
    // {
    //   width: 220,
    //   height: 150,
    //   bottom: 40,
    //   right: 20,
    //   top: 0,
    //   left: 80,
    //   background: 'radial-gradient(circle, rgba(151,123,255,0.20) 5%, rgba(68, 71, 240, 0) 50%)',
    //   radius: '20%',
    //   rotate: 8,
    // },
  ],
  projects: [
    {
      width: 330,
      height: 330,
      top: -90,
      right: -120,
      background: 'radial-gradient(circle, rgba(96,165,250,0.18) 0%, rgba(96,165,250,0) 74%)',
      radius: '50%',
    },
    {
      width: 240,
      height: 170,
      bottom: 100,
      right: 40,
      background: 'radial-gradient(circle, rgba(167,139,250,0.14) 0%, rgba(167,139,250,0) 74%)',
      radius: '999px',
      rotate: -10,
    },
  ],
  skills: [
    {
      width: 310,
      height: 310,
      top: 90,
      right: -100,
      background: 'radial-gradient(circle, rgba(165,196,255,0.22) 0%, rgba(165,196,255,0) 72%)',
      radius: '50%',
      filter: 'blur(1px)',
    },
    {
      width: 220,
      height: 220,
      bottom: 50,
      right: 90,
      background: 'radial-gradient(circle, rgba(167,139,250,0.16) 0%, rgba(167,139,250,0) 74%)',
      radius: '42% 58% 56% 44% / 45% 40% 60% 55%',
    },
  ],
  experience: [
    {
      width: 250,
      height: 250,
      top: 120,
      right: -80,
      background: 'radial-gradient(circle, rgba(165,196,255,0.16) 0%, rgba(165,196,255,0) 74%)',
      radius: '50%',
    },
    {
      width: 190,
      height: 150,
      bottom: 80,
      right: 140,
      background: 'radial-gradient(circle, rgba(151,123,255,0.12) 0%, rgba(151,123,255,0) 74%)',
      radius: '999px',
      rotate: 12,
    },
  ],
  contact: [
    {
      width: 250,
      height: 250,
      top: 80,
      right: -100,
      background: 'radial-gradient(circle, rgba(165,196,255,0.16) 0%, rgba(165,196,255,0) 74%)',
      radius: '50%',
    },
    {
      width: 190,
      height: 190,
      bottom: 30,
      right: 90,
      background: 'radial-gradient(circle, rgba(167,139,250,0.12) 0%, rgba(167,139,250,0) 74%)',
      radius: '42% 58% 56% 44% / 45% 40% 60% 55%',
    },
  ],
  soft: [
    {
      width: 220,
      height: 220,
      top: 60,
      right: 60,
      background: 'radial-gradient(circle, rgba(165,196,255,0.12) 0%, rgba(165,196,255,0) 74%)',
      radius: '50%',
    },
  ],
};

export default function BackgroundBlobs({ variant = 'hero', side = 'right' }: BackgroundBlobsProps) {
  const blobs = variantMap[variant];

  const resolveSide = (blob: BlobItem) => {
    if (side === 'right') return { right: blob.right, left: undefined };
    if (side === 'left') return { left: blob.right, right: undefined };
    return { right: blob.right, left: blob.left };
  };

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
      {blobs.map((blob, i) => {
        const pos = resolveSide(blob);
        return (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              width: blob.width,
              height: blob.height,
              top: blob.top,
              bottom: blob.bottom,
              left: pos.left,
              right: pos.right,
              transform: `rotate(${blob.rotate ?? 0}deg)`,
              borderRadius: blob.radius,
              background: blob.background,
              filter: blob.filter ?? 'blur(1px)',
            }}
          />
        );
      })}
    </Box>
  );
}