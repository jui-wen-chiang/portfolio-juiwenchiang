import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Box, Fade } from "@mui/material";
import { type ScrollTopBaseProps } from "src/types/components/tools";

/* Functional Core */
export default function ScrollTopBase(props: ScrollTopBaseProps) {
    const { children, threshold = 100, alwaysVisible = false } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold,
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector('#home'); // back to the view

        if (anchor) {
            anchor.scrollIntoView({
                block: 'start',
                behavior: 'smooth',
            });
        }
    };

    return (
        <Fade in={alwaysVisible || trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
            >
                {children}
            </Box>
        </Fade>
    );
}
