import { styled } from "@mui/material/styles";
import { Box, TextField } from 'src/components/mui/components';
import { Theme } from '@mui/material/styles';
import { ColorScheme } from "src/theme/UIstandard"


const TextFieldBox = styled(Box)(({ theme }) => ({
    width: '100%',
    padding: '1rem 2rem'
}));

const UserTextField = styled(TextField)(({ theme }) => ({
    width: '100%',
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: ColorScheme.primary.contrastText
        },
        '&:hover fieldset': {
            borderColor: ColorScheme.secondary.light
        },
        '&.Mui-focused fieldset': {
            borderColor: ColorScheme.secondary.light
        },
    }
}));

const inputPropsStyle = (theme: Theme) => ({
    ...theme.typography.body1,
    left: "1rem",
    right: "1rem",
});

export { TextFieldBox, UserTextField, inputPropsStyle }