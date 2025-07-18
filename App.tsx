import React, { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { ResearchView } from './views/ResearchView';
import { LinksView } from './views/LinksView';
import { ReleasePlanView } from './views/ReleasePlanView';
import { VisionView } from './views/VisionView';
import type { View } from './types';
import { ResearchIcon, LinksIcon, ReleasePlanIcon, VisionIcon } from './components/icons';

const views: View[] = ['Research', 'Links', 'Release Plan', 'Vision'];

const icons: Record<View, React.FC<React.SVGProps<SVGSVGElement>>> = {
  Research: ResearchIcon,
  Links: LinksIcon,
  'Release Plan': ReleasePlanIcon,
  Vision: VisionIcon,
};

function App() {
  const [activeView, setActiveView] = useState<View>('Release Plan');
  const [embeddedUrl, setEmbeddedUrl] = useState<string | null>(null);

  const renderContent = () => {
    switch (activeView) {
      case 'Research':
        return <ResearchView />;
      case 'Links':
        return <LinksView />;
      case 'Release Plan':
        return <ReleasePlanView onOpenLink={setEmbeddedUrl} />;
      case 'Vision':
        return <VisionView />;
      default:
        return <ReleasePlanView onOpenLink={setEmbeddedUrl} />;
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
      {embeddedUrl && <EmbeddedLinkView url={embeddedUrl} onClose={() => setEmbeddedUrl(null)} />}
    </div>
  );
}

export default App;