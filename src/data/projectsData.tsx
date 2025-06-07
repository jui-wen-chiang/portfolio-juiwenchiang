import { skilltreeItem } from "src/types/data/viewsData"

const projectData = [
    {
        type: 'Business Project',
        title: 'The Situation Dashboard',
        subtitle: "Real-Time Data Visualization Platform",
        image: "/imgs/businessproject_mirle_dashboard.jpg",
        summary: 'Developed a web-based platform that integrates heterogeneous data sources and presents real-time visualizations. This helps enterprises monitor operational status anytime, make faster decisions, and improve both management and production efficiency.',
        keyFeatures: [
            "Real-time data synchronization and visualization.",
            "Dashboard interface for intuitive monitoring.",
            "Enhanced decision-making through data integration."
        ],
        icons: [
            { lable: 'VueJS3', src: '' },
            { lable: 'Python', src: '' },
            { lable: 'Odoo', src: '' },
            { lable: 'i18n', src: '' }
        ],
        details: {},
    },
    {
        type: 'Business Project',
        title: 'Identify ORC Website',
        subtitle: "Automating File Understanding",
        image: "/imgs/businessproject_mirle_orc.jpg",
        summary: 'Built a web application that automatically extracts text from various digital files using OCR (Optical Character Recognition), classifies document types, and applies NLP (Natural Language Processing) techniques to interpret the semantic meaning of text blocks. The extracted information is then transformed into structured data, reducing manual workload and improving document processing efficiency.',
        keyFeatures: [
            "OCR-powered text extraction from scanned files.",
            "NLP-based semantic understanding of text blocks.",
            "Automatic document classification and structuring."
        ],
        icons: [
            { lable: 'Bert NPL', src: '' },
            { lable: 'Python', src: '' },
            { lable: 'FastAPI', src: '' },
            { lable: 'Vue2', src: '' }
        ],
        details: {},
    },
    {
        type: 'Side Project',
        title: 'Emotion Journal App - Deepheart',
        subtitle: "AI-Based Sentiment Tracker",
        image: "/imgs/sideproject_deepheart.jpg",
        summary: 'Designed a mobile app that allows users to write daily journals and uses AI to analyze the emotional tone of the text. The app provides emotion trend statistics, helping users recognize prolonged negative emotions and seek professional help when needed.',
        keyFeatures: [
            "AI-powered sentiment analysis.",
            "Diary input interface for emotional expression.",
            "Visual statistics of emotional trends."
        ],
        icons: [
            { lable: 'Bert NPL', src: '' },
            { lable: 'Python', src: '' },
            { lable: 'LineBot', src: '' },
        ],
        details: {},
    },
];


export { projectData }