import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';
import {FontScheme,ColorScheme}from "src/theme/designTokens"

export default createTheme({
    // MUI will prioritize the typography settings of Theme
    typography: {
        fontSize: 16,
        fontFamily: FontScheme.primary,
        // Home View
        h1: {
            fontSize: "4.5rem",
            color: ColorScheme.lemonYellow
        },
        subtitle1: {
            padding: '1rem 0',
            fontSize: "1.5rem",
            letterSpacing: '0.1rem',
        },
        // Title of each View
        caption: {
            fontSize: "2rem",
            letterSpacing: '0.1rem',
            color: ColorScheme.plumRed,
            padding:'2rem'
        },
        h2: {
            fontSize: "2rem",
            padding: '0.4rem 0',
            letterSpacing: '0.1rem',
            color: ColorScheme.earthyOrange
        },
        h3: {
            fontSize: "1.2rem",
        },
        subtitle2: {
            fontSize: "1rem",
            fontStyle: 'oblique',
            lineHeight: 2,
            color: ColorScheme.alabasterWhite,
            fontFamily: FontScheme.secondary,
        },
        body1: {
            // default value of variant
            lineHeight: 2,
            fontFamily: FontScheme.secondary,
            color: ColorScheme.alabasterWhite,

        },
        body2: {
            fontSize: "0.5rem",
            fontFamily: FontScheme.secondary,
            color: ColorScheme.alabasterWhite,
        },
        // custom styles
        stepTitle:{
            fontSize: "1.6rem",
            letterSpacing: '0.1rem',
        }
    },
    palette: {
        background: {
            default: ColorScheme.midnightBlue
        },
        primary: {
            main: ColorScheme.plumRed,
        },
        secondary: {
            main: ColorScheme.earthyOrange
        },
        // State color
        info: {
            main: ColorScheme.alabasterWhite,
        },
        // Neutrals color
        text: {
            primary: ColorScheme.alabasterWhite
        },
        divider: '#E0E0E0',
        // Custom colors
        blueCard: {
            main: '#002147', //Oxford Blue
            light: '#002147',
            dark: '#002147',
            contrastText: '#002147',
        }
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
                    // backgroundColor: 'red',
                    // backgroundImage:'linear-gradient(to top, #30cfd0 0%, #330867 100%)',
                    // color: '#f9f8ff',
                    color: ColorScheme.alabasterWhite,
                    // color:'#aaaabc', // Mischka
                    // color:'#8f91c4',
                },
            }
        }
    }
});