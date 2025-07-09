import { createTheme, alpha, getContrastRatio, responsiveFontSizes } from '@mui/material/styles';
import { FontFamilyScheme, ColorScheme, BreakPointsSchem } from "src/theme/UIstandard"

let theme = createTheme({
    breakpoints: {
        values: BreakPointsSchem
    },
    // MUI will prioritize the typography settings of Theme
    typography: {
        fontSize: 16,
        fontFamily: FontFamilyScheme.primary,
        // Home View
        h1: {
            color: ColorScheme.primary.dark,
            fontFamily: FontFamilyScheme.signature,
        },
        h4: {
            padding: '0.4rem 0',
            color: ColorScheme.primary.dark,
        },
        h5: {
            padding: '0.4rem 0',
            color: ColorScheme.secondary.main,
        },
        subtitle2: {
            lineHeight: 2,
            fontStyle: 'oblique',
            color: ColorScheme.secondary.contrastText,
            fontFamily: FontFamilyScheme.secondary,
        },
        body1: {
            lineHeight: 2,
            fontFamily: FontFamilyScheme.secondary,
        },
        body2: {
            fontFamily: FontFamilyScheme.secondary,
        },
        // custom styles
        stepTitle: {
            letterSpacing: '0.1rem',
        }
    },
    palette: {
        background: {
            default: ColorScheme.background.default,
        },
        primary: {
            main: ColorScheme.primary.main,
            dark: ColorScheme.primary.dark,
            contrastText: ColorScheme.primary.contrastText,
        },
        secondary: {
            main: ColorScheme.secondary.main,
            light: ColorScheme.secondary.light,
            contrastText: ColorScheme.secondary.contrastText,
        },
        // State color
        success: {
            main: ColorScheme.state.success.main
        },
        error: {
            main: ColorScheme.state.error.main
        },
        warning: {
            main: ColorScheme.state.warning.main
        },
        info: {
            main: ColorScheme.state.info.main
        },
        text: {
            primary: ColorScheme.primary.contrastText,
            secondary: ColorScheme.secondary.contrastText,
        },
        divider: ColorScheme.divider.default,
        // Custom colors
        blueCard: {
            main: ColorScheme.neutral.main,
            light: ColorScheme.neutral.main,
            dark: ColorScheme.neutral.main,
            contrastText: ColorScheme.neutral.main,
        },
        neutral: {
            main: ColorScheme.neutral.main,
            light: ColorScheme.neutral.light,
            dark: ColorScheme.neutral.main,
            contrastText: ColorScheme.neutral.contrastText,
        },
    }
});

theme = responsiveFontSizes(theme);
export default theme;