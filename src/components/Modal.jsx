import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Modal = ({ item, onClose }) => {
  return (
    <Overlay initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      {/* e.stopPropagation() prevents clicking inside the window from closing it */}
      <Window onClick={e => e.stopPropagation()} initial={{ opacity: 0, scale: 0.95, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 30 }} transition={{ type: 'spring', damping: 25, stiffness: 300 }}>
        
        <TitleBar>
          <div className="dots">
            <span className="red" onClick={onClose}/>
            <span className="yellow"/><span className="green"/>
          </div>
          <div className="title">Gatt://case-study/{item.id}</div>
        </TitleBar>

        <Content>
          <Header>
            <div className="cat">{item.category}</div>
            <h1>{item.title}</h1>
            <div className="sub">{item.subtitle}</div>
          </Header>

          {/* DYNAMIC EDITORIAL GRID */}
          <Grid>
            {item.sections?.map(sec => (
              <div key={sec.id} className={`layout-${sec.layout}`}>
                {sec.type === 'text' && <p className="text-content">{sec.content}</p>}
                {sec.type === 'image' && <img src={sec.content} className="media-content" alt="" />}
              </div>
            ))}
          </Grid>
        </Content>

      </Window>
    </Overlay>
  );
};

// --- STYLES ---
const Overlay = styled(motion.div)`
  position: fixed; inset: 0; background: rgba(0,0,0,0.6); backdrop-filter: blur(12px); z-index: 1000;
  display: flex; align-items: center; justify-content: center; padding: 20px;
`;
const Window = styled(motion.div)`
  width: 100%; max-width: 950px; height: 85vh; background: #fff; border-radius: 16px;
  box-shadow: 0 40px 100px rgba(0,0,0,0.5); display: flex; flex-direction: column; overflow: hidden;
  cursor: auto; /* Restores normal cursor inside the case study */
`;
const TitleBar = styled.div`
  background: #f1f1f1; height: 38px; border-bottom: 1px solid #ddd; display: flex; align-items: center; padding: 0 16px;
  .dots { display: flex; gap: 8px; span { width: 12px; height: 12px; border-radius: 50%; }
    .red { background: #ff5f56; cursor: pointer; &:hover{filter: brightness(0.8);} } .yellow { background: #ffbd2e; } .green { background: #27c93f; }
  }
  .title { position: absolute; left: 50%; transform: translateX(-50%); font-size: 11px; font-weight: bold; color: #888; font-family: monospace; letter-spacing: 1px; }
`;
const Content = styled.div`
  flex: 1; overflow-y: auto; padding: 80px 10%; color: #111;
`;
const Header = styled.div`
  text-align: center; margin-bottom: 80px;
  .cat { color: #3b82f6; font-size: 13px; font-weight: 900; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 15px;}
  h1 { font-size: clamp(40px, 5vw, 70px); font-weight: 900; margin: 0; line-height: 1; letter-spacing: -2px; }
  .sub { font-size: 22px; color: #666; font-weight: 500; margin-top: 15px;}
`;
const Grid = styled.div`
  display: flex; flex-wrap: wrap; gap: 40px;
  
  /* EDITORIAL LAYOUT LOGIC */
  .layout-full { width: 100%; }
  .layout-half-left, .layout-half-right { width: calc(50% - 20px); }
  .layout-center-narrow { width: 70%; margin: 0 auto; text-align: center; }
  
  .text-content { font-size: 20px; line-height: 1.6; color: #333; }
  .layout-center-narrow .text-content { font-size: 28px; font-style: italic; color: #111; }
  .media-content { width: 100%; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.08); display: block; }
`;

export default Modal;