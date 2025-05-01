import React from 'react';
import Tree from 'react-d3-tree';
import { ViewLayout } from 'src/assets/styles/commonStyles'

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const orgChart = {
    name: 'Skills',
    children: [
        {
            name: 'Manager',
            attributes: {
                department: 'Production',
            },
            children: [
                {
                    name: 'Foreman',
                    attributes: {
                        department: 'Fabrication',
                    },
                    children: [
                        {
                            name: 'Worker',
                        },
                    ],
                },
                {
                    name: 'Foreman',
                    attributes: {
                        department: 'Assembly',
                    },
                    children: [
                        {
                            name: 'Worker',
                        },
                    ],
                },
            ],
        },
        {
            name: 'Art',
            attributes: {
                department: 'Production',
            },
            children: [
                {
                    name: 'Art1',
                    attributes: {
                        department: 'Fabrication',
                    },
                    children: [
                        {
                            name: 'ArtWorker',
                        },
                    ],
                },
                {
                    name: 'Art2',
                    attributes: {
                        department: 'Assembly',
                    },
                    children: [
                        {
                            name: 'ArtWorker',
                        },
                    ],
                },
            ],
        },
        {
            name: 'Music',
            attributes: {
                department: 'Production',
            },
            children: [
                {
                    name: 'Music1',
                    attributes: {
                        department: 'Fabrication',
                    },
                    children: [
                        {
                            name: 'MusicWoeker',
                        },
                    ],
                },
                {
                    name: 'Music2',
                    attributes: {
                        department: 'Assembly',
                    },
                    children: [
                        {
                            name: 'MusicWoeker',
                        },
                    ],
                },
            ],
        },
    ],
};

export default function SkillsView() {
    return (
        // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
        // <div id="treeWrapper" style={{ margin:'10rem', padding:'5rem', width: '50em', height: '20em' }}>
        //     <Tree data={orgChart} />
        // </div>
        <ViewLayout sx={{ height: '80vh' }}>
            <Tree data={orgChart} orientation="horizontal"/>
        </ViewLayout>
    );
}