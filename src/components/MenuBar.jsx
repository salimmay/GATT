import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Wifi, BatteryMedium, Search } from 'lucide-react';

const MenuBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the clock every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  // Format the date/time (e.g., "Sun Jun 14 2:15 PM")
  const formattedTime = currentTime.toLocaleDateString('en-US', { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric' 
  }) + ' ' + currentTime.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit' 
  });

  return (
    <BarWrapper>
      <LeftSection>
        <BrandLogo>Gatt</BrandLogo>
        <MenuItem>File</MenuItem>
        <MenuItem>Edit</MenuItem>
        <MenuItem>View</MenuItem>
        <MenuItem>Go</MenuItem>
        <MenuItem>Window</MenuItem>
        <MenuItem>Help</MenuItem>
      </LeftSection>

      <RightSection>
        <IconWrapper><Search size={14} strokeWidth={2.5} /></IconWrapper>
        <IconWrapper><Wifi size={14} strokeWidth={2.5} /></IconWrapper>
        <IconWrapper><BatteryMedium size={14} strokeWidth={2.5} /></IconWrapper>
        <TimeDisplay>{formattedTime}</TimeDisplay>
      </RightSection>
    </BarWrapper>
  );
};

// --- STYLES ---

const BarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 28px;
  background: rgba(0, 0, 0, 0.2); /* Dark frosted glass */
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  z-index: 9999; /* Stays above absolutely everything */
  color: white;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.3px;
  
  /* Hide the menu bar on mobile devices to save screen space */
  @media (max-width: 768px) {
    display: none;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const BrandLogo = styled.div`
  font-weight: 800;
  cursor: pointer;
  padding: 0 4px;
  &:hover { opacity: 0.8; }
`;

const MenuItem = styled.div`
  cursor: pointer;
  padding: 0 4px;
  &:hover { opacity: 0.8; }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover { opacity: 0.8; }
`;

const TimeDisplay = styled.div`
  cursor: pointer;
  padding-left: 4px;
  &:hover { opacity: 0.8; }
`;

export default MenuBar;