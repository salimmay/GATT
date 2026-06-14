import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BootScreen = ({ onComplete }) => {
  useEffect(() => {
    // The boot sequence lasts exactly 2.5 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <Container
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }} // Fades out and zooms slightly
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <LogoWrapper>
        <Monogram>AG</Monogram>
        <ProgressBarContainer>
          <ProgressBar
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
          />
        </ProgressBarContainer>
      </LogoWrapper>
    </Container>
  );
};

// --- STYLES ---

const Container = styled(motion.div)`
  position: fixed; inset: 0; background: #000; 
  /* Sits above everything except the custom cursor */
  z-index: 99990; 
  display: flex; align-items: center; justify-content: center;
`;

const LogoWrapper = styled.div`
  display: flex; flex-direction: column; align-items: center; gap: 50px;
`;

const Monogram = styled.div`
  font-size: 80px; font-weight: 800; letter-spacing: -3px;
  /* Premium metallic silver text effect */
  background: linear-gradient(135deg, #ffffff 0%, #777777 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProgressBarContainer = styled.div`
  width: 220px; height: 5px; background: #333;
  border-radius: 6px; overflow: hidden;
`;

const ProgressBar = styled(motion.div)`
  height: 100%; background: #fff; border-radius: 6px;
`;

export default BootScreen;