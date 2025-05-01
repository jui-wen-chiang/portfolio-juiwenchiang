
import { memo } from 'react';
import { Handle, Position, NodeProps } from '@xyflow/react';
// memo is a Higher Order Component, used to make the function component remember the last output and skip re-rendering if the props have not changed.

import { Container, Box } from 'src/components/mui/components';


const CustomNode = ({ data }: NodeProps) => {
  return (
    <Container sx={{ width: '10rem' }}>
      <Box>{(data as any).label}</Box>
      <Handle type="source" position={Position.Top} id="a" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="source" position={Position.Right} id="b" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="source" position={Position.Bottom} id="c" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="source" position={Position.Left} id="d" style={{ opacity: 0, pointerEvents: 'none' }} />
    </Container>
  );
};

export default memo(CustomNode);