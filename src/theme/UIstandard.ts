/** Comply with Web Content Accessibility Guidelines (WCAG AAA) rules */
import type { ThemeOptions } from '@mui/material/styles';
import type { TypographyVariantsOptions } from '@mui/material';


export const BreakPointsSchem = {
    xs: 0,
    sm: 360,   // mobile
    md: 500,   // phones
    lg: 768,   // tablets
    xl: 1024,  // laptop
};


export const FontFamilyScheme: { [key: string]: string } = {
    // import google fonts in public/index.html via <link>
    signature: "Philosopher, sans-serif",
    primary: "Jost, sans-serif",
    secondary: "Jost, sans-serif",
};


export const ColorScheme: { [key: string]: any } = {
    mode: 'light',
    background: {
        default: '#F5F7FF',
        paper: '#f8fbfe'
    },
    text: {
        main: '#2b2b2b',
        dark: '#000000',
        light: '#FFFFFF'
    },
    primary: {
        main: '#2563EB',
        light: '#60A5FA',
        dark: '#1E40AF',
        contrastText: '#FFFFFF'
    },
    secondary: {
        main: '#10b981',
        light: '#d1fae5',
        dark: '#157a5a',
        contrastText: '#FFFFFF'
    },
    // --- state colors --- 
    error: {
        main: '#DC2626',
        dark: '#991B1B',
        contrastText: '#FFFFFF'
    },
    warning: {
        main: '#D97706',
        dark: '#92400E',
        contrastText: '#FFFFFF'
    },
    success: {
        main: '#059669',
        dark: '#065F46',
        contrastText: '#FFFFFF'
    },
    info: {
        main: '#2563EB',
        dark: '#1E40AF',
        contrastText: '#FFFFFF'
    }
}


export const TypographyScheme: TypographyVariantsOptions = {
    fontSize: 16,
    fontFamily: FontFamilyScheme.primary,
    h1: {
        fontSize: "5rem",
        fontWeight: 500,
        lineHeight: 1.1,
        fontFamily: FontFamilyScheme.signature,
    },
    h2: {
        fontSize: "3rem",
        fontWeight: 700,
        lineHeight: 1.2,
        color: ColorScheme.primary.dark
    },
    h3: {
        fontSize: "2.625rem",
        fontWeight: 700,
        lineHeight: 1.2,
        color: ColorScheme.primary.dark
    },
    h4: {
        fontSize: "2.25rem",
        fontWeight: 600,
        lineHeight: 1.3,
        color: ColorScheme.primary.dark
    },
    h5: {
        fontSize: "1.875rem",
        fontWeight: 600,
        lineHeight: 1.3,
        color: ColorScheme.primary.dark
    },
    h6: {
        fontSize: "1.5rem",
        fontWeight: 500,
        lineHeight: 1.4,
        color: ColorScheme.text.primary
    },
    // --- Subtitles & Body  ---
    subtitle1: {
        fontSize: "1.3rem",
        fontWeight: 500,
        lineHeight: 1.5,
        color: ColorScheme.secondary.dark
    },
    subtitle2: {
        fontSize: "1.125rem",
        fontWeight: 500,
        lineHeight: 1.5,
        fontStyle: "oblique",
        color: ColorScheme.secondary.dark
    },
    body1: {
        fontSize: "1.125rem",
        lineHeight: 1.6,
        color: ColorScheme.text.dark
    },
    body2: {
        fontSize: "1rem",
        lineHeight: 1.6,
        color: ColorScheme.text.main
    },
    // --- Functional UI Elements ---
    button: {
        fontSize: "1rem",
        fontWeight: 600,
        textTransform: "none",
        letterSpacing: "0.05em",
    },
    caption: {
        fontSize: "1rem",
        fontStyle: "oblique",
        lineHeight: 1.5,
        color: ColorScheme.secondary.dark
    },
    overline: {
        fontSize: "1rem",
        fontWeight: 700,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        lineHeight: 1.5,
    },
    // --- Custom UI Elements ---
    stepTitle: {
        fontSize: "1rem",
        letterSpacing: "0.1rem",
    }
};


export const PaletteScheme: ThemeOptions['palette'] = {
    // Do NOT use `main` as text on white background, use `dark` 
    mode: ColorScheme.mode,
    background: ColorScheme.background,
    primary: ColorScheme.primary,
    secondary: ColorScheme.secondary,
    error: ColorScheme.error,
    warning: ColorScheme.warning,
    success: ColorScheme.success,
    info: ColorScheme.info,
}

// refer to AppLayoutContainer background
export const BGCOLORS = {
    home: '#e3f0ff',
    about: '#f5f7fe',
    experience: '#EEF2FF',
    projects: '#f9fbff',
    eduAndcert: '#F5F7FF',
    skills: '#EEF2FF',
    contact: '#EEF2FF',
    footer: '#F5F7FF'
};