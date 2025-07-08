import React, { useState } from 'react';
import { ResearchSection } from './components/Hero';

// Placeholder components for the other sections
const VisionSection = () => <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm animate-fade-in"><h2 className="text-3xl font-bold text-gray-800">Vision</h2><p className="mt-4 text-gray-600">Define and articulate the product vision here. This space can be used for a mission statement, goals, and core principles.</p></div>;
const LinksSection = () => <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm animate-fade-in"><h2 className="text-3xl font-bold text-gray-800">Product Links</h2><p className="mt-4 text-gray-600">Manage important links like Figma, staging, and production environments. This can be built out similar to the Resources section.</p></div>;
const ReleasePlanSection = () => <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm animate-fade-in"><h2 className="text-3xl font-bold text-gray-800">Release Plan</h2><p className="mt-4 text-gray-600">Outline upcoming features and release schedules. This could become a timeline, a kanban board, or a feature list.</p></div>;


const icons: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  Research: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  Vision: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  Links: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.536a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
  'Release Plan': (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
};

type View = 'Research' | 'Vision' | 'Links' | 'Release Plan';
const views: View[] = ['Research', 'Vision', 'Links', 'Release Plan'];

function App() {
  const [activeView, setActiveView] = useState<View>('Research');

  const renderContent = () => {
    switch (activeView) {
      case 'Research':
        return <ResearchSection />;
      case 'Vision':
        return <VisionSection />;
      case 'Links':
        return <LinksSection />;
      case 'Release Plan':
        return <ReleasePlanSection />;
      default:
        return <ResearchSection />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar Navigation */}
      <aside className="w-60 bg-white p-4 border-r border-gray-200 flex flex-col shrink-0">
        <h1 className="text-2xl font-bold text-rose-600 px-2 mb-10 mt-2">Product Roadmap</h1>
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

      {/* Main Content */}
      <main className="flex-grow p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;