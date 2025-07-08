import React, { useState, useEffect } from 'react';

type ResourceLink = {
  title: string;
  url: string;
};

const LightbulbIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

const LinkIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.536a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
);

const TrashIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);

const PlusIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
);

export const ResearchSection: React.FC = () => {
    const [points, setPoints] = useState<string[]>([]);
    const [newPoint, setNewPoint] = useState('');
    const [resources, setResources] = useState<ResourceLink[]>([]);
    const [newResourceTitle, setNewResourceTitle] = useState('');
    const [newResourceUrl, setNewResourceUrl] = useState('');
    const [showResources, setShowResources] = useState(false);

    useEffect(() => {
        try {
            const storedPoints = localStorage.getItem('researchPoints');
            if (storedPoints) setPoints(JSON.parse(storedPoints));

            const storedResources = localStorage.getItem('researchResources');
            if (storedResources) setResources(JSON.parse(storedResources));
        } catch (error) {
            console.error("Failed to initialize from localStorage", error);
        }
    }, []);

    const handleAddPoint = (e: React.FormEvent) => {
        e.preventDefault();
        if (newPoint.trim()) {
            const updatedPoints = [...points, newPoint.trim()];
            setPoints(updatedPoints);
            localStorage.setItem('researchPoints', JSON.stringify(updatedPoints));
            setNewPoint('');
        }
    };
    
    const handleDeletePoint = (indexToDelete: number) => {
        const updatedPoints = points.filter((_, index) => index !== indexToDelete);
        setPoints(updatedPoints);
        localStorage.setItem('researchPoints', JSON.stringify(updatedPoints));
    };

    const handleAddResource = (e: React.FormEvent) => {
        e.preventDefault();
        if (newResourceTitle.trim() && newResourceUrl.trim()) {
            try {
                let url = newResourceUrl.trim();
                if (!/^https?:\/\//i.test(url)) {
                    url = 'https://' + url;
                }
                new URL(url); // This will throw if invalid
                const updatedResources = [...resources, { title: newResourceTitle.trim(), url }];
                setResources(updatedResources);
                localStorage.setItem('researchResources', JSON.stringify(updatedResources));
                setNewResourceTitle('');
                setNewResourceUrl('');
            } catch (error) {
                alert('Please enter a valid URL.');
            }
        }
    };

    const handleDeleteResource = (indexToDelete: number) => {
        const updatedResources = resources.filter((_, index) => index !== indexToDelete);
        setResources(updatedResources);
        localStorage.setItem('researchResources', JSON.stringify(updatedResources));
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            {/* Research Points Section */}
            <section className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                    <LightbulbIcon />
                    <h2 className="text-2xl font-bold text-gray-800">Research Points</h2>
                </div>
                
                <form onSubmit={handleAddPoint} className="flex flex-col sm:flex-row gap-2 mb-4">
                    <input
                        type="text"
                        value={newPoint}
                        onChange={(e) => setNewPoint(e.target.value)}
                        placeholder="Add a new research finding..."
                        className="flex-grow bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition"
                        aria-label="New research point"
                    />
                    <button type="submit" className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-rose-500 rounded-md hover:bg-rose-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={!newPoint.trim()}>
                        <PlusIcon />
                        Add Point
                    </button>
                </form>
                
                <ul className="space-y-3">
                    {points.map((point, index) => (
                        <li key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-md animate-slide-in border border-gray-200">
                           <span className="text-gray-700">{point}</span>
                           <button onClick={() => handleDeletePoint(index)} className="p-1 text-gray-400 hover:text-red-600 rounded-full transition-colors" aria-label="Delete point">
                             <TrashIcon />
                           </button>
                        </li>
                    ))}
                    {points.length === 0 && <p className="text-center text-gray-500 py-4">No research points yet. Add one to get started!</p>}
                </ul>
            </section>

            {/* Resources Section */}
            <section className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <button onClick={() => setShowResources(!showResources)} className="w-full flex items-center justify-between p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
                    <div className="flex items-center gap-3">
                        <LinkIcon />
                        <h2 className="text-2xl font-bold text-gray-800">Resources</h2>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-gray-500 transition-transform ${showResources ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                
                {showResources && (
                    <div className="mt-6 animate-fade-in">
                        <form onSubmit={handleAddResource} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 items-end">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="res-title" className="text-sm font-medium text-gray-500">Title</label>
                                <input id="res-title" type="text" value={newResourceTitle} onChange={(e) => setNewResourceTitle(e.target.value)} placeholder="e.g., Competitor Analysis" className="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="res-url" className="text-sm font-medium text-gray-500">URL</label>
                                <input id="res-url" type="text" value={newResourceUrl} onChange={(e) => setNewResourceUrl(e.target.value)} placeholder="https://example.com" className="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition" />
                            </div>
                            <button type="submit" className="sm:col-span-2 flex items-center justify-center gap-2 mt-2 px-4 py-2 text-sm font-semibold text-white bg-rose-500 rounded-md hover:bg-rose-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={!newResourceTitle.trim() || !newResourceUrl.trim()}>
                                <PlusIcon />
                                Add Resource
                            </button>
                        </form>
                        
                        <ul className="space-y-3">
                            {resources.map((resource, index) => (
                                <li key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-md animate-slide-in border border-gray-200">
                                    <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:underline flex-grow truncate" title={resource.url}>
                                        {resource.title}
                                    </a>
                                    <button onClick={() => handleDeleteResource(index)} className="ml-4 p-1 text-gray-400 hover:text-red-600 rounded-full transition-colors flex-shrink-0" aria-label="Delete resource">
                                        <TrashIcon />
                                    </button>
                                </li>
                            ))}
                             {resources.length === 0 && <p className="text-center text-gray-500 py-4">No resources added yet.</p>}
                        </ul>
                    </div>
                )}
            </section>
            
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }

                @keyframes slide-in {
                    from { opacity: 0; transform: translateX(-20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .animate-slide-in { animation: slide-in 0.3s ease-out forwards; }
            `}</style>
        </div>
    );
};