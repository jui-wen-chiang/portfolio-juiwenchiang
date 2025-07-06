import React, { useState, useCallback, useRef, useEffect } from 'react'
import { LinkBarProps } from "src/types/components/tools";
import { linkBarContent } from "src/data/components/toolData";

import { LinkBarBox } from "src/assets/styles/components/tool"
import { Box, Button, IconButton } from 'src/components/mui/components';
import * as base from "src/assets/styles/baseStyle";

const { PUBLIC_URL } = process.env;

export default function LinkBar({ simplyResumeIcon = true }: LinkBarProps) {
    const ref = useRef<ReturnType<typeof setTimeout>[]>([]);
    const [items, set] = useState<string[]>([]);

    const downloadRef = useRef(null);
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
                                sx={{ ...base.commPadding }}
                                onClick={onDownload}
                            >
                                {item.icon}
                            </IconButton>
                        ) : (
                            <Button
                                variant="contained"
                                size="small"
                                startIcon={item.icon}
                                sx={{ ...base.commPadding, ...base.dmSerifFontFamily }}
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
                            sx={{ ...base.commPadding }}
                        >
                            {item.icon}
                        </IconButton>
                    )
                }
            })}
        </LinkBarBox>
    )
}