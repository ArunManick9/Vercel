import React, { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { ResearchView } from './views/ResearchView';
import { LinksView } from './views/LinksView';
import { ReleasePlanView } from './views/ReleasePlanView';
import type { View } from './types';
import { ResearchIcon, LinksIcon, ReleasePlanIcon } from './components/icons';

const views: View[] = ['Research', 'Links', 'Release Plan'];

const icons: Record<View, React.FC<React.SVGProps<SVGSVGElement>>> = {
  Research: ResearchIcon,
  Links: LinksIcon,
  'Release Plan': ReleasePlanIcon,
};

function App() {
  const [activeView, setActiveView] = useState<View>('Release Plan');

  const renderContent = () => {
    switch (activeView) {
      case 'Research':
        return <ResearchView />;
      case 'Links':
        return <LinksView />;
      case 'Release Plan':
        return <ReleasePlanView />;
      default:
        return <ResearchView />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
      <Sidebar 
        views={views}
        icons={icons}
        activeView={activeView}
        setActiveView={setActiveView}
      />
      <main className="flex-grow p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;