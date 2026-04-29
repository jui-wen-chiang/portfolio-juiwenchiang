// import { useTranslation } from "react-i18next";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from 'src/components/mui/components';
import type { BaseDialogProps } from "src/types/components/tools"

type DialogState = 'success' | 'error' | 'warning' | undefined;

const stateColor = (state: DialogState | string | undefined) => {
    switch (state) {
        case 'success': return 'primary';
        case 'error': return 'error';
        case 'warning': return 'warning';
        default: return 'inherit';
    }
};

export default function BaseDialog({ isOpen, closeDialog, state, title, content, extra }: BaseDialogProps) {

  return (
    <Dialog open={isOpen} onClose={closeDialog} maxWidth="sm" fullWidth>
      {title && (
        <DialogTitle sx={{ color: `${stateColor(state)}.main` }}>
          {title}
        </DialogTitle>
      )}

      <DialogContent>
        {content && <p>{content}</p>}
        {extra}
      </DialogContent>

      <DialogActions>
        <Button onClick={closeDialog}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
