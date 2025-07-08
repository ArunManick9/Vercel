
import React from 'react';

const RocketIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-cyan-400">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.11.66-1.79 1.6-3.83 2.81-5.63A2 2 0 0 1 12.5 6h.01c.63.01 1.2.29 1.6.76.43.51.68 1.17.6 1.84-.1 1.02-.62 2.1-1.44 3.08-1.45 1.73-3.13 3.42-4.48 4.82-.67.7-1.71 1.13-2.7 1.13-.01 0-.01 0 0 0z"></path>
        <path d="m21.15 3.35-1.1 1.1"></path>
        <path d="m18 6-1.1 1.1"></path>
        <path d="M9 12.5c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z"></path>
        <path d="M11 10.5c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z"></path>
    </svg>
);

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-green-400">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

export const Hero: React.FC = () => {
    return (
        <div className="w-full max-w-2xl text-center">
             <div className="inline-flex items-center justify-center p-3 bg-slate-800 rounded-full mb-6 border border-slate-700">
                <RocketIcon />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 mb-4">
                Ready for Liftoff
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto mb-8">
                This is a fully-configured, production-ready React starter kit. Just clone, code, and deploy to Vercel in seconds.
            </p>

            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 max-w-md mx-auto text-left">
                <h3 className="font-bold text-slate-200 mb-4">Features Included:</h3>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                        <CheckIcon />
                        <span className="text-slate-300">React 18 + TypeScript</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <CheckIcon />
                        <span className="text-slate-300">Vite for blazing fast development</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <CheckIcon />
                        <span className="text-slate-300">Tailwind CSS for styling</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <CheckIcon />
                        <span className="text-slate-300">Vercel deployment configuration</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};
