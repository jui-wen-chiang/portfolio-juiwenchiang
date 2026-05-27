import { Box } from '@mui/material';
import type { BackgroundBlobsProps, BlobItem } from "src/types/components/tools";
import { VariantMap } from "src/theme/BlobsMap";

export default function BackgroundBlobs({ variant = 'home', side = 'right' }: BackgroundBlobsProps) {
  const blobs = VariantMap[variant];

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
        top: 0,
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {blobs.map((blob, i) => {
        const pos = resolveSide(blob);
        if (!blobs || blobs.length === 0) return null;

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
              borderRadius: blob.borderRadius,
              background: blob.background,
              filter: blob.filter ?? 'blur(1px)',
              zIndex: blob.zIndex ?? 0,
            }}
          />
        );
      })}
    </Box>
  );
}