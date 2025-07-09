import React, { useState } from 'react';
import { ResearchSection } from './components/Hero';

// Helper icons for the Vision Section
const FocusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);
const MarketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);
const FitIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.657 7.343A8 8 0 0118 18c-5.523 0-10-4.477-10-10 0-1.845.487-3.577 1.343-5.024M12 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);
const RoadmapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
);

const visionPoints = [
    {
        icon: <FocusIcon />,
        title: "Current Focus: Conversational AI",
        description: "At present, Vitos focuses on (but is not limited to) the Conversational AI Market with Voice, Chat, and Flow-based Agents."
    },
    {
        icon: <MarketIcon />,
        title: "Market Opportunity",
        description: "The market is projected to grow up to $50 billion by 2030. Vitos aims to capture a significant play in this space, positioned as an AI-first platform."
    },
    {
        icon: <FitIcon />,
        title: "Strategic Fit: AI for CX",
        description: "The growing market for Conversational AI, combined with Kapture’s existing growth in providing CX solutions, makes Vitos a natural fit as an AI for CX platform."
    },
    {
        icon: <RoadmapIcon />,
        title: "Future Roadmap: Industry Templates",
        description: "Vitos will have industry-wise templates, making the platform more relatable to businesses from different sectors, starting with the Energy industry."
    }
];

