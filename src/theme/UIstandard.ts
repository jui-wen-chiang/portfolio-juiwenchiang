const BreakPointsSchem = {
    xs: 0,
    sm: 600,    // phones
    md: 900,    // tablets
    lg: 1200,   // desktop
    xl: 1536,   // large desktop
};

// import google fonts in public/index.html via <link>
const FontFamilyScheme: { [key: string]: string } = {
    signature: "Philosopher, sans-serif",
    primary: "Jost, sans-serif",
    secondary: "Jost, sans-serif",
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
    footer: {
        fontSize: "0.75rem",
        fontWeight: 400,
        // lineHeight: 2.66,
        // textTransform: "uppercase",
    },
};


// const BGCOLORS = {
//     home: "#F8FAFF",
//     about: "#EEF3FF",
//     skill: "#E6EDFF",
//     experience: "#F4F6FF",
//     projects: "#F9FAFF",
//     contact: "#EEF3FF",
// };

const BGCOLORS = {
    // home: '#a0b2faff',       // 帶紫調的淺藍
    home: '#F5F7FF',       // 帶紫調的淺藍
    about: '#EEF2FF',      // Indigo 50
    skill: '#E0E7FF',      // Indigo 100 (足夠深，能襯托出白色卡片)
    experience: '#EEF2FF', // Indigo 50
    projects: '#F5F7FF',   // 帶紫調的淺藍
    contact: '#EEF2FF',    // Indigo 50
    // contact: '#d3fee5ff',    // Indigo 50
};



const ColorScheme: { [key: string]: any } = {
    primary: {
        main: "#3676f4",
        light: "#a5c4ff",
        dark: "#0046a3",
        // Do NOT use `main` as text on white/neutral
    },
    secondary: {
        main: "#e7364a",
        light: "#ff9aa6",
        dark: "#a8001f",
        // Do NOT use `main` as text on white/neutral
    },
    neutral: {
        main: "#f5f5f7",
        light: "#ffffff",
        dark: "#c1c3cc",
        contrastText: "#3a3a3a",
    },
    accent: {
        main: "#977bff",
        light: "#c6adff",
        dark: "#5e2efb",
        contrastText: "#2e1b57",
    },
    state: {
        success: {
            main: "#2ecc71",
            light: "#b9f6c9",
            dark: "#1e7f4e",
            contrastText: "#145f3e",
        },
        warning: {
            main: "#f5b700",
            light: "#fff2a6",
            dark: "#aa8700",
            contrastText: "#5e4500",
        },
        error: {
            main: "#e7364a",
            light: "#ff9aa6",
            dark: "#a8001f",
            contrastText: "#5c0010",
        },
        info: {
            main: "#54a8f6",
            light: "#a5c4ff",
            dark: "#0046a3",
            contrastText: "#0e2a71",
        },
    },
};


export {
    FontFamilyScheme,
    FontSizeScheme,
    ColorScheme,
    BreakPointsSchem,
    BGCOLORS
}