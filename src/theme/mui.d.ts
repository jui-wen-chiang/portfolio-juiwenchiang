// module augmentation : added some new legal options
import "@mui/material";
import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';


// Augment the palette to include custom color
declare module '@mui/material/styles' {
    interface Palette {
        blueCard: Palette['primary'];
    }
    interface PaletteOptions {
        blueCard?: Palette['primary'];

    }
}

// Add options of component
declare module '@mui/material/Paper' {
    interface PaperPropsVariantOverrides {
      gray: true
    }
  }