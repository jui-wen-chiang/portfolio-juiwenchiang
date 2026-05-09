import { ColorScheme } from 'src/theme/UIstandard';
import type { Theme } from '@mui/material/styles';


const breakpoints = {
    xs: 0,
    sm: 600,    // phones
    md: 900,    // table
    lg: 1200,   // desktop
    xl: 1536,   // large desktop
};

const fullSize = {
    width: '100%',
    height: '100%',
};

const commBorderRadius = {
    borderRadius: '1rem'
};

// change the name
const dmSerifFontFamily = {
    letterSpacing: '0.3rem',
    [`@media (max-width:${breakpoints.sm}px)`]: {
        letterSpacing: '0.2rem',
    }
};



const basePadding = {
    padding: '1rem',
};

const baseBoxShadow = {
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
};

const basePaperColor = {
    backgroundColor: ColorScheme.background.paper,
};

const paddingConfig = {
    compact: { desktop: '1rem', tablet: '0.75rem', mobile: '0.5rem' },
    normal: { desktop: '2rem', tablet: '1.5rem', mobile: '1rem' },
    spacious: { desktop: '3rem', tablet: '2rem', mobile: '1.5rem' },
};

export const responsivePadding = (theme: Theme, variant: 'compact' | 'normal' | 'spacious' = 'normal') => ({
  padding: paddingConfig[variant].desktop,
  [theme.breakpoints.down('lg')]: {
    padding: paddingConfig[variant].tablet,
  },
  [theme.breakpoints.down('md')]: {
    padding: paddingConfig[variant].mobile,
  },
});

export { breakpoints, fullSize, commBorderRadius, basePadding, dmSerifFontFamily, baseBoxShadow, basePaperColor }