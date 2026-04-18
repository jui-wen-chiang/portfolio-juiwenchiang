import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { FontFamilyScheme, ColorScheme, BreakPointsSchem } from "src/theme/UIstandard";

let theme = createTheme({
    breakpoints: {
        values: BreakPointsSchem,
    },

    typography: {
        fontFamily: FontFamilyScheme.primary,
        fontSize: 16,

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
        },
        h3: {
            fontSize: "2.625rem",
            fontWeight: 700,
            lineHeight: 1.2,
        },
        h4: {
            fontSize: "2.25rem",
            fontWeight: 600,
            lineHeight: 1.3,
        },
        h5: {
            fontSize: "1.875rem",
            fontWeight: 600,
            lineHeight: 1.3,
        },
        h6: {
            fontSize: "1.5rem",
            fontWeight: 500,
            lineHeight: 1.4,
        },
        // --- Subtitles & Body  ---
        subtitle1: {
            fontSize: "1.25rem",
            fontWeight: 500,
            lineHeight: 1.5,
        },
        subtitle2: {
            fontSize: "1.125rem",
            fontWeight: 500,
            lineHeight: 1.5,
            fontStyle: "oblique",
        },
        body1: {
            fontSize: "1.125rem",
            lineHeight: 1.6,
            color: "#2b2b2b",
        },
        body2: {
            fontSize: "1rem", // 16px
            lineHeight: 1.6,
            color: "#4a4a4a",
        },
        // --- Functional UI Elements ---
        button: {
            fontSize: "1rem", // 16px
            fontWeight: 600,
            textTransform: "none",
            letterSpacing: "0.05em",
        },
        caption: {
            fontSize: "0.875rem",
            lineHeight: 1.4,
            color: "#666666",
        },
        overline: {
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            lineHeight: 1.5,
        },
        // --- Custom UI Elements ---
        stepTitle: {
            letterSpacing: "0.1rem",
        },
    },

    palette: {
        primary: {
            main: ColorScheme.primary.main,
            light: ColorScheme.primary.light,
            dark: ColorScheme.primary.dark,
            // contrastText not used for body text; use neutral text instead
        },
        secondary: {
            main: ColorScheme.secondary.main,
            light: ColorScheme.secondary.light,
            dark: ColorScheme.secondary.dark,
        },
        text: {
            primary: "#2b2b2b",      // main body text
            secondary: "#4a4a4a",    // less important text
        },
        background: {
            default: ColorScheme.neutral.light,
            paper: ColorScheme.neutral.main,
        },
        divider: "#e0e0e0", // 3:1+ vs background

        // State colors
        success: {
            main: ColorScheme.state.success.main,
            light: ColorScheme.state.success.light,
            dark: ColorScheme.state.success.dark,
        },
        error: {
            main: ColorScheme.state.error.main,
            light: ColorScheme.state.error.light,
            dark: ColorScheme.state.error.dark,
        },
        warning: {
            main: ColorScheme.state.warning.main,
            light: ColorScheme.state.warning.light,
            dark: ColorScheme.state.warning.dark,
        },
        info: {
            main: ColorScheme.state.info.main,
            light: ColorScheme.state.info.light,
            dark: ColorScheme.state.info.dark,
        },

        // Neutral – still available for blocks, backgrounds, etc.
        neutral: {
            main: ColorScheme.neutral.main,
            light: ColorScheme.neutral.light,
            dark: ColorScheme.neutral.dark,
            contrastText: ColorScheme.neutral.contrastText,
        },
    },
});

theme = responsiveFontSizes(theme);
export default theme;