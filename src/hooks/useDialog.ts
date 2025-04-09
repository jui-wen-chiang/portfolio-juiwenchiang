// /hooks/useDialog.ts
import { useState } from "react";

const useDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogProps, setDialogProps] = useState<any>(null);

  const openDialog = (props: any) => {
    setDialogProps(props);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setDialogProps(null);
  };

  return { isOpen, dialogProps, openDialog, closeDialog };
};

export default useDialog;