import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';

const violetBase = '#7F00FF';
const violetMain = alpha(violetBase, 0.7);

export default createTheme({
    typography: {
        fontSize: 16,
        fontFamily: ["Inter", "-apple-system", "BlinkMacSystemFont"].join(","),
        h1: {
            fontSize: "2rem",
            fontWeight: 500
        },
        h2: {
            fontSize: "1.5rem",
            fontWeight: 400
        }
    },
    palette: {
        primary: {
            // main: "#4C5D88",
            main: alpha(violetBase, 0.5),
            // light: will be calculated from palette.primary.main,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: '#E0C2FF',
        },
        violet: {
            main: violetMain,
            light: alpha(violetBase, 0.5),
            dark: alpha(violetBase, 0.9),
            contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
        },
        error: {
            main: "#FFEED6"
        },
        success: {
            // main: "#8EDCA9"
            // main: "#006400"
            main:"#0000FF"
        },
    }
});