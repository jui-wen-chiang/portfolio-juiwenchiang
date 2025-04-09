import { useTranslation } from "react-i18next";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button} from 'src/components/mui';
import { BaseDialogProps } from "src/types/components/tools"

export default function BaseDialog({ isOpen, closeDialog, title, content }: BaseDialogProps) {
    // const { t } = useTranslation();

    return (
        <Dialog open={isOpen} onClose={closeDialog}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <p>{content}</p>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeDialog} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};