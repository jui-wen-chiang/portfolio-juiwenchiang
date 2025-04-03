import { useTranslation } from "react-i18next";

import {
    Dialog, DialogTitle, DialogContent, DialogActions, Box, Button
} from 'src/components/mui';


export default function ModalDialog({ open, handleClose, title, children }) {
    const { t } = useTranslation(); // 取得翻譯函式

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <h2>{children}</h2>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>{t("save")}</Button>
            </DialogActions>
        </Dialog>
    );
}