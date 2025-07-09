import React from 'react';
import type { View } from '../../types';

interface SidebarProps {
    views: View[];
    icons: Record<View, React.FC<React.SVGProps<SVGSVGElement>>>;
    activeView: View;
    setActiveView: (view: View) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ views, icons, activeView, setActiveView }) => {
    return (
        <aside className="w-60 bg-white p-4 border-r border-gray-200 flex flex-col shrink-0">
            <h1 className="text-2xl font-bold text-rose-600 px-2 mb-10 mt-2">Vitos Internal resources</h1>
            <nav className="flex flex-col gap-2">
                {views.map(view => {
                    const Icon = icons[view];
                    const isActive = activeView === view;
                    return (
                        <button
                            key={view}
                            onClick={() => setActiveView(view)}
                            className={`flex items-center gap-4 w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500
                                ${isActive
                                ? 'bg-rose-50 text-rose-700'
                                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                }`}
                        >
                            <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-rose-600' : 'text-gray-400'}`} />
                            <span>{view}</span>
                        </button>
                    )
                })}
            </nav>
        </aside>
    );
};
