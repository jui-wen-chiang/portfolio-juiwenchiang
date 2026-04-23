import type { ComponentType, SVGProps } from "react";

// icon: ComponentType<SVGProps<SVGSVGElement>>;

export type techCategory =
    | "frontend"
    | "backend"
    | "database"
    | "ai"
    | "devops"
    | "tool";
export interface projects {
    type: "side" | "business";
    title: string;
    subtitle?: string;
    role: string;
    img: {
        url: string;
        lable: string;
        source: string;
    };
    tech: Array<{
        display: "cover" | "detail";
        type: techCategory
        lable: string;
        icon?: ComponentType<SVGProps<SVGSVGElement>>;
    }>;
    link?: Array<{
        type: "repo" | "doc";
        label: string,
        url: string
    }>;
    summary: string;
    problem: string;
    solution: string;
    impact: string;
}

export interface timelineItem {
    title: string;
    subtitle: string;
    year: string;
    month: string;
    country: string;
    location: string;
    cardImage: {
        url: string;
        lable: string;
    },
    activity: any;
    details: any;
}

export interface galleryItem {
    title: string;
    subtitle: string;
    year: string;
    cardImage: {
        url: string;
        lable: string;
    }
}

interface skilltreeNode {
    id: string;
    data: { label: string };
    position: { x: number; y: number };
    type: string;
    expanded?: boolean;
    childNodes?: Array<any>;
}

export interface skilltreeItem extends skilltreeNode {
    childNodes?: Array<skilltreeNode>;
}