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
            main: '#00BFFF',
            light: '#33CCFF',
            dark: '#009ACD',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#FFC107',
            light: '#FFD700',
            dark: '#FFA000',
            contrastText: '#000000',
        },
        // State color
        success: {
            // light: '#66E39D',
            main: '#28A745',
            dark: '#1E7E34',
            contrastText: '#ffffff',
        },
        warning: {
            light: '#FFEE58',
            main: '#FFC107',
            dark: '#FF8F00',
            contrastText: '#000000',
        },
        error: {
            light: '#FF6B6B',
            main: '#DC3545',
            dark: '#B02A37',
            contrastText: '#ffffff',
        },
        info: {
            light: '#64B6F7',
            main: '#2196F3',
            dark: '#1769AA',
            contrastText: '#ffffff',
        },
        // Neutrals color
        background: {
            default: '#F4F9FC',
            paper: '#ffffff',
        },
        text: {
            primary: '#1A1A1A',
            secondary: '#4F4F4F',
            disabled: '#9E9E9E',
        },
        divider: '#E0E0E0',

        // primary: {
        //     // main: "#4C5D88",
        //     main: alpha(violetBase, 0.5),
        //     // light: will be calculated from palette.primary.main,
        //     // dark: will be calculated from palette.primary.main,
        //     // contrastText: will be calculated to contrast with palette.primary.main
        // },
        // secondary: {
        //     main: '#E0C2FF',
        // },
        // violet: {
        //     main: violetMain,
        //     light: alpha(violetBase, 0.5),
        //     dark: alpha(violetBase, 0.9),
        //     contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
        // },
        // error: {
        //     main: "#FFEED6"
        // },
        // success: {
        //     // main: "#8EDCA9"
        //     // main: "#006400"
        //     main:"#0000FF"
        // },
    }
});