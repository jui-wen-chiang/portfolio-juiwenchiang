import { Padding } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { Box, Dialog, Card, Chip, Button, Typography } from 'src/components/mui/components';


const ProjectRows = styled(Box)(({ theme }) => ({
    position: 'relative',
    maxWidth: '100%',
    width: '100%',
    margin: '1rem auto 0',
    display: 'grid',
    gap: '2rem',
    mt: 2,
    [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: 'repeat(1fr)',
    },
    [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
    },
}));

const CardRoot = styled(Box)({
    position: 'relative',
    borderRadius: '1.5rem',
    overflow: 'hidden',
    height: '25rem',

    '& .card-overlay': {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.0) 100%)',
        transition: 'background 0.35s ease'
    },
    '&:hover': {
        transform: 'translateY(-8px)',
        // boxShadow: '0 20px 40px rgba(0,0,0,0.18)',
        '& .card-overlay': {
            // background: 'rgba(0,0,0,0.65)',
            background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.0) 100%)',
            transition: 'background 0.35s ease',
            // backdropFilter: 'blur(15px)',
            // WebkitBackdropFilter: 'blur(15px)',

        },
    }
});

const CardImg = styled('img')({
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover'
});

const CardOverlay = styled(Box)({
    position: 'absolute',
    inset: 0,
    // background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, transparent 50%)',
    // 預設：深紫黑，跟亮藍白背景形成色溫對比
    background: 'linear-gradient(to top, rgba(15,5,35,0.8) 10%, rgba(10,2,20,0.15) 55%, transparent 100%)',
    // background: 'linear-gradient(to top, rgba(255,255,255,0.30) 0%,rgba(15,5,35,0.7) 30%, rgba(10,2,20,0.15) 55%, transparent 100%)',

    // transition: 'background 0.35s ease',

    // '.card-root:hover &': {
    //     padding: '0.5rem',
    //     backdropFilter: 'blur(15px)',
    //     WebkitBackdropFilter: 'blur(15px)',
    // },
});

const CardCover = styled(Box)({
    position: 'absolute',
    bottom: '0.5rem',
    left: '0.5rem',
    right: '0.5rem',

    padding: '0.5rem',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderRadius: 12,

    '& * ': {
        padding: '0.1rem',
        margin: '0.15rem 0',
        fontSize: '0.75rem',
        color: '#fff',
    },
    '& .title': {
        fontSize: '1.1rem',
        fontWeight: 500,
    },
    '& .link-button': {
        color: '#fff',
    },
    '& .chips-box': {
        display: 'flex',
        gap: '0.7rem',
        alignItems: 'center',
    },
    '& .chip': {
        height: 22,
        padding: '0.5rem',
        background: 'rgba(255,255,255,0.18)',
        border: '0.5px solid rgba(255,255,255,0.35)',
    },
    '& .button': {
        display: 'flex',
        gap: '0.7rem',
        justifyContent: 'space-evenly',
        '& .MuiLink-root': {
            color: '#fff',
        },
        '& .MuiButton-root': {
            height: '36px',
            whiteSpace: 'nowrap',
            background: 'rgba(84, 168, 246)',
            border: '0.5px solid rgba(255,255,255,0.45)',
            borderRadius: '2rem'
        }
    }
});



const DetailBox = styled(Box)({
    '& .close-button': {
        position: 'relative',
        '& .MuiIconButton-root': {
            position: 'absolute',
            top: 10,
            right: 10,
            color: '#fff',
            background: 'rgba(0,0,0,0.45)',
            '&:hover': { background: 'rgba(0,0,0,0.65)' }
        }
    },
    '& .main-section': {
        padding: '1.5rem',
        '& .info': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        '& .chips': {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            mb: 2
        }
    }
});

export {
    ProjectRows, CardRoot, CardImg, CardOverlay, CardCover, DetailBox
}


