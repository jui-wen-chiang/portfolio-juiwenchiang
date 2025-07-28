import { Fab, Button } from "@mui/material";
import { KeyboardArrowUp as KeyboardArrowUpIcon } from "@mui/icons-material";
import ScrollTopBase from "./ScrollTopBase";
import { BackToTopProps } from "src/types/components/tools";
import { ColorScheme } from "src/theme/UIstandard";
import { Box, Typography } from 'src/components/mui/components';
import { portraitImage } from 'src/assets/styles/views/AboutStyle';

const { PUBLIC_URL } = process.env;


export default function BackToTop(props: BackToTopProps) {
    const { variant, alwaysVisible, textContent } = props;

    let button;

    switch (variant) {
        case "text":
            button = (
                <Button
                    variant="text"
                    sx={{
                        color:ColorScheme.primary.dark,
                        fontSize:'1.3rem'
                    }}
                >
                    {textContent}
                </Button>
            );
            break;
        default:
            button = (
                <Fab
                    size="small"
                    aria-label="scroll back to top"
                    sx={{
                        backgroundColor: ColorScheme.primary.light,
                        '&:hover': {
                            backgroundColor: ColorScheme.primary.dark,
                        },
                        position: 'fixed', bottom: 16, right: 16
                    }}
                >
                    <KeyboardArrowUpIcon sx={{ color: ColorScheme.neutral.main }} />
                </Fab>

            );
            break;
    }

    return (
        <ScrollTopBase alwaysVisible={alwaysVisible}>
            {button}
        </ScrollTopBase>
    );
}
