import { useRef } from 'react'
import type { LinkBarProps } from "src/types/components/tools";
import { linkBarContent } from "src/data/components/toolData";
import { LinkBarBox } from "src/assets/styles/components/tool"
import { Button, IconButton } from 'src/components/mui/components';
import * as base from "src/assets/styles/baseStyle";


const { VITE_PUBLIC_URL: PUBLIC_URL } = import.meta.env;

export default function LinkBar({ simplyResumeIcon = true }: LinkBarProps) {
    const downloadRef = useRef<HTMLAnchorElement>(null);
    const onDownload = () => {
        console.log('downloadRef', downloadRef)
        if (downloadRef.current) {
            downloadRef.current.click();
        }
    };

    return (
        <LinkBarBox>
            {linkBarContent.map((item) => {

                if (item.name === 'Resume') {
                    {
                        return simplyResumeIcon ? (
                            <IconButton
                                aria-label={item.lable}
                                color="primary"
                                onClick={onDownload}
                                component="a"
                                href={`${PUBLIC_URL}/pdf/JuiWen_Chiang_Resume.pdf`}
                                download="JuiWen_Chiang_Resume.pdf"
                                sx={{ ...base.basePadding }}
                            >
                                {item.icon}
                            </IconButton>
                        ) : (
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={item.icon}
                                href={`${PUBLIC_URL}/pdf/JuiWen_Chiang_Resume.pdf`}
                                download="JuiWen_Chiang_Resume.pdf"
                                component="a"
                                sx={{ margin: '0.3rem' }}
                            >
                                {item.text}
                            </Button>
                        )
                    }
                } else {
                    return simplyResumeIcon ? (
                        <IconButton
                            aria-label={item.lable}
                            href={item.webSrc}
                            target="_blank"
                            color="primary"
                            sx={{ ...base.basePadding }}
                        >
                            {item.icon}
                        </IconButton>
                    ) : (
                        <Button
                            component="a"
                            variant="contained"
                            color="primary"
                            startIcon={item.icon}
                            href={item.webSrc}
                            target="_blank"
                            sx={{ margin: '0.3rem' }}
                        >
                            {item.text}
                        </Button>
                    )
                }
            })}
        </LinkBarBox>
    )
}