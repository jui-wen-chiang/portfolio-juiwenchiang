import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { BreakPointsSchem, TypographyScheme, PaletteScheme } from "src/theme/UIstandard";

let theme = createTheme({
    breakpoints: { values: BreakPointsSchem },
    typography: TypographyScheme,
    palette: PaletteScheme,
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                'html, body, #root': {
                    margin: 0,
                    padding: 0,
                    width: '100%',
                    overflowX: 'clip',
                },
            },
        },
    },
});

theme = responsiveFontSizes(theme);
export default theme;