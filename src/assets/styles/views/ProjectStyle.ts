import { styled } from "@mui/material/styles";
import { Box } from 'src/components/mui/components';
import { ColorScheme, TypographyScheme } from 'src/theme/UIstandard';


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
    borderRadius: '1rem',
    overflow: 'hidden',
    height: '25rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',

    '& .card-overlay': {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.0) 100%)',
        transition: 'background 0.5s ease',
    },
    '&:hover': {
        transform: 'translateY(-8px)',
        '& .card-overlay': {
            background: 'rgba(255, 255, 255, 0.55)',
        },
        '& .card-cover': {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            borderRadius: '1rem',
            '& * ': {
                color: ColorScheme.primary.dark
            },
            '& .chip': {
                background: 'rgba(30,64,175,0.18)',
                border: '0.5px solid rgba(30,64,175,0.35)',
            },
            '& .button': {
                '& .MuiButton-icon *': {
                    color: `${ColorScheme.text.light} !important`,
                },
                '& .MuiButton-root': {
                    color: ColorScheme.text.light
                }
            }
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


const CardCover = styled(Box)({
    position: 'absolute',
    bottom: '0.5rem',
    left: '0.5rem',
    right: '0.5rem',
    top: 'auto',

    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderRadius: '1rem',
    transition: 'all 0.5s ease',

    '& * ': {
        padding: '0.1rem',
        margin: '0.15rem 0',
        fontSize: '0.75rem',
        color: ColorScheme.text.light
    },
    '& .title': {
        ...TypographyScheme.subtitle1,
        color: ColorScheme.text.light
    },
    '& .role': {
        ...TypographyScheme.body1,
        fontStyle: "normal",
        color: ColorScheme.text.light
    },
    '& .chips-box': {
        display: 'flex',
        gap: '0.7rem',
        alignItems: 'center',
        marginTop: '1rem'
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
        color: ColorScheme.text.light,
        fontSize: '1rem',
        '& .MuiButton-root': {
            height: '36px',
            whiteSpace: 'nowrap',
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
            color: ColorScheme.text.light,
            background: 'rgba(0,0,0,0.45)',
            '&:hover': { background: 'rgba(0,0,0,0.65)' }
        }
    },
    '& .main-section': {
        padding: '2rem',
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
        },
        '& .summary': {
            background: ColorScheme.primary.dark,
            borderRadius: '0.5rem',
            '& .summary-text': {
                ...TypographyScheme.subtitle2,
                color: ColorScheme.text.light,
                padding: '1.5rem',
                magrin: '1.5rem 0'
            }
        }
    }
});

export {
    ProjectRows, CardRoot, CardImg, CardCover, DetailBox
}


