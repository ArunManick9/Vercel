import React, { useState } from 'react';
import { InfoCard } from '../components/common/InfoCard';
import { 
    marketLandscapeData,
    keyPlayersData,
    marketApproachesData,
    resources,
    researchTabs,
    ResearchTab
} from '../data/researchData';

export const ResearchView: React.FC = () => {
    const [activeTab, setActiveTab] = useState<ResearchTab>('Market Landscape');
    const [selectedResource, setSelectedResource] = useState<string | null>(null);

    const renderContent = () => {
        switch (activeTab) {
            case 'Market Landscape':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 p-4">
                        {marketLandscapeData.map((card, index) => (
                            <InfoCard key={index} title={card.title} color={card.color} rotation={card.rotation}>
                                <ul className="list-disc list-inside space-y-2">
                                    {card.content.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }}></li>)}
                                </ul>
                            </InfoCard>
                        ))}
                    </div>
                );
            case 'Key Players':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 p-4">
                        {keyPlayersData.map((card, index) => (
                            <InfoCard key={index} title={card.title} color={card.color} rotation={card.rotation}>
                                <ul className="list-disc list-inside space-y-2">
                                    {card.content.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }}></li>)}
                                </ul>
                            </InfoCard>
                        ))}
                    </div>
                );
            case 'Market Capturing Approaches':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 p-4">
                        {marketApproachesData.map((card, index) => (
                            <InfoCard key={index} title={card.title} color={card.color} rotation={card.rotation}>
                                <ul className="list-disc list-inside space-y-2">
                                    {card.content.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }}></li>)}
                                </ul>
                            </InfoCard>
                        ))}
                    </div>
                );
            case 'Resources':
                return (
                    <div className="space-y-6 p-2">
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                           <h3 className="text-xl font-semibold text-gray-800 mb-3">Resource Links</h3>
                           <p className="text-sm text-gray-500 mb-4">Click a link to view its content below. Note: Some sites may prevent embedding due to security policies.</p>
                           <ul className="space-y-2">
                               {resources.map((resource) => (
                                   <li key={resource.url}>
                                       <a 
                                         href={resource.url} 
                                         onClick={(e) => {
                                             e.preventDefault();
                                             setSelectedResource(resource.url);
                                         }}
                                         className={`block p-2.5 rounded-md text-sm font-medium transition-colors ${selectedResource === resource.url ? 'bg-rose-50 text-rose-700' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
                                        >
                                           {resource.title}
                                       </a>
                                   </li>
                               ))}
                           </ul>
                        </div>
                        <div className="bg-white rounded-lg border border-gray-200 shadow-sm aspect-video">
                            {selectedResource ? (
                                <iframe 
                                    src={selectedResource}
                                    title="Resource Viewer" 
                                    className="w-full h-full rounded-lg"
                                    sandbox="allow-scripts allow-same-origin"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-500">
                                    <p>Select a resource from the list above to view it here.</p>
                                </div>
                            )}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="max-w-7xl mx-auto">
            <div className="border-b border-gray-200 mb-6">
                <nav className="-mb-px flex space-x-6 overflow-x-auto" aria-label="Tabs">
                    {researchTabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => {
                                setActiveTab(tab);
                                setSelectedResource(null); // Reset resource view on tab change
                            }}
                            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors
                                ${activeTab === tab 
                                    ? 'border-rose-500 text-rose-600' 
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }
                            `}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>
            
            <div className="animate-fade-in" key={activeTab}>
                {renderContent()}
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
};
