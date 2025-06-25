import { styled, alpha } from '@mui/material/styles';
import * as base from "src/assets/styles/baseStyle";

const portraitImage = (theme) => ({
    width: {
        xs: '100%',
        sm: '70%',
        md: '50%',
        lg: '35%',
    },
    maxWidth: '400px',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '1rem',
    display: 'block',
    margin: '0 auto',
    [theme.breakpoints.down('lg')]: {
        marginBottom: '2rem ',
        maxWidth: '300px'
    }
});

export { portraitImage }