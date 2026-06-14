import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { dockItems } from '../data/portfolioData';

const DockWrapper = styled(motion.div)`
  position: fixed; 
  bottom: 20px; 
  left: 50%; 
  /* Note: x translation is handled by Framer Motion below */
  display: flex; 
  gap: 12px; 
  padding: 12px 16px; 
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.15); 
  backdrop-filter: blur(24px); 
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.3); 
  z-index: 100; 
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`;

const AppIcon = styled(motion.div)`
  position: relative; 
  width: 54px; 
  height: 54px; 
  border-radius: 14px;
  background: linear-gradient(135deg, #1e293b, #0f172a); 
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex; 
  align-items: center; 
  justify-content: center; 
  cursor: pointer;
`;

const Tooltip = styled(motion.div)`
  position: absolute; 
  top: -45px; 
  background: rgba(0, 0, 0, 0.8); 
  color: white; 
  padding: 6px 12px;
  border-radius: 8px; 
  font-size: 11px; 
  font-weight: bold; 
  letter-spacing: 0.5px; 
  white-space: nowrap; 
  pointer-events: none;
`;

const Dock = ({ onOpenCv }) => {
  const [hovered, setHovered] = useState(null);

  const handleClick = (item) => {
    if (item.action === 'open-cv') {
      onOpenCv();
    } else if (item.url) {
      window.open(item.url, '_blank');
    }
  };

  return (
    <DockWrapper
      // Entrance animation: Slides up from the bottom when the boot screen finishes
      initial={{ y: 150, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ type: 'spring', damping: 25, stiffness: 200, delay: 0.2 }}
    >
      {dockItems.map(item => (
        <AppIcon 
          key={item.id} 
          onClick={() => handleClick(item)}
          onMouseEnter={() => setHovered(item.id)} 
          onMouseLeave={() => setHovered(null)}
          whileHover={{ scale: 1.25, y: -10 }} 
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence>
            {hovered === item.id && (
              <Tooltip 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: 5 }}
              >
                {item.label}
              </Tooltip>
            )}
          </AnimatePresence>
          {item.icon}
        </AppIcon>
      ))}
    </DockWrapper>
  );
};

export default Dock;