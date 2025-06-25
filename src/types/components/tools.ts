interface BaseDialogProps {
    isOpen: boolean;
    closeDialog: () => void;
    title?: string;
    content?: any;
};

interface ControlBarProps {
    activeIndex: number;
    isPlaying: boolean;
    items: { title: string }[];
    handleSelect: (index: number) => void;
    handleNext: () => void;
    handlePrev: () => void;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};

interface LinkBarProps {
    simplyResumeIcon?: boolean;
};

interface BackToTopProps {
    children?: React.ReactElement<unknown>;
}

export { BaseDialogProps, ControlBarProps, LinkBarProps,BackToTopProps }