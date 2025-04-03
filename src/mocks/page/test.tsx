import * as React from 'react';
import { useState } from "react";

import { useTranslation } from "react-i18next";

import { Container, Box, Button } from 'src/components/mui';
import { PageContainer } from 'src/assets/styles/commonStyles'
import ModalDialog from 'src/components/tools/emtionDialog'

const chartBoard: React.CSSProperties = {
    border: "2px solid red",
    padding: "1rem",
    height: "300px",
    width: "100%"
};


export default function TestPage() {
    const [activeDialog, setActiveDialog] = useState(null);
    const { t } = useTranslation(); // 取得翻譯函式

    return (
        <PageContainer>
            {/* <Box sx={chartBoard}>
                <LanguageSwitcher />
            </Box>

            <Box sx={chartBoard}>
                <MyCard />
            </Box>

            <Box sx={chartBoard}>
                <GaugeChart type="basic" />
            </Box>
            <Box sx={chartBoard}>
                <GaugeChart type="test" />
            </Box>

            <Box sx={chartBoard}>
                <PieChart type="classic" />
            </Box>
            <Box sx={chartBoard}>
                <PieChart type="donut" />
            </Box>
            <Box sx={chartBoard}>
                <PieChart type="nested" />
            </Box>

            <Box sx={chartBoard}>
                <BarChart type="basic" />
            </Box>
            <Box sx={chartBoard}>
                <BarChart type="categoryStacking" />
            </Box>
            <Box sx={chartBoard}>
                <BarChart type="line" />
            </Box>
            <Box sx={chartBoard}>
                <BarChart type="markPoint" />
            </Box>

            <Box sx={chartBoard}>
                <RadarChart type="basic" />
            </Box> */}



            <Box sx={chartBoard}>
                <Button variant="contained" onClick={() => setActiveDialog("recordMood")}>
                    {t("recordMood.recordButton")}
                </Button>
            </Box>
            <ModalDialog
                open={activeDialog === "recordMood"}
                handleClose={() => setActiveDialog(null)} />

        </PageContainer>
    )
}