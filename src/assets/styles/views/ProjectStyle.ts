import { styled } from "@mui/material/styles";
import { FontFamilyScheme } from "src/theme/UIstandard";
import { Box, Card, Chip, Button, Typography } from 'src/components/mui/components';

// --------- test now
const ProjectRows = styled(Box)(({ theme }) => ({
    position: 'relative',
    maxWidth: '100%',
    width: '100%',
    margin: '1rem auto 0',
    display: 'grid',
    gap: '1.25rem',
    mt: 2,
    [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: 'repeat(1fr)',
    },
    [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
    },
}));


const OverlapTitle = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(90deg, #9333ea 0%, #ec4899 100%)',
    padding: '1rem',
    borderRadius: '2rem',
    position: 'relative',
    zIndex: 10,
    transform: 'translateY(2rem)',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    '&:hover': {
        transform: 'translateY(1.5rem)',
        boxShadow: '0 8px 16px rgba(147, 51, 234, 0.4)',
    },
    '& h3': {
        margin: 0,
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: 'white',
    }
}));

const ColumnCard = styled(Card)(({ theme }) => ({
    background: 'rgba(255, 255, 255, 0.1)',
    // backdropFilter: 'blur(10px)',
    // border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '1rem',
    padding: '4rem 1.5rem 2rem',
    height: '320px',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
        background: 'rgba(255, 255, 255, 0.15)',
        // border: '1px solid rgba(255, 255, 255, 0.3)',
        transform: 'scale(1.05)',
        boxShadow: '0 10px 20px rgba(147, 51, 234, 0.3)',
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(147, 51, 234, 0) 0%, rgba(236, 72, 153, 0) 100%)',
        transition: 'all 0.3s ease',
    },
    '&:hover::before': {
        background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
    },
    '& p': {
        margin: 0,
        lineHeight: '1.7',
        fontSize: '0.95rem',
        flex: 1,
    }
}));

// ---------

const TextContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    flex: 1.5,
    width: "100%"
}));

const ImageContainer = styled(Box)(({ theme }) => ({
    // minWidth: '50%',
    marginLeft: '-5rem',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
}));


const SummaryBox = styled(Box)(({ theme }) => ({
    zIndex: '2',
    position: 'relative',
    padding: '1rem 1.5rem',
    margin: '0.4rem auto',
    borderRadius: '1rem',
    backgroundColor: theme.palette.neutral.main,
    maskImage: 'linear-gradient(to left, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))',
    WebkitMaskImage: 'linear-gradient(to left, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))',
    // boxShadow: 'rgba(2, 12, 27, 0.7) 0px 10px 30px -15px',
    // transition: '0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
}));

const BackgroundImageBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: 0.3,
    zIndex: -1,
}));

const IconBox = styled(Box)(({ theme }) => ({
    width: "100%",
    display: 'flex',
    padding: '0.5rem 0',
    [theme.breakpoints.down('sm')]: {
        flexWrap: 'wrap',
    },
}));

const IconChip = styled(Chip)(({ theme }) => ({
    // margin: '0 0.3rem',
    // color: theme.palette.secondary.light,
    // backgroundColor: theme.palette.neutral.main,
    // fontFamily: FontFamilyScheme.secondary,
    [theme.breakpoints.down('sm')]: {
        margin: '0.3rem',
    },
}));

const ImageBox = styled('img')(({ theme }) => ({
    width: '100%',
    padding: '1rem',
    alignSelf: 'center',
    borderRadius: '2rem',
}));


const CardRoot = styled(Box)({
    position: 'relative',
    borderRadius: 16,
    overflow: 'hidden',
    cursor: 'pointer',
    height: 320,
    transition: 'transform 0.35s cubic-bezier(.22,.68,0,1.2), box-shadow 0.35s ease',

    '& .card-overlay': {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.0) 100%)',
        transition: 'background 0.35s ease',
    },
    '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.18)',
        '& .card-overlay': {
            background: 'rgba(0,0,0,0.65)',  // hover 時換成純色深遮罩
        },
        '& .card-img': { transform: 'scale(1.05)' },
        '& .card-body': { opacity: 1, transform: 'translateY(0)' },
        '& .card-title-always': { opacity: 0 },
    },
});


const CardImg = styled('img')({
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
});

const CardOverlay = styled(Box)({
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.05) 100%)',
    transition: 'background 0.35s ease',

    '.card-root:hover &': {
        background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.3) 100%)',
    },
});

const CardTitleAlways = styled(Typography)({
    position: 'absolute',
    bottom: '1.25rem',
    left: '1.25rem',
    fontSize: 18,
    fontWeight: 500,
    color: '#fff',
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none',
});

const CardImgSourceText = styled(Typography)({
    mt: '2px',
    fontSize: 9,
    color: 'rgba(255,255,255,0.45)',
    lineHeight: 1
});


const CardImgTitleText = styled(Typography)({
    mb: '6px',
    fontSize: 18,
    fontWeight: 500,
    color: '#fff',
    lineHeight: 1.3
});


const CardSummaryText = styled(Typography)({
    mb: '10px',
    fontSize: 13,
    color: 'rgba(255,255,255,0.82)',
    lineHeight: 1.6,
});

const CardBody = styled(Box)({
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '1.25rem',
    opacity: 0,
    transform: 'translateY(4px)',
    transition: 'opacity 0.35s ease, transform 0.35s ease',
});

const ViewButton = styled(Button)({
    fontSize: 13,
    fontWeight: 500,
    color: '#fff',
    background: 'rgba(255,255,255,0.15)',
    border: '0.5px solid rgba(255,255,255,0.45)',
    borderRadius: 8,
    padding: '6px 18px',
    textTransform: 'none',
    minWidth: 0,
    '&:hover': {
        background: 'rgba(255,255,255,0.28)',
    },
    '&:after': {
        // MUI ripple is built-in with TouchRipple
    },
});

export {
    CardRoot, CardImg, CardOverlay, CardTitleAlways, CardImgSourceText, CardImgTitleText,CardSummaryText,CardBody, ViewButton,
    ProjectRows, ColumnCard, OverlapTitle,
    TextContainer, ImageContainer, SummaryBox, BackgroundImageBox, IconBox, IconChip, ImageBox
}


