// module augmentation : added some new legal options
import "@mui/material";
import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';


// Augment the palette to include custom color
declare module '@mui/material/styles' {
    interface TypographyVariants {
        stepTitle: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        stepTitle?: React.CSSProperties;
    }

    interface Palette {
        // itemCard: Palette['primary'];
        neutral: Palette['primary'];
    }
    interface PaletteOptions {
        // itemCard?: Palette['primary'];
        neutral?: Palette['primary'];
    }
}

// Allow using custom options in components

// declare module '@mui/material/Paper' {
//     interface PaperPropsVariantOverrides {
//         gray: true
//     }
// }

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    stepTitle: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}