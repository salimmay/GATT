import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const CvModal = ({ onClose }) => {
  const skills = [
    "Anything", "Art Direction", "Creative Direction", 
    "Artwork (album covers, merch, posters, packaging design)", 
    "Key Visual design (artist, tour, brand, album, festival)",
    "EP, single covers", "Stage visuals", "Motion Design",
    "Logotypes", "Photography", "Fonts", "Posters", "Web",
    "Clothing design", "Social media design", 
    "Indirect collaboration with Spotify",
    "Event materials and visual design", "Social media content"
  ];

  return (
    <Overlay initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <Window onClick={e => e.stopPropagation()} initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ type: 'spring', damping: 25, stiffness: 300 }}>
        
        <TitleBar>
          <div className="dots">
            <span className="red" onClick={onClose}/>
            <span className="yellow"/><span className="green"/>
          </div>
          <div className="title">Information about: Miłosz Chudy, Gatt@gmail.com</div>
        </TitleBar>

        <Body>
          {/* LEFT SIDEBAR */}
          <Sidebar>
            <div className="sidebar-item active">
              <span>About me</span> <span className="count">18</span>
            </div>
            <div className="sidebar-item">
              <span>CV</span> <span className="count">48</span>
            </div>
            <div className="divider"></div>
            <div className="sidebar-item">
              <span>Interests</span> <span className="count">∞</span>
            </div>
          </Sidebar>

          {/* RIGHT CONTENT */}
          <Content>
            <p className="intro">
              Art Director, Graphic Designer, Photographer, and even Stylist sometimes, but honestly, I do way more than that... To put it simply, I bring ideas to life through visuals and manage everything that makes a project come together in the end.
            </p>
            
            <h3 className="section-title">I can do...</h3>
            
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index}>
                  <FaCheckCircle className="check-icon" />
                  {skill}
                </li>
              ))}
            </ul>
          </Content>
        </Body>

      </Window>
    </Overlay>
  );
};

// --- STYLES ---
const Overlay = styled(motion.div)`
  position: fixed; inset: 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(8px); z-index: 10000;
  display: flex; align-items: center; justify-content: center; padding: 20px;
`;
const Window = styled(motion.div)`
  width: 100%; max-width: 900px; height: 75vh; background: #fff; border-radius: 12px;
  box-shadow: 0 40px 100px rgba(0,0,0,0.5); display: flex; flex-direction: column; overflow: hidden;
  border: 1px solid rgba(0,0,0,0.1); cursor: auto; color: #000;
`;
const TitleBar = styled.div`
  background: #fdfdfd; height: 44px; border-bottom: 1px solid #e0e0e0; display: flex; align-items: center; padding: 0 16px;
  .dots { display: flex; gap: 8px; span { width: 12px; height: 12px; border-radius: 50%; }
    .red { background: #ff5f56; cursor: pointer; &:hover{filter: brightness(0.8);} } .yellow { background: #ffbd2e; } .green { background: #27c93f; }
  }
  .title { position: absolute; left: 50%; transform: translateX(-50%); font-size: 13px; font-weight: 700; color: #333; }
`;
const Body = styled.div`
  display: flex; flex: 1; overflow: hidden;
`;
const Sidebar = styled.div`
  width: 220px; background: #f5f5f5; border-right: 1px solid #e0e0e0; padding: 15px 10px; flex-shrink: 0;
  
  .sidebar-item {
    display: flex; justify-content: space-between; align-items: center; padding: 8px 12px;
    border-radius: 6px; font-size: 14px; font-weight: 600; color: #333; cursor: pointer; margin-bottom: 2px;
    
    .count { color: #888; font-weight: 500; font-size: 13px; }
    
    &:hover { background: #ebebeb; }
    &.active { background: #e0e0e0; }
  }
  
  .divider { height: 1px; background: #e0e0e0; margin: 10px 0; }
`;
const Content = styled.div`
  flex: 1; padding: 30px 40px; overflow-y: auto; background: #ffffff;
  
  .intro { font-size: 15px; font-weight: 700; line-height: 1.5; margin-bottom: 25px; color: #000; }
  .section-title { font-size: 15px; font-weight: 700; margin-bottom: 15px; color: #000; }
  
  .skills-list {
    list-style: none; padding: 0; margin: 0;
    li {
      display: flex; align-items: flex-start; gap: 10px; font-size: 14px; font-weight: 700; color: #000; margin-bottom: 8px; line-height: 1.4;
      
      .check-icon { color: #facc15; font-size: 16px; flex-shrink: 0; margin-top: 2px; }
    }
  }
`;

export default CvModal;