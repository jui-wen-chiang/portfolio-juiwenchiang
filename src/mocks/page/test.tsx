import * as React from 'react';
import { useState, useEffect, useRef } from "react";

import { useTranslation } from "react-i18next";

import { Container, Box, Button } from 'src/components/mui';
// import { PageContainer } from 'src/assets/styles/commonStyles'
import ModalDialog from 'src/components/tools/emtionDialog'
import BaseDialog from 'src/components/tools/beseDialog'
import useDialog from "src/hooks/useDialog";

const chartBoard: React.CSSProperties = {
    border: "2px solid red",
    padding: "1rem",
    height: "300px",
    width: "100%"
};


export default function TestPage() {
    const { t } = useTranslation(); // 取得翻譯函式

    return (
        <div>
            {/* <div id="BaseDialog">
                <div>
                    <button onClick={openDialog1}>Open Dialog1</button>
                    <BaseDialog
                        isOpen={isDialog1Open}
                        closeDialog={closeDialog1}
                        title="Dialog1"
                        content="content1"
                    />
                </div>

                <div>
                    <button onClick={openDialog2}>Open Dialog2</button>
                    <BaseDialog
                        isOpen={isDialog2Open}
                        closeDialog={closeDialog2}
                        title="Dialog2"
                        content="content2"
                    />
                </div>
            </div> */}

            {/* <div id="ModalDialog">
                <Box sx={chartBoard}>
                <Button variant="contained" onClick={() => setActiveDialog("recordMood")}>
                    t"recordMood.recordButton"
                </Button>
            </Box>
            <ModalDialog
                open={activeDialog === "recordMood"}
                handleClose={() => setActiveDialog(null)} />
            </div> */}
        </div>
    )
}