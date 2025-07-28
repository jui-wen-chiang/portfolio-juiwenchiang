import { ReactNode } from "react";
import { IconType } from 'react-icons';

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

interface ScrollTopBaseProps {
    children: ReactNode;
    threshold?: number;
    alwaysVisible?: boolean;
}

interface BackToTopProps {
    variant: string;
    alwaysVisible?: boolean;
    textContent?: string;
    iconNode?: any
}


interface SkillList {
    category: string;
    technologies: TechnologyProps[];
}
interface TechnologyProps {
    name: string;
    icon?: IconType;
    class: string;
}

export {
    BaseDialogProps,
    ControlBarProps,
    LinkBarProps,
    ScrollTopBaseProps,
    BackToTopProps,
    SkillList,
    TechnologyProps
}