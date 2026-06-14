import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Dot = styled(motion.div)`
  position: fixed; top: 0; left: 0; width: 16px; height: 16px;
  background-color: white; border-radius: 50%; pointer-events: none;
  z-index: 99999; mix-blend-mode: difference;
  
  /* Hides the cursor on phones/tablets */
  @media (pointer: coarse) { display: none; }
`;

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updateMouse = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', updateMouse);
    return () => window.removeEventListener('mousemove', updateMouse);
  }, []);

  return (
    <Dot
      animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
      transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
    />
  );
};

export default Cursor;