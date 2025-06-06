import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';

const FontSystem: { [key: string]: string } = {
    'primary': "DM Serif Display,  -apple-system, BlinkMacSystemFont, serif",
    'secondary': "Libre Baskerville, -apple-system, BlinkMacSystemFont, serif"
};

const ColorSystem: { [key: string]: string } = {
    'darkBlue': '#000919',
    'midnightBlue': '#000a33',
    'plumRed': '#9f3e60',
    'earthyOrange': '#db6d5b',
    'lemonYellow': '#f9f871',
    'alabasterWhite': '#f1f1e6',
};

// plum: '#532253',
// amber: '#fbaf57',
// default: '#002147', // Oxford Blue
// default: '#003153', // Prussian Blue


export default createTheme({
    // MUI will prioritize the typography settings of Theme
    typography: {
        fontSize: 16,
        fontFamily: FontSystem.primary,
        // Home View
        h1: {
            fontSize: "4.5rem",
            color: ColorSystem.lemonYellow
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
            color: ColorSystem.plumRed,
            padding:'2rem'
        },
        h2: {
            fontSize: "2rem",
            padding: '0.4rem 0',
            letterSpacing: '0.1rem',
            color: ColorSystem.earthyOrange
        },
        h3: {
            fontSize: "1.2rem",
        },
        subtitle2: {
            fontSize: "1rem",
            fontStyle: 'oblique',
            lineHeight: 2,
            color: ColorSystem.alabasterWhite,
            fontFamily: FontSystem.secondary,
        },
        body1: {
            // default value of variant
            lineHeight: 2,
            fontFamily: FontSystem.secondary,
            color: ColorSystem.alabasterWhite,

        },
        body2: {
            fontSize: "0.5rem",
            fontFamily: FontSystem.secondary,
            color: ColorSystem.alabasterWhite,
        },
        // custom styles
        stepTitle:{
            fontSize: "1.6rem",
            letterSpacing: '0.1rem',
        }
    },
    palette: {
        background: {
            default: ColorSystem.midnightBlue
        },
        primary: {
            main: ColorSystem.plumRed,
        },
        secondary: {
            main: ColorSystem.earthyOrange
        },
        // State color
        info: {
            main: ColorSystem.alabasterWhite,
        },
        // Neutrals color
        text: {
            primary: ColorSystem.alabasterWhite
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
                    color: ColorSystem.alabasterWhite,
                    // color:'#aaaabc', // Mischka
                    // color:'#8f91c4',
                },
            }
        }
    }
});