import { styled } from "@mui/material/styles";
import { Box, TextField } from 'src/components/mui/components';
import type { Theme } from '@mui/material/styles';
import { ColorScheme } from "src/theme/UIstandard"


const TextFieldBox = styled(Box)(() => ({
    width: '100%',
    padding: '1rem 2rem'
}));

const UserTextField = styled(TextField)(() => ({
    width: '100%',
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: ColorScheme.primary.main
        },
        '&:hover fieldset': {
            borderColor: ColorScheme.primary.dark
        },
        '&.Mui-focused fieldset': {
            borderColor: ColorScheme.primary.dark
        },
    }
}));

const inputPropsStyle = (theme: Theme) => ({
    ...theme.typography.body2,
});

export { TextFieldBox, UserTextField, inputPropsStyle }