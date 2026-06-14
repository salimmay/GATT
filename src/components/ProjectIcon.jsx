import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  position: absolute;
  top: ${props => props.$top}; left: ${props => props.$left};
  transform: translate(-50%, -50%); z-index: 10;

  @media (max-width: 768px) {
    position: relative; top: auto; left: auto; transform: none;
    display: flex; justify-content: center;
  }
`;

const IconContainer = styled(motion.div)`
  display: flex; flex-direction: column; align-items: center; gap: 8px; cursor: pointer;
`;

const Thumbnail = styled.div`
  width: 75px; height: 75px; border-radius: 14px;
  background-image: url(${props => props.$bg});
  background-size: cover; background-position: center;
  box-shadow: 0 8px 20px rgba(0,0,0,0.5);
  border: 1px solid rgba(255,255,255,0.15);
  
  /* Prevents the image ghosting effect when dragging */
  user-drag: none; 
  -webkit-user-drag: none;
`;

const Label = styled.span`
  color: white; font-size: 11px; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.5px; text-align: center;
  max-width: 90px; line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,0.9);
`;

const ProjectIcon = ({ item, onClick }) => {
  return (
    <Wrapper $top={item.position.top} $left={item.position.left}>
      <IconContainer 
        // --- THE MAGIC DRAG PROPERTIES ---
        drag 
        dragMomentum={false} // Stops exactly where you drop it
        dragElastic={0}      // Removes the "bouncy" resistance
        
        // Animations
        whileHover={{ scale: 1.15 }} 
        whileTap={{ scale: 1.05, opacity: 0.8 }} // Squishes slightly when grabbed
        onClick={onClick}
      >
        <Thumbnail $bg={item.thumbnail} />
        <Label>{item.title}</Label>
      </IconContainer>
    </Wrapper>
  );
};

export default ProjectIcon;