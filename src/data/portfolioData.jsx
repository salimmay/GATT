import { Mail, FileText } from 'lucide-react'; 
import { FaFigma, FaInstagram } from 'react-icons/fa'; 

const mockImages = {
  purple: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=900&auto=format&fit=crop",
  orange: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=900&auto=format&fit=crop",
  blue: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=900&auto=format&fit=crop",
};

export const desktopItems = [
  {
    id: 'lumen-campaign',
    title: 'Lumen Campaign',
    subtitle: 'Fictional Studio',
    category: 'Experience',
    thumbnail: mockImages.purple,
    position: { top: '25%', left: '35%' },
    sections: [
      {
        id: '1',
        type: 'text',
        layout: 'center-narrow',
        content: 'A fictional visual system for Lumen, an imagined creative studio exploring light, movement, and digital atmosphere.'
      },
      { id: '2', type: 'image', layout: 'full', content: mockImages.blue },
      {
        id: '3',
        type: 'text',
        layout: 'half-left',
        content: 'The concept brings a flexible identity to launch moments, social stories, and immersive screens.'
      },
      { id: '4', type: 'image', layout: 'half-right', content: mockImages.orange }
    ]
  },
  {
    id: 'orbit-brand',
    title: 'Orbit Identity',
    subtitle: 'Concept Project',
    category: 'Commercial',
    thumbnail: mockImages.orange,
    position: { top: '60%', left: '65%' },
    sections: [
      { id: '1', type: 'text', layout: 'full', content: 'A fictional brand identity built around bold typography, warm color, and a modular motion language.' }
    ]
  }
];

export const dockItems = [
  { id: 'cv', label: 'About Me', icon: <FileText size={28} color="#fff" />, action: 'open-cv' },
  { id: 'figma', label: 'Figma', icon: <FaFigma size={28} color="#fff" />, url: null },
  { id: 'ig', label: 'Instagram', icon: <FaInstagram size={28} color="#fff" />, url: null },
  { id: 'mail', label: 'Email', icon: <Mail size={28} color="#fff" />, url: 'mailto:hello@example.com' },
];
