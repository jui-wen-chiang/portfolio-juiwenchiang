import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';

export default createTheme({
    // MUI will prioritize the typography settings of Theme
    typography: {
        fontSize: 16,
        fontFamily: "DM Serif Display , serif",
        // 'body1'
        // | 'body2'
        // | 'button'
        // | 'caption'
        // | 'h1'
        // | 'h2'
        // | 'h3'
        // | 'h4'
        // | 'h5'
        // | 'h6'
        // | 'inherit'
        // | 'overline'
        // | 'subtitle1'
        // | 'subtitle2'
        h1: {
            fontSize: "4.5rem",
        },
        subtitle1: {
            padding: '1rem 0',
            fontSize: "1.5rem",
        },
        caption: {
            fontSize: "2rem",
        },
        h2: {
            fontSize: "2rem",
            padding: '0.4rem 0'
        },
        h3: {
            fontSize: "1.2rem",
        },
        subtitle2:{
            fontSize: "1.2rem",
            fontStyle: 'oblique',
            fontFamily: "Libre Baskerville, -apple-system, BlinkMacSystemFont, serif",
        },
        body1: { 
            // default value of variant
            fontFamily: "Libre Baskerville, -apple-system, BlinkMacSystemFont, serif",
            lineHeight: 2,
        },
        body2: { 
            fontSize: "0.5rem",
            fontFamily: "Libre Baskerville, -apple-system, BlinkMacSystemFont, serif",
        },
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
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                // Changes the global style of all native HTML tags
                body: {
                    // backgroundImage: `url('/test.jpg')`,
                    // backgroundRepeat: 'no-repeat',
                    // backgroundSize: 'cover',
                    // backgroundPosition: 'center',
                    // backgroundImage: `url('/test.jpg')`,
                    // backgroundSize: 'cover',
                    // backgroundRepeat: 'no-repeat',
                    // backgroundPosition: 'center'
                    cursor: 'url("/dot.png"), auto',
                    // cursor: 'help',
                },
            }
        }
    }
});