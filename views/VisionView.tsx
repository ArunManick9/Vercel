import React from 'react';
import { visionPoints } from '../data/visionData';

export const VisionView: React.FC = () => (
    <div className="p-4 sm:p-6 bg-white rounded-lg border border-gray-200 shadow-sm animate-fade-in space-y-8">
        <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Vision for Vitos</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
                Vitos holds a long-term vision of offering multiple AI-powered applications and utilities to businesses, empowering them with intelligent, automated solutions.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            {visionPoints.map(point => (
                <div key={point.title} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 bg-rose-100 p-3 rounded-full">
                        {point.icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-1">{point.title}</h3>
                        <p className="text-gray-600">{point.description}</p>
                    </div>
                </div>
            ))}
        </div>
         <style>{`
            @keyframes fade-in {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in { animation: fade-in 0.4s ease-out forwards; }
        `}</style>
    </div>
);
