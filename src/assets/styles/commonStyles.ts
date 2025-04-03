import { styled } from "@mui/material/styles";
import { Container, Box, Card } from "src/components/mui";

// styled
// for tools
export const PageContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5rem',
    width: '100%',
    height: '100%'
});

export const BasicBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5rem',
    width: '100%',
    height: '100%'
});

export const TwoColsBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%'
});

// for components
export const BaseCardLayout = styled(Card)(({ theme }) => ({
    background: "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
    color: "white",
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    "&:hover": {
        boxShadow: theme.shadows[6],
    }
}));


// sx
export const leftColumn: React.CSSProperties = {
    flex: 2
};

export const rightColumn: React.CSSProperties = {
    flex: 1,
};