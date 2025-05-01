import { skilltreeItem } from "src/types/data/viewsData"

const initialNodes: skilltreeItem[] = [
    {
        id: 'root',
        position: { x: 0, y: 0 },
        data: { label: 'Skills' },
        type: 'custom',
    },
    {
        id: 'level1_art',
        position: { x: 300, y: 100 },
        data: { label: 'Art' },
        type: 'custom',
        expanded: false,
    },
    {
        id: 'level1_music',
        position: { x: -300, y: 0 },
        data: { label: 'Music' },
        type: 'custom',
        expanded: false,
    },
    {
        id: 'level1_cs',
        position: { x: 300, y: -100 },
        data: { label: 'CS' },
        type: 'custom',
        expanded: false,
        childNodes: [
            {
                id: 'level1_cs-child1',
                data: { label: `子節點 1` },
                position: { x: 320, y: -200 },
                type: 'custom',
                expanded: false,
            },
            {
                id: 'level1_cs-child2',
                data: { label: `子節點 2` },
                position: { x: 320, y: -300 },
                type: 'custom',
                expanded: false,
            },
        ]
    },
];


export { initialNodes }