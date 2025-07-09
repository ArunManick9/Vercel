import React from 'react';
import { linkData } from '../data/linksData';
import { LinkCard } from '../components/common/LinkCard';

export const LinksView: React.FC = () => (
    <div className="p-4 sm:p-6 bg-gray-50/50 rounded-lg animate-fade-in space-y-8">
        <div className="text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Product & Environment Links</h2>
            <p className="text-lg text-gray-600">
                Direct links to the production and testing environments for Vitos.
            </p>
        </div>

        <div className="space-y-10">
            <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">Production Environments</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {linkData.production.map(link => (
                        <LinkCard key={link.url} title={link.title} url={link.url} />
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">Testing Environments</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {linkData.testing.map(link => (
                        <LinkCard key={link.url} title={link.title} url={link.url} />
                    ))}
                </div>
            </div>
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
