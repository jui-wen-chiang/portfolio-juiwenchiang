import { styled, alpha } from "@mui/material/styles";
import { Box } from 'src/components/mui/components';
import * as base from "src/assets/styles/baseStyle";
import { ColorScheme, TypographyScheme, BGCOLORS } from 'src/theme/UIstandard';


const ProjectRows = styled(Box)(({ theme }) => ({
    position: 'relative',
    maxWidth: '100%',
    width: '100%',
    margin: '1rem auto 0',
    display: 'grid',
    gap: '2rem',
    mt: 2,
    gridTemplateColumns: 'repeat(2, 1fr)',
    [theme.breakpoints.down('xl')]: {
        gridTemplateColumns: 'repeat(1, 1fr)',
    }
}));

const activeCardStyles = {
    '& .card-overlay': {
        background: 'rgba(255, 255, 255, 0.55)',
    },
    '& .card-cover': {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        borderRadius: '1rem',
        '& *': { color: ColorScheme.primary.dark },
        '& .chip': {
            background: 'rgba(30,64,175,0.18)',
            border: '0.5px solid rgba(30,64,175,0.35)',
        },
        // '& .button': {
        //     color: ColorScheme.text.light,
        // }
    },
};

const CardRoot = styled(Box)(({ theme }) => ({
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
        ...activeCardStyles,
    },
    [theme.breakpoints.down('md')]: {
        height: 'auto',
        minHeight: '20rem',
        ...activeCardStyles,
        '& .card-overlay': {
            position: 'relative',
            inset: 'unset'
        }
    },
}));

const CardImgWrapper = styled(Box)({
    position: 'relative',
    width: '100%',
    aspectRatio: '16 / 9',
    overflow: 'hidden',
    borderRadius: '0.5rem',
});

const CardImg = styled('img')({
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover'
});

const CardCover = styled(Box)(({ theme }) => ({
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
        color: ColorScheme.text.light,
    },
    '& .title': {
        ...TypographyScheme.subtitle1,
        color: ColorScheme.text.light,
        [theme.breakpoints.down('md')]: {
            color: ColorScheme.primary.dark,
        },
    },
    '& .role': {
        ...TypographyScheme.body1,
        fontStyle: "normal",
        color: ColorScheme.text.light,
        [theme.breakpoints.down('md')]: {
            color: ColorScheme.primary.dark,
        },
    },
    '& .chips-box': {
        display: 'flex',
        gap: '0.7rem',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: '1rem',
        [theme.breakpoints.down('md')]: {
            marginTop: 0
        },
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
        fontSize: '1rem',
        '& .MuiButton-root': {
            height: '36px',
            whiteSpace: 'nowrap',
            borderRadius: '2rem',
            color: ColorScheme.text.light,
            '& .MuiButton-startIcon, & .MuiButton-startIcon *': {
                color: ColorScheme.text.light,
            },
        }
    }
}));

const DetailBox = styled(Box)(({ theme }) => ({
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
        ...base.responsivePadding(theme, 'compact'),
        '& .info': {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            '& .img-detail': {
                ...base.responsivePadding(theme, 'compact'),
                paddingLeft: 0,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                [theme.breakpoints.up('xl')]: {
                    width: '70%',
                },
                '& .img-detail-content': {
                    borderRadius: '0.6rem',
                    width: '100%',
                }
            },
            '& .brief': {
                padding: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& .brief-icons': {
                    gap: 2,
                    margin: 1.5,
                },
                '& .brief-title': {
                    marginTop: 2,
                    marginBottom: 1,
                    color: ColorScheme.primary.dark
                },
                '& .brief-role': {
                    marginTop: 1,
                    marginBottom: 1,
                    fontStyle: 'normal'
                }
            }
        },
        '& .chips': {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            gap: '0.5rem',
            margin: '1rem 0'
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
        },
        '& .area-card': {
            backgroundColor: alpha(BGCOLORS.home, 0.5),
        }
    }
}));

export {
    ProjectRows, CardRoot, CardImgWrapper, CardImg, CardCover, DetailBox
}


