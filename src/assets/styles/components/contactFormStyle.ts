import { styled } from "@mui/material/styles";
import { Container, ContainerProps, Box, Button, TextField, List, ListItem, BoxProps } from 'src/components/mui/components';
import { Theme } from '@mui/material/styles';

const TextFieldBox = styled(Box)(({ theme }) => ({
    width: '100%',
    padding:'1rem 2rem'
}));

const UserTextField = styled(TextField)(({ theme }) => ({
    // padding: '2rem',
    // paddingTop: '0',
    // width: '70vw',
    width: '100%',

    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white', // 未 focus 邊框
        },
        '&:hover fieldset': {
            borderColor: 'white', // hover 邊框
        },
        '&.Mui-focused fieldset': {
            borderColor: '#f50057', // 聚焦邊框，可依 theme 改
        },
    },
    '& .MuiInputBase-input': {
        color: 'white', // 輸入文字
    },
    '& .MuiInputLabel-root': {
        color: 'white', // label 初始顏色
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: '#f50057', // label 聚焦後顏色（optional）
    },
}));

const inputPropsStyle = (theme: Theme) => ({
    // ...theme.typography.body1,
    left: "1rem",
    right: "1rem",
    fontSize: "20px",
    // marginTop: "4px"
});

const inputLablePropsStyle = {
    fontSize: "12px",
    bottom: "20px"
};

export { TextFieldBox,UserTextField,inputPropsStyle }