import { styled } from "@mui/material/styles";
import { FontFamilyScheme } from "src/theme/UIstandard";
import { Box, Card, Chip } from 'src/components/mui/components';

// ---------test
// const ProjectRows = styled(Box)(({ theme }) => ({
//     width: "100%",
//     display: 'flex',
//     flex: 1.5,
//     // backgroundColor:'red',
// }));

// const ColumnCard = styled(Card)(({ theme }) => ({
//     // display: 'flex',
//     // flexDirection: 'column',
//     // flex: 1.5,
//     width: "100%",
//     // margin:'1rem',
//     padding: '1rem',
//     backgroundColor: 'white',

// }));

// const OverlapTitle = styled(Box)(({ theme }) => ({
//     // minWidth: '50%',
//     marginLeft: '-2rem',
//     marginBottom: '-3.5rem',
//     display: 'flex',
//     alignContent: 'center',
//     alignItems: 'center',
//     flex: 1,
// }));

// --------- test now
const ProjectRows = styled(Box)(({ theme }) => ({
    maxWidth: '100%',
    margin: '3rem auto',
    position: 'relative',
    display: 'grid',
    gap: '2rem',
    // 核心設定：使用 repeat 並搭配 minmax 實現響應式，且限制最多 3 欄
    // gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 400px), 1fr))',
    // 嚴格限制「最多就是三欄」且不隨寬度無限增加欄數，可改用：
    gridTemplateColumns: '1fr', // 預設（xs）
    [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: 'repeat(2, 1fr)', // sm 以上兩欄
    },
    [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(3, 1fr)', // md 以上三欄
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

export {
    ProjectRows, ColumnCard, OverlapTitle,
    TextContainer, ImageContainer, SummaryBox, BackgroundImageBox, IconBox, IconChip, ImageBox
}