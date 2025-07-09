// MUI v5 default break points
const BreakPointsSchem = {
    xs: 0,      // phones
    sm: 600,    // tablets
    md: 900,    // small laptop
    lg: 1200,   // desktop
    xl: 1536,   // large desktop
};

// import google fonts in public/index.html via <link>
const FontFamilyScheme: { [key: string]: string } = {
    signature: "Hurricane, sans-serif",
    primary: "DM Serif Display, serif",
    secondary: "Proza Libre, sans-serif"
};

// MUI v5 default typography
const FontSizeScheme: { [key: string]: any } = {
    h1: {
        // signature
        fontSize: "6.0rem",
        fontWeight: 300,
        lineHeight: 1.167,
    },
    h2: {
        fontSize: "3.75rem",
        fontWeight: 300,
        lineHeight: 1.2,
    },
    h3: {
        fontSize: "3.0rem",
        fontWeight: 400,
        lineHeight: 1.167,
    },
    h4: {
        // views title
        fontSize: "2.125rem",
        fontWeight: 400,
        lineHeight: 1.235,
    },
    h5: {
        // items title
        fontSize: "1.5rem",
        fontWeight: 400,
        lineHeight: 1.334,
    },
    h6: {
        // home view summary
        fontSize: "1.25rem",
        fontWeight: 500,
        lineHeight: 1.6,
    },
    subtitle1: {
        fontSize: "1.0rem",
        fontWeight: 400,
        lineHeight: 1.75,
    },
    subtitle2: {
        fontSize: "0.875rem",
        fontWeight: 500,
        lineHeight: 1.57,
    },
    body1: {
        fontSize: "1.0rem",
        fontWeight: 400,
        lineHeight: 1.5,
    },
    body2: {
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: 1.43,
    },
    button: {
        fontSize: "0.875rem",
        fontWeight: 500,
        lineHeight: 1.75,
        textTransform: "uppercase",
    },
    caption: {
        fontSize: "0.75rem",
        fontWeight: 400,
        lineHeight: 1.66,
    },
    overline: {
        fontSize: "0.75rem",
        fontWeight: 400,
        lineHeight: 2.66,
        textTransform: "uppercase",
    },
};

const ColorScheme: { [key: string]: any } = {
    // 'dark' here means a darker variant of the primary color, not related to dark mode theme.
    background: {
        default: "#fefefc"
    },
    primary: {
        main: '#5e2efb',
        light: '#977bff',
        dark: '#0007b1',
        contrastText: '#222222',
    },
    secondary: {
        main: '#fe405a',
        light: '#ff7786',
        dark: '#c6002f',
        contrastText: '#858585',
    },
    neutral: {
        main: "#ffebed",
        light: '#ffffff',
        dark: '#d6c6c8',
        contrastText: "#858585",
    },
    divider: {
        default: "#0007b1"
    },
    state: {
        success: {
            main: '#4caf50'
        },
        warning: {
            main: '#ffc107'
        },
        error: {
            main: '#f44336'
        },
        info: {
            main: '#222222'
        }
    }
};

export { FontFamilyScheme, FontSizeScheme, ColorScheme, BreakPointsSchem }