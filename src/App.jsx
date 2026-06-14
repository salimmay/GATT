import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';

// Import Data & Components
import { desktopItems } from './data/portfolioData';
import Cursor from './components/Cursor';
import MenuBar from './components/MenuBar';
import BootScreen from './components/BootScreen';
import Dock from './components/Dock';
import ProjectIcon from './components/ProjectIcon';
import Modal from './components/Modal';
import CvModal from './components/CvModal';

// --- STYLED COMPONENTS ---

const BackgroundLayer = styled.div`
  position: absolute; 
  inset: 0; 
  z-index: -1;
  /* You can change this URL to any wallpaper you like */
  background-image: url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop');
  background-size: cover; 
  background-position: center;
  filter: blur(15px) brightness(0.85); 
  transform: scale(1.05);
`;

const DesktopCanvas = styled.div`
  position: absolute; 
  inset: 0; 
  width: 100%; 
  height: 100%;
  
  /* On mobile, this turns into a neat scrollable grid instead of absolute positioning */
  @media (max-width: 768px) {
    position: relative; 
    display: grid; 
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 10px; 
    padding: 60px 20px 150px; 
    overflow-y: auto;
  }
`;

// --- MAIN COMPONENT ---

function App() {
  // Application State
  const [isBooting, setIsBooting] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <>
      <Cursor />
      
      {/* 1. BOOT SEQUENCE */}
      <AnimatePresence>
        {isBooting && <BootScreen onComplete={() => setIsBooting(false)} />}
      </AnimatePresence>

      {/* 2. STATIC DESKTOP UI */}
      <MenuBar />
      <BackgroundLayer />
      
      {/* 3. DESKTOP ICONS (Rendered only after boot finishes) */}
      <DesktopCanvas>
        {!isBooting && desktopItems.map((item, index) => (
          <ProjectIcon 
            key={item.id} 
            item={item} 
            delay={index * 0.15} // Staggers the pop-in animation
            onClick={() => setSelectedProject(item)} 
          />
        ))}
      </DesktopCanvas>

      {/* 4. THE DOCK (Rendered only after boot finishes) */}
      {!isBooting && <Dock onOpenCv={() => setIsCvOpen(true)} />}

      {/* 5. WINDOW MODALS */}
      <AnimatePresence>
        {selectedProject && (
          <Modal 
            item={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
        
        {isCvOpen && (
          <CvModal 
            onClose={() => setIsCvOpen(false)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;