import { styled } from "@mui/material/styles";
import { Container, Box, Card, Button, IconButton } from "src/components/mui";

export const TimelineContainer = styled(Container)({
    position: 'relative',
    width: '100%',
    // margin: '50px auto',
    padding: '20px 0',
    margin: 0
});

export const VerticalLine = styled('div')(({ theme }) => ({
    position: 'absolute',
    left: '50%',
    top: 0,
    bottom: 0,
    width: '0.2rem',
    backgroundColor: theme.palette.secondary.main,
    transform: 'translateX(-50%)',
    zIndex: 0,
}));

export const TimeLinePoint = styled('div')(({ theme }) => ({
    zIndex: 1,
    width: '1.2rem',
    height: '1.2rem',
    // padding:0,
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    border: `0.3rem solid white`,
    margin:'0 1rem'
}));

export const ItemCard = styled(Card)(({ theme }) => ({
    backgroundColor: 'white',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: `0 2px 8px ${theme.palette.secondary.main}`,
    maxWidth: '80%',
    margin: '1rem',

    // backgroundColor:theme.palette.primary.main,
    // border: `0.3rem solid ${theme.palette.secondary.main}`,
}));

const styles: any = {
    itemContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        margin: '40px 0',
    },
    side: {
        flex: 1,
        display: 'flex',
    },
    card: {
        backgroundColor: 'white',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        maxWidth: '80%',
        margin: '1rem',
    },
    title: {
        margin: 0,
        fontWeight: 'bold',
    },
    date: {
        margin: 0,
        fontSize: '12px',
        color: '#888',
    },
};