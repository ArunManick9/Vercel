import React from 'react';

export const InfoCard = ({ title, children, color, rotation }: { title: string, children: React.ReactNode, color: string, rotation: string }) => (
    <div className={`p-6 rounded-lg shadow-lg transform ${color} ${rotation} transition-transform hover:scale-105 hover:rotate-0 flex flex-col`}>
        <h3 className="text-xl font-bold text-gray-800 border-b-2 border-gray-400/50 pb-2 mb-4">{title}</h3>
        <div className="space-y-3 text-gray-700 flex-grow">
            {children}
        </div>
    </div>
);
