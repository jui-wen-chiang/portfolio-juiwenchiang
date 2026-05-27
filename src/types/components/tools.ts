import type { ReactNode } from "react";
import type { ViewItems } from "src/types/view/index";

export interface BaseDialogProps {
    isOpen: boolean;
    closeDialog: () => void;
    state?: string;
    title?: string;
    content?: any;
    extra?: React.ReactNode;
};

export interface ControlBarProps {
    activeIndex: number;
    isPlaying: boolean;
    items: { title: string }[];
    handleSelect: (index: number) => void;
    handleNext: () => void;
    handlePrev: () => void;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface LinkBarProps {
    simplyResumeIcon?: boolean;
};

export interface ScrollTopBaseProps {
    children: ReactNode;
    threshold?: number;
    alwaysVisible?: boolean;
}

export interface BackToTopProps {
    variant: string;
    alwaysVisible?: boolean;
    textContent?: string;
    iconNode?: any;
}

export interface SkillList {
    category: string;
    technologies: TechnologyProps[];
}
export interface TechnologyProps {
    name: string;
    icon?: any;
    class: string;
}


export interface BackgroundBlobsProps {
    variant?: ViewItems;
    side?: 'right' | 'left' | 'both';
}

export interface BlobItem {
    width: number;
    height: number;
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    rotate?: number;
    borderRadius?: string,
    background: string;
    filter?: string;
    zIndex?: number;
}