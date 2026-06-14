import React from 'react';
import { Mail, FileText } from 'lucide-react'; 
import { FaFigma, FaInstagram } from 'react-icons/fa'; 

const placeholder = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500&auto=format&fit=crop";

export const desktopItems = [
  {
    id: 'stage-visuals',
    title: 'Stage Visuals',
    subtitle: 'Various Artists',
    category: 'Experience',
    thumbnail: placeholder,
    position: { top: '25%', left: '35%' }, 
    sections: [
      {
        id: '1',
        type: 'text',
        layout: 'center-narrow',
        content: "My animations made it beyond the computer screen and became part of live shows for artists like Kacperczyk, Fukaj, and Szaran."
      },
      {
        id: '2',
        type: 'image',
        layout: 'full',
        content: placeholder 
      },
      {
        id: '3',
        type: 'text',
        layout: 'half-left',
        content: "Stuff I was grinding out on my laptop ended up on big stages — during concert tours, Open'er, SBM FFestival, and more."
      },
      {
        id: '4',
        type: 'image',
        layout: 'half-right',
        content: placeholder
      }
    ]
  },
  {
    id: 'freelance-brand',
    title: 'Brand Identity',
    subtitle: 'Nike',
    category: 'Commercial',
    thumbnail: placeholder,
    position: { top: '60%', left: '65%' },
    sections: [
      { id: '1', type: 'text', layout: 'full', content: "Complete brand overhaul including typography, colors, and motion guidelines." }
    ]
  }
];

export const dockItems = [
  { id: 'cv', label: 'About Me', icon: <FileText size={28} color="#fff" />, action: 'open-cv' },
  { id: 'figma', label: 'Figma', icon: <FaFigma size={28} color="#fff" />, url: null },
  { id: 'ig', label: 'Instagram', icon: <FaInstagram size={28} color="#fff" />, url: 'https://www.instagram.com/notyourtypical.designer/' },
  { id: 'mail', label: 'Email', icon: <Mail size={28} color="#fff" />, url: 'mailto:azizgattoussi@gmail.com' },
];