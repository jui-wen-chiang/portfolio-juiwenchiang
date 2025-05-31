import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// import 'src/assets/styles/components/MouseGlow.css;
import 'src/assets/styles/components/MouseGlow.css';

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="mouse-glow-wrapper"
      // animate={{ x: pos.x - 100, y: pos.y - 100 }}
      animate={{ x: pos.x, y: pos.y }}

      // transition={{ type: 'spring', stiffness: 100, damping: 20 }} 
      transition={{ type: 'spring', stiffness: 20, damping: 10 }}

    >
      <div className="mouse-glow-circle" />
    </motion.div>
  );
}
