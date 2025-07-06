import { createTheme, alpha, getContrastRatio, responsiveFontSizes } from '@mui/material/styles';
import { FontScheme, ColorScheme } from "src/theme/designTokens"

let theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,      // phones
            sm: 600,    // tablets
            md: 900,    // small laptop
            lg: 1200,   // desktop
            xl: 1536,   // large desktop
        }
    },
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
            color: ColorScheme.lemonYellow,
            padding: '2rem'
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
        stepTitle: {
            fontSize: "1.6rem",
            letterSpacing: '0.1rem',
        }
    },
    palette: {
        background: {
            // default: ColorScheme.midnightBlue
            default: '#ffff'
        },
        primary: {
            main: ColorScheme.plumRed,
        },
        secondary: {
            main: ColorScheme.earthyOrange
        },
        // State color
        success: {
            main: ColorScheme.alabasterWhite,
        },
        error: {
            main: ColorScheme.alabasterWhite,
        },
        warning: {
            main: ColorScheme.lemonYellow,
        },
        info: {
            main: ColorScheme.alabasterWhite,
        },
        // Neutrals color
        text: {
            primary: ColorScheme.alabasterWhite
        },
        divider: '#33bfff',
        // Custom colors
        blueCard: {
            main: ColorScheme.oxfordBlue,
            light: ColorScheme.oxfordBlue,
            dark: ColorScheme.oxfordBlue,
            contrastText: ColorScheme.oxfordBlue
        }
    },
    components: {
        // MuiCssBaseline: {
        //     styleOverrides: {
        //         // Changes the global style of all native HTML tags
        //         body: {
        //             // backgroundImage: `url('/test.jpg')`,
        //             // backgroundRepeat: 'no-repeat',
        //             // backgroundSize: 'cover',
        //             // backgroundPosition: 'center',
        //             // backgroundImage: `url('/test.jpg')`,
        //             // backgroundSize: 'cover',
        //             // backgroundRepeat: 'no-repeat',
        //             // backgroundPosition: 'center'
        //             // cursor: 'url("/dot.png"), auto',
        //             // cursor: 'help',
        //             // color: ColorScheme.alabasterWhite,

        //             // position: 'fixed',
        //             // top: 0,
        //             // left: 0,
        //             // width: '100%',
        //             // height: '100vh',
        //             // background: 'linear-gradient(-45deg, #ee9ca7, #ffdde1, #a1c4fd, #c2e9fb)',
        //             // backgroundSize: '400% 400%',
        //             // animation: 'gradientAnimation 15s ease infinite',
        //             // zIndex: '-1'
        //         },
        //     }
        // }
    }
});

theme = responsiveFontSizes(theme);
export default theme;