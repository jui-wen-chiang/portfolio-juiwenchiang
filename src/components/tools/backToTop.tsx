import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Box, Fab, Fade } from "src/components/mui/components";
import { KeyboardArrowUpIcon } from "src/components/mui/icons";
import { BackToTopProps } from "src/types/components/tools";
import { ColorScheme } from "src/theme/UIstandard"

function ScrollTop(props: BackToTopProps) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector('#home'); // back to the view

        if (anchor) {
            anchor.scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
}

export default function BackToTop(props: BackToTopProps) {
    return (
        <Box>
            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top" sx={{
                    backgroundColor: ColorScheme.primary.light,
                    "&:hover": {
                        backgroundColor: ColorScheme.primary.main
                    }
                }}>
                    <KeyboardArrowUpIcon sx={{ color: ColorScheme.neutral.main }} />
                </Fab>
            </ScrollTop>
        </Box>
    );
}