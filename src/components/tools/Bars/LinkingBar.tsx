import React, { useState, useCallback, useRef, useEffect } from 'react'
import type { LinkBarProps } from "src/types/components/tools";
import { linkBarContent } from "src/data/components/toolData";

import { LinkBarBox } from "src/assets/styles/components/tool"
import { Box, Button, IconButton } from 'src/components/mui/components';
import * as base from "src/assets/styles/baseStyle";
import { ColorScheme } from "src/theme/UIstandard"


// const { PUBLIC_URL } = process.env;
const { VITE_PUBLIC_URL: PUBLIC_URL } = import.meta.env;

export default function LinkBar({ simplyResumeIcon = true }: LinkBarProps) {
    console.log(`${PUBLIC_URL}/pdf/JuiWen_Chiang_Resume.pdf`)
    const ref = useRef<ReturnType<typeof setTimeout>[]>([]);
    const [items, set] = useState<string[]>([]);
    const downloadRef = useRef<HTMLAnchorElement>(null);
    const onDownload = () => {
        if (downloadRef.current) {
            downloadRef.current.click();
        }
    };

    return (
        <LinkBarBox>
            {linkBarContent.map((item, index) => {
                if (item.name === 'Resume') {
                    {
                        return simplyResumeIcon ? (
                            <IconButton
                                aria-label={item.lable}
                                color="primary"
                                sx={{ ...base.basePadding }}
                                // onClick={onDownload}
                                component="a"
                                href={`${PUBLIC_URL}/pdf/JuiWen_Chiang_Resume.pdf`}
                                download="JuiWen_Chiang_Resume.pdf"
                            >
                                {item.icon}
                            </IconButton>
                        ) : (
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                startIcon={item.icon}
                                sx={{ ...base.basePadding, ...base.dmSerifFontFamily, color: ColorScheme.neutral.light }}
                                onClick={onDownload}>
                                <a
                                    ref={downloadRef}
                                    href={`${PUBLIC_URL}/pdf/JuiWen_Chiang_Resume.pdf`}
                                    download="JuiWen_Chiang_Resume.pdf"
                                    style={{ display: "none" }}
                                >
                                </a>
                                Get Resume
                            </Button>
                        )
                    }
                } else {
                    return (
                        <IconButton
                            aria-label={item.lable}
                            href={item.webSrc}
                            target="_blank"
                            color="primary"
                            sx={{ ...base.basePadding }}
                        >
                            {item.icon}
                        </IconButton>
                    )
                }
            })}
        </LinkBarBox>
    )
}