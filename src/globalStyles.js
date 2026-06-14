import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box; }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background-color: #000;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    overflow: hidden; /* Prevents desktop from scrolling */
    cursor: none; /* We will use our custom cursor */
  }

  /* Custom Scrollbar for the Modal */
  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.2); border-radius: 10px; }
`;

export default GlobalStyles;