import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { BreakPointsSchem, TypographyScheme, PaletteScheme } from "src/theme/UIstandard";

let theme = createTheme({
    breakpoints: { values: BreakPointsSchem },
    typography: TypographyScheme,
    palette: PaletteScheme
});

theme = responsiveFontSizes(theme);
export default theme;