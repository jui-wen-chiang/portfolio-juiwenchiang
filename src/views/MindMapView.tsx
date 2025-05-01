import React, { useCallback, useState, useEffect } from 'react';
import {
  ReactFlowProvider,
  MiniMap,
  Controls,
  ReactFlow,
  useReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
  MarkerType,
  ConnectionMode,
  NodeMouseHandler
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import CustomNode from 'src/components/flow/CustomNode';
import FloatingEdge from 'src/components/flow/FloatingEdge';
// data
import { initialNodes } from "src/data/skilltreeData"
import { skilltreeItem } from "src/types/data/viewsData"

import 'src/views/index.css';

const nodeTypes = { custom: CustomNode };
const edgeTypes: { [key: string]: any } = { floating: FloatingEdge };
const fitViewOptions = { padding: 4 };

const initialEdges = [
  {
    id: 'root-2',
    source: 'root',
    target: 'level1_art',
    sourceHandle: 'c',
    targetHandle: 'a',
    type: 'floating',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'root-3',
    source: 'root',
    target: 'level1_music',
    sourceHandle: 'c',
    targetHandle: 'a',
    type: 'floating',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'root-4',
    source: 'root',
    target: 'level1_cs',
    sourceHandle: 'b',
    targetHandle: 'd',
    type: 'floating',
    markerEnd: { type: MarkerType.ArrowClosed },
  }
];


const FlowContent = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  //  Skill放大置中
  // const { setCenter, getNode } = useReactFlow();
  // useEffect(() => {
  //   // 替換為你想聚焦的 node id，例如 'skill'
  //   const targetNode = getNode('root') as any;
  //   // const targetNode = getNodes().find((n) => n.id === 'skill') as ExtendedNode;

  //   console.log('targetNode', targetNode)
  //   if (targetNode) {
  //     const { x, y, width = 0, height = 0 } = targetNode?.positionAbsolute!;
  //     const centerX = x + width / 2;
  //     const centerY = y + height / 2;

  //     // 聚焦並放大
  //     setCenter(centerX, centerY, {
  //       zoom: 1.5,   // 放大倍率
  //       duration: 800, // 動畫時間 (ms)
  //     });
  //   }
  // }, []);

  // Handling connections manually established by users
  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: 'floating',
            markerEnd: { type: MarkerType.Arrow },
          },
          eds,
        ),
      ),
    [],
  );


  // click event
  const onNodeClick: NodeMouseHandler = useCallback((_, clickedNode) => {
    setNodes((prevNodes) => {
      const node: skilltreeItem = prevNodes.find((n) => n.id === clickedNode.id);
      if (!node) return prevNodes;

      console.log('setNodes expanded', node.expanded);


      // 生成子節點
      let childNodes: skilltreeItem[] = [
        {
          id: `${node.id}-child1`,
          data: { label: `${node.data.label} - 子節點 1` },
          position: { x: node.position.x + 200, y: node.position.y + 50 },
          type: 'default',
          expanded: false,
        },
        {
          id: `${node.id}-child2`,
          data: { label: `${node.data.label} - 子節點 2` },
          position: { x: node.position.x + 200, y: node.position.y + 150 },
          type: 'default',
          expanded: false,
        },
      ];
      if (node.childNodes) {
        childNodes = node.childNodes;
      }


      // console.log('prevNodes',prevNodes)

      // 切換展開/收合狀態
      const updatedNodes = prevNodes.map((n) =>
        n.id === node.id
          ? { ...n, expanded: !node.expanded }  // 切換展開/收合狀態
          : n
      );

      // 根據展開狀態決定顏色
      const updatedNodeColors = updatedNodes.map((n) => ({
        ...n,
        data: {
          ...n.data,
          color: n.expanded ? 'blue' : 'gray',  // 展開為藍色，收合為灰色
        },
      }));

      // 根據節點展開狀態決定是否顯示子節點
      const updatedChildNodes = updatedNodes.some(n => n.id === node.id && n.expanded)
        ? updatedNodes.filter((n) => !n.id.startsWith(`${node.id}-`)) // 若已展開，則刪除子節點
        : [...updatedNodeColors, ...childNodes]; // 若未展開，則添加子節點


      return updatedChildNodes;
    });

    // 更新邊 (在展開時，連接邊)
    setEdges((prevEdges: any[]) => {
      const node: skilltreeItem = prevEdges.find((e: any) => e.source === clickedNode.id || e.target === clickedNode.id);

      console.log('setEdges node', node)
      console.log('setEdges clickedNode', clickedNode)

      // 如果節點已經展開，則新增邊，否則刪除邊
      let edgesToAdd = [
        {
          id: `e-${clickedNode.id}-child1`,
          source: clickedNode.id,
          target: `${clickedNode.id}-child1`
        },
        {
          id: `e-${clickedNode.id}-child2`,
          source: clickedNode.id,
          target: `${clickedNode.id}-child2`
        },
      ];

    //   [
    //     {
    //         "id": "e-level1_art-child1",
    //         "source": "level1_art",
    //         "target": "level1_art-child1"
    //     },
    //     {
    //         "id": "e-level1_art-child2",
    //         "source": "level1_art",
    //         "target": "level1_art-child2"
    //     }
    // ]

      // "level1_cs"
      if (node.childNodes) {
        edgesToAdd = [
          {
            id: 'e-level1_cs-child1',
            source: 'level1_cs',
            target: 'level1_cs-child1'
          },
          {
            id: 'e-level1_cs-child2',
            source: 'level1_cs',
            target: 'level1_cs-child2'
          },
        ];
      }

      console.log('edgesToAdd',edgesToAdd)
      console.log('-----------')


      // 根據父節點的狀態來決定是否更新邊
      const updatedEdges = node?.expanded
        ? prevEdges.filter((e: any) => !e.source.startsWith(`${clickedNode.id}-`)) // 如果節點收合，則刪除邊
        : [...prevEdges, ...edgesToAdd]; // 如果節點展開，則新增邊

      return updatedEdges;
    });
  }, []);


  return (
    // <div style={{ width: '100%', height: '100vh' }}>
    //   <ReactFlowProvider>
    <ReactFlow
      nodes={nodes}
      edges={edges}
      edgeTypes={edgeTypes}
      nodeTypes={nodeTypes}
      fitView
      fitViewOptions={fitViewOptions}
      connectionMode={ConnectionMode.Loose}

      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onNodeClick={onNodeClick}
    // nodesDraggable={false}
    >
    </ReactFlow>
    //   </ReactFlowProvider>
    // </div>
  );
};


export default function MindMapView() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <FlowContent />
      {/* <ReactFlowProvider>
      </ReactFlowProvider> */}
    </div>
  );
}