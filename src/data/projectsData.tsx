import { skilltreeItem } from "src/types/data/viewsData"

const projectData = [
    {
        type:'Business Project',
        title: 'Dashboard',
        image: "/imgs/businessproject_mirle_dashboard.jpg",
        summary: 'The Situation Room website achieves data visualization through the integration of heterogeneous data and real-time data presentation, which can help enterprises grasp the latest operational status anytime and anywhere, react quickly, and improve management and production efficiency.',
        icons: [
            { lable: 'VueJS3', src: '' },
            { lable: 'Python', src: '' },
            { lable: 'Odoo', src: '' },
            { lable: 'i18n', src: '' }
        ],
        details:{},
    },
    {
        type:'Business Project',
        title: 'Identify ORC Website',
        image: "/imgs/businessproject_mirle_orc.jpg",
        summary: 'Build a website to automatically capture the text content of digital files, automatically interpret file categories, recognize the meaning of text blocks, and combine the recognition results into structured data to save manual work time.',
        icons: [
            { lable: 'Bert NPL', src: '' },
            { lable: 'Python', src: '' },
            { lable: 'FastAPI', src: '' },
            { lable: 'Vue2', src: '' }
        ],
        details:{},
    },
    {
        type:'Side Project',
        title: 'Deepheart',
        image: "/imgs/sideproject_deepheart.jpg",
        summary: 'Using a mobile APP as an interface, users can write diaries to express their emotions, use AI to analyze articles for emotional analysis, and present emotional statistics, allowing users to realize whether they have been in negative emotions, so that users can seek professional help as soon as possible.',
        icons: [
            { lable: 'Bert NPL', src: '' },
            { lable: 'Python', src: '' },
            { lable: 'LineBot', src: '' },
        ],
        details:{},
    },
];


export { projectData }