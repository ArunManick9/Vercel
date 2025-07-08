
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full p-4 mt-8 border-t border-slate-700">
      <div className="container mx-auto text-center text-sm text-slate-500">
        <p>Built with ❤️ using React, Vite, and Tailwind CSS.</p>
        <p>Ready to deploy on <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">Vercel</a>.</p>
      </div>
    </footer>
  );
};
