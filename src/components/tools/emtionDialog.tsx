import { useTranslation } from "react-i18next";

import {
    Dialog, DialogTitle, DialogContent, DialogActions, Box, Button
} from 'src/components/mui/components';
// import RadarChart from 'src/components/charts/radar'
// import { BasicBox } from 'src/assets/styles/commonStyles'


const chartBoard: React.CSSProperties = {
    border: "2px solid red",
    padding: "1rem",
    height: "300px",
    width: "100%"
};


const test: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
};


export default function ModalDialog({ open, handleClose }) {
    const { t } = useTranslation(); // 取得翻譯函式

    return (
        <Dialog open={open} onClose={handleClose} sx={{ test }}>
            {/* <DialogTitle>{t("recordMood.recordTitle")}</DialogTitle> */}
            <DialogContent>
                <p>提醒可以前往setting page 設定情緒種類。</p>
                {/* <Box>
                    <RadarChart type="basic" />
                </Box> */}
            </DialogContent>
            <DialogActions>
                {/* <Button onClick={handleClose}>{t("common.save")}</Button>
                <Button onClick={handleClose}>{t("common.cancel")}</Button> */}
            </DialogActions>
        </Dialog>
    );
}
