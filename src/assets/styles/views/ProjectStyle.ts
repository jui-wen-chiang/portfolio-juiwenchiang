import { styled } from "@mui/material/styles";
import { FontFamilyScheme } from "src/theme/designTokens";
import { Box, Card, Chip } from 'src/components/mui/components';

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
    backgroundColor: theme.palette.blueCard.main,
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
    margin: '0 0.3rem',
    color: theme.palette.secondary.light,
    backgroundColor: theme.palette.neutral.main,
    fontFamily: FontFamilyScheme.secondary,
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

export { TextContainer, ImageContainer, SummaryBox, BackgroundImageBox, IconBox, IconChip, ImageBox }