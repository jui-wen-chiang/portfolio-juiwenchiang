export interface ControlBarProps {
    activeIndex: number;
    isPlaying: boolean;
    items: { title: string }[];
    handleSelect: (index: number) => void;
    handleNext: () => void;
    handlePrev: () => void;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface BaseDialogProps {
    isOpen: boolean;
    closeDialog: () => void;
    title?: string;
    content?: any;
}