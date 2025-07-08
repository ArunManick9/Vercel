
import React from 'react';

// A simple SVG logo for React
const ReactLogo: React.FC = () => (
  <svg className="w-8 h-8 text-cyan-400" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

export const Header: React.FC = () => {
  return (
    <header className="w-full p-4 border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ReactLogo />
          <span className="text-xl font-bold text-slate-200">React Vercel Starter</span>
        </div>
        <a 
          href="https://vercel.com/new" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm font-semibold text-slate-900 bg-white rounded-md hover:bg-slate-200 transition-colors"
        >
          Deploy
        </a>
      </div>
    </header>
  );
};
