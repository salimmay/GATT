# 💻 macOS-Style Interactive Portfolio

> A highly interactive, desktop-simulation portfolio built for **Aziz Gattoussi** (UI/UX & Motion Graphic Designer). 

This project moves away from traditional grid-based portfolios, offering visitors a playful, immersive "operating system" experience right in their browser. Built entirely with modern React and Framer Motion, it features draggable desktop files, a functional dock, and editorial-style case study windows.

---

## ✨ Key Features

*   **🚀 Skeuomorphic Boot Sequence:** A realistic macOS-style startup screen featuring a custom monogram and animated progress bar.
*   **🖱️ Draggable Desktop Icons:** Projects are represented as desktop files that visitors can freely drag and drop around the screen using spring-physics.
*   **📱 Editorial Case Studies:** Clicking an icon opens a macOS-style window modal. Content is rendered using a dynamic layout engine (supporting full-width, half-left, and center-narrow editorial blocks).
*   **✨ Custom Interactive Cursor:** A sleek, physics-based custom cursor that inverts colors automatically based on the background.
*   **⚡ Live Menu Bar:** A frosted-glass top menu bar featuring a real-time, ticking clock.
*   **🪟 Functional Dock:** A bottom app launcher with magnification hover effects, linking to socials and a dedicated "About Me / CV" notes app.

---

## 🛠️ Tech Stack

This project is built purely on the Frontend for maximum speed, security, and zero-cost hosting.

*   **Core:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
*   **Styling:** [Styled-Components](https://styled-components.com/) (CSS-in-JS)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) (FontAwesome)

---

## 📦 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

    Navigate to the directory:
    code Bash

    cd YOUR_REPO_NAME

    Install dependencies:
    code Bash

    npm install

    Start the development server:
    code Bash

    npm run dev

    Open http://localhost:5173 in your browser.

✏️ How to Update Content (Headless CMS)

This project operates without a database. All content, layouts, and desktop icon placements are managed via a single "Single Source of Truth" data file.

To add a new project or change an image:

    Place your images/videos inside the src/assets/ folder.

    Open src/data/portfolioData.jsx.

    Add a new object to the desktopItems array, defining the X/Y coordinates for the desktop icon and the editorial blocks for the case study.

code JavaScript

// Example Block Layout
sections: [
  { type: 'text', layout: 'center-narrow', content: "Project description..." },
  { type: 'image', layout: 'half-left', content: "/assets/image1.jpg" },
  { type: 'image', layout: 'half-right', content: "/assets/image2.jpg" }
]

🚀 Deployment

This project is optimized to be deployed instantly on Vercel or Netlify.
Simply link your GitHub repository to Vercel, and it will automatically build and deploy your site to a live .com domain every time you push to the main branch.

Designed & Developed by Aziz Gattoussi.
code Code

### Next Steps:
1. Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` in the "How to Run Locally" section with your actual GitHub info.
2. Save the file.
3. Run these quick commands in your terminal to push the shiny new README up to GitHub:
   ```bash
   git add README.md
   git commit -m "📝 Added premium README documentation"
   git push