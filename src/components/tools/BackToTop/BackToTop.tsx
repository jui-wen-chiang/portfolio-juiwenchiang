import { Fab, Button } from "@mui/material";
import { KeyboardArrowUp as KeyboardArrowUpIcon } from "@mui/icons-material";
import ScrollTopBase from "./ScrollTopBase";
import type { BackToTopProps } from "src/types/components/tools";
import { ColorScheme } from "src/theme/UIstandard";


export default function BackToTop(props: BackToTopProps) {
    const { variant, alwaysVisible, textContent } = props;
    let button;

    switch (variant) {
        case "text":
            button = (
                <Button
                    variant="text"
                    sx={{
                        color:ColorScheme.text.light,
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
                        color:ColorScheme.text.light,
                        backgroundColor: ColorScheme.secondary.dark,
                        '&:hover': {
                            backgroundColor: ColorScheme.secondary.main,
                        },
                        position: 'fixed', bottom: 16, right: 16
                    }}
                >
                    <KeyboardArrowUpIcon/>
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