const VisionSection = () => (
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

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-rose-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

const linkData = {
    production: [
        { title: "Production URL Stand alone app", url: "https://app.vitos.ai/app/" },
        { title: "Production Url Kapture Portal", url: "https://democrm.kapturecrm.com/app/workspace/0/overview" },
    ],
    testing: [
        { title: "Testing ENV Stand Alone", url: "https://app.vitos.ai/app_develop/qk/" },
        { title: "Testing ENV Kapture portal", url: "https://democrm.kapturecrm.com/app_develop/qk/workspace/0/overview" },
    ]
};

const LinkCard = ({ title, url }: { title: string, url: string }) => (
    <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-rose-300 transition-all duration-200 ease-in-out"
    >
        <span className="font-medium text-gray-700 group-hover:text-rose-600">{title}</span>
        <ExternalLinkIcon />
    </a>
);

const LinksSection = () => (
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
    </div>
);


// --- START: Release Plan Section ---

const releasePlan1Data = [
    { 
        id: 'platform', 
        title: 'Platform', 
        summary: 'Core infrastructure, scalability, and security enhancements for a robust foundation.',
        details: [
            'Enhanced multi-tenant architecture for better isolation.',
            'Implementation of auto-scaling capabilities based on live traffic.',
            'Strengthened data encryption policies at rest and in transit.',
            'Region-specific data residency options.'
        ]
    },
    { 
        id: 'build-ai', 
        title: 'Building AI Agents', 
        summary: 'Introducing new tools and UI improvements for a more intuitive and powerful agent creation experience.',
        details: [
            'Guided setup wizard for new agent creation.',
            'Pre-built templates for common use-cases (e.g., Customer Support, FAQ Bot).',
            'Version history and rollback for agent configurations.'
        ]
    },
    { 
        id: 'test-ai', 
        title: 'Testing AI Agents', 
        summary: 'Advanced testing suite with simulation, debugging capabilities, and performance benchmarking.',
        details: [
            'Interactive conversation simulator for real-time testing.',
            'Batch testing with predefined test scripts.',
            'Intent and entity recognition accuracy reports.'
        ]
    },
    { 
        id: 'deploy-ai', 
        title: 'Deploying AI agents', 
        summary: 'Streamlined deployment pipelines, version control, and rollback features for AI agents.',
        details: [
            'Blue/Green deployment strategies.',
            'Integration with CI/CD pipelines (e.g., Jenkins, GitHub Actions).',
            'Environment-specific configuration management.'
        ]
    },
    { 
        id: 'build-flow', 
        title: 'Building Flow Agents', 
        summary: 'Visual flow builder with additional nodes, complex conditional logic, and state management.',
        details: [
            'Drag-and-drop interface for flow design.',
            'New nodes: API calls, database queries, custom code execution.',
            'Sub-flows for creating reusable components.'
        ]
    },
    { 
        id: 'test-flow', 
        title: 'Testing Flow Agents', 
        summary: 'End-to-end testing framework for flow-based agents to ensure reliability and accuracy.',
        details: [
            'Visual path tracing to debug conversation flows.',
            'Unit tests for individual nodes.',
            'Integration testing simulation.'
        ]
    },
    { 
        id: 'deploy-flow', 
        title: 'Deploying Flow Agents', 
        summary: 'One-click deployment to various environments and channels for flow agents.',
        details: [
            'Seamless deployment to web, mobile, and social channels.',
            'A/B testing for different flow versions.',
            'Performance monitoring post-deployment.'
        ]
    },
    { 
        id: 'channel', 
        title: 'Channel', 
        summary: 'Adding native support for new communication channels like WhatsApp, Telegram, and Slack.',
        details: [
            'WhatsApp Business API integration.',
            'Support for rich media content in new channels.',
            'Unified inbox view for agents managing multiple channels.'
        ]
    },
    { 
        id: 'integrations', 
        title: 'Integrations', 
        summary: 'Expanding our library of pre-built third-party integrations (e.g., Salesforce, Zendesk, HubSpot).',
        details: [
            'OAuth 2.0 support for secure third-party connections.',
            'Marketplace for discovering and installing new integrations.',
            'Custom integration SDK.'
        ]
    },
    { 
        id: 'providers', 
        title: 'Providers', 
        summary: 'Integration with more AI, LLM, and STT/TTS providers to offer greater flexibility.',
        details: [
            'Plug-and-play support for different LLM providers.',
            'Voice customization options from various STT/TTS services.',
            'Provider performance and cost comparison dashboard.'
        ]
    },
    { 
        id: 'knowledge-base', 
        title: 'Knowledge Base', 
        summary: 'AI-powered knowledge base with automatic document ingestion, versioning, and content suggestions.',
        details: [
            'Support for PDF, DOCX, and URL ingestion.',
            'AI-driven content summarization.',
            'Feedback loop for improving knowledge base accuracy.'
        ]
    },
    { 
        id: 'analytics', 
        title: 'Analytics', 
        summary: 'Comprehensive dashboard for tracking agent performance, user engagement, and conversation analytics.',
        details: [
            'Customizable reporting dashboards.',
            'Real-time analytics stream.',
            'Sentiment analysis and topic clustering reports.'
        ]
    },
    { 
        id: 'payments', 
        title: 'Payments/Credit Model', 
        summary: 'Implementing a flexible, usage-based payments and credit system for all services.',
        details: [
            'Tiered pricing plans.',
            'Pay-as-you-go model for specific features.',
            'Real-time credit usage monitoring and alerts.'
        ]
    },
];

const releasePlan2Data = [
    { 
        id: 'advanced-ai', 
        title: 'Advanced AI Capabilities', 
        summary: 'Research and implement next-gen AI features like sentiment analysis and emotional intelligence.',
        details: [
            'Real-time sentiment tracking during conversations.',
            'Emotion detection to adapt agent tone and response.',
            'Topic modeling to identify emerging trends in user queries.'
        ] 
    },
    { 
        id: 'proactive-agents', 
        title: 'Proactive Agents', 
        summary: 'Enable agents to initiate conversations based on user behavior and predictive triggers.',
        details: [
            'Trigger-based outreach (e.g., cart abandonment).',
            'Scheduled messaging campaigns.',
            'Personalized recommendations based on browsing history.'
        ]
    },
    { 
        id: 'personalization', 
        title: 'Hyper-Personalization', 
        summary: 'Develop a personalization engine to tailor conversations and responses to individual users.',
        details: [
            'User profile enrichment with data from integrated systems.',
            'Dynamic conversation flows based on user segments.',
            'Personalized product and content recommendations.'
        ]
    },
    { 
        id: 'omnichannel-v2', 
        title: 'Omnichannel V2', 
        summary: 'A unified customer profile and conversation history across all channels for seamless CX.',
        details: [
            'Single customer view consolidating all interactions.',
            'Seamless conversation handover between channels (e.g., web chat to mobile app).',
            'Cross-channel analytics.'
        ]
    },
    { 
        id: 'agent-collaboration', 
        title: 'Agent Collaboration', 
        summary: 'Allow multiple AI and human agents to collaborate on a single customer query.',
        details: [
            'Intelligent routing to the best-suited agent (AI or human).',
            'Shared conversation context for seamless handoffs.',
            'Private notes and collaboration tools for human agents.'
        ]
    },
    { 
        id: 'voice-biometrics', 
        title: 'Voice Biometrics', 
        summary: 'Implement voice authentication for secure and frictionless user identification.',
        details: [
            'Passive voice enrollment during conversations.',
            'Secure authentication for sensitive transactions.',
            'Fraud detection capabilities.'
        ]
    },
];


const ReleaseItemCard = ({ title, summary, details }: { title: string, summary: string, details: string[] }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="border border-gray-200 rounded-lg bg-white transition-all duration-300 ease-in-out shadow-sm hover:shadow-lg focus-within:shadow-lg">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex justify-between items-start text-left p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-lg"
            >
                <div className="flex-grow">
                    <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
                    <p className="text-sm text-gray-500 mt-1 pr-4">{summary}</p>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transform transition-transform duration-300 flex-shrink-0 mt-1 ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                style={{
                    maxHeight: isExpanded ? `${details.length * 28 + 40}px` : '0px',
                    transition: 'max-height 0.5s ease-in-out',
                }}
                className="overflow-hidden"
            >
                <div className="px-5 pb-5 pt-2 border-t border-gray-200">
                    <h5 className="text-md font-semibold text-gray-700 mb-2">Features & Details:</h5>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                        {details.map((detail, index) => <li key={index}>{detail}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const ReleasePlanSlide = ({ data }: { data: { id: string; title: string; summary: string; details: string[] }[] }) => {
    return (
        <div className="flex flex-col gap-4">
            {data.map(item => (
                <ReleaseItemCard
                    key={item.id}
                    title={item.title}
                    summary={item.summary}
                    details={item.details}
                />
            ))}
        </div>
    );
};

const FutureIdeationSlide = () => (
    <div className="p-8 bg-white rounded-lg border border-gray-200 text-center">
        <h3 className="text-2xl font-bold text-gray-800">Future Release Ideation</h3>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            This space is for brainstorming and outlining potential future features and long-term goals.
            Think big! What's next for Vitos?
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-700">Predictive AI</h4>
                <p className="text-sm text-gray-600 mt-1">Anticipate customer needs before they ask.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-700">Autonomous Agent Swarms</h4>
                <p className="text-sm text-gray-600 mt-1">Collaborative AI agents solving complex tasks.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-700">Web 3.0 Integrations</h4>
                <p className="text-sm text-gray-600 mt-1">Connect with decentralized applications and services.</p>
            </div>
        </div>
    </div>
);

const ReleasePlanSection = () => {
    const [activePlan, setActivePlan] = useState('Release Plan 1');
    const plans = ['Release Plan 1', 'Release Plan 2', 'Future Release Ideation'];

    const renderContent = () => {
        switch (activePlan) {
            case 'Release Plan 1':
                return <ReleasePlanSlide data={releasePlan1Data} />;
            case 'Release Plan 2':
                return <ReleasePlanSlide data={releasePlan2Data} />;
            case 'Future Release Ideation':
                return <FutureIdeationSlide />;
            default:
                return null;
        }
    };
    
    return (
        <div className="animate-fade-in space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                 <div className="text-left">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Release Plan</h2>
                    <p className="text-lg text-gray-600">
                        Our roadmap for upcoming features and platform enhancements.
                    </p>
                </div>
                <div className="flex-shrink-0 bg-white p-1 rounded-lg shadow-sm border border-gray-200">
                    <nav className="flex space-x-1">
                        {plans.map(plan => (
                            <button
                                key={plan}
                                onClick={() => setActivePlan(plan)}
                                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-500 ${
                                    activePlan === plan
                                        ? 'bg-rose-600 text-white shadow'
                                        : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                {plan}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            <div className="animate-slide-in" key={activePlan}>
                {renderContent()}
            </div>
            
            <style>{`
                @keyframes slide-in {
                    from { opacity: 0; transform: translateX(15px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .animate-slide-in { animation: slide-in 0.4s ease-out forwards; }
            `}</style>
        </div>
    );
};

// --- END: Release Plan Section ---


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

      {/* Main Content */}
      <main className="flex-grow p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;