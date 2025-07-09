// UI Guideline
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

    'oxfordBlue': '#5e2efb',
    //-------------------//
    // 首頁
    h1: '#0007b1', // 深藍色 ok
    標語和bar按鈕: '#5e2efb', // 藍紫色（高飽和）ok
    連結按鈕: '#fe405a', // 桃紅色（醒目點綴）ok
    // 整體
    背景言色: '#fefefc',//白色 ok

    頁面標題: '#0007b1', // 深藍色 ok
    主要文字: '#222222',//（深灰黑）ok
    副標文字: '#555555', // 副文字（灰）ok
    分隔線: '#0007b1', // 深藍色 ok

    // collection have some items
    項目背景色: '#5e2efb', // 藍紫色（高飽和）加透明度ok
    項目標題文字: '#fe405a', // 桃紅色（醒目點綴）ok
    項目按鈕: '#FFEBED', // skin pink color
    項目文字: '#fefefc', // 白色

    按鈕: '#845FFC',     // 淡藍紫色
    備案按鈕: '#5e2efb', // 藍紫色（高飽和）加透明度 ok
    佔位符: '#858585',  // 副文字（灰）

    // 'dark' here means a darker variant of the primary color, not related to dark mode theme.
    background: {
        default: "#fefefc"
    },
    primary: {
        main: '#5e2efb',
        // light: '#42a5f5',
        dark: '#0007b1',
        contrastText: '#222222',
    },
    secondary: {
        main: '#fe405a',
        light: '#845FFC',
        // dark: '#0007b1',
        // contrastText: '#ffebed',
        contrastText: '#858585',
    },
    neutral: {
        main: "#ffebed",
        light:"#fefefc",
        contrastText: "#858585",
    },
    divider: {
        default: "#0007b1"
    },
    // 沒使用
    feedback: {
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

// MUI v5 default break points
const BreakPointsSchem = {
    xs: 0,      // phones
    sm: 600,    // tablets
    md: 900,    // small laptop
    lg: 1200,   // desktop
    xl: 1536,   // large desktop
};

export { FontFamilyScheme, FontSizeScheme, ColorScheme, BreakPointsSchem }