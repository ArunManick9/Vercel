import React from 'react';
import type { ReleaseItem } from '../types';

const createDetailsList = (items: string[]) => (
    <>
        <h5 className="text-md font-semibold text-gray-700 mb-2">Features & Details:</h5>
        <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
            {items.map((detail, index) => <li key={index}>{detail}</li>)}
        </ul>
    </>
);

export const releasePlan1Data: ReleaseItem[] = [
    { 
        id: 'platform', 
        title: 'Platform', 
        summary: 'Vitos Platform capabilities, Workspaces, access control, security etc.',
        details: (
            <div className="text-sm text-gray-600 space-y-4">
                <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Accessing Vitos Platform</h4>
                    <p className="mb-3">The <strong>Vitos Platform</strong> can be accessed in two ways:</p>
                    <ol className="list-decimal list-inside space-y-2">
                        <li><strong>As a Standalone Application</strong> – Users can access the full capabilities of Vitos independently.</li>
                        <li><strong>Within Kapture’s Configuration</strong> – Integrated into Kapture for seamless usage by existing partners.</li>
                    </ol>
                </div>
                <hr />
                <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Workspace Management</h4>
                    <ul className="list-disc list-inside space-y-3">
                        <li><strong>Standalone Access:</strong> Users can create <strong>multiple workspaces</strong> tailored to their specific needs or departments.</li>
                        <li><strong>Kapture Integration (for existing partners):</strong> Each partner receives <strong>a single dedicated workspace</strong> as part of the integration.</li>
                    </ul>
                </div>
            </div>
        )
    },
    { 
        id: 'build-ai', 
        title: 'Building AI Agents', 
        summary: 'Creating AI agents, Prompt based bot, DIY builder, Flexible Model Providers and tools selections',
        details: (
            <div className="text-sm text-gray-600 space-y-4">
                <p>Users can create AI agents, which are prompt-based Voice Agents.</p>

                <div>
                    <h5 className="font-semibold text-gray-700 mb-2">Key Capabilities & Integrations</h5>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Energy Clients can use their pre-built Vertex setup to build bots with ready integration from Step 1.</li>
                        <li>With correct credentials, bots can fetch customer and billing information using the marketer account number.</li>
                        <li>Users have the flexibility to select their own LLM Models, Transcriber, and Voice Providers.</li>
                        <li>Integrate Custom Functions (Python scripts) and APIs (REST supported) as pre-call, post-call, or in-prompt actions.</li>
                        <li>Link a Knowledge Base to an agent. This release supports FAQ formats in Excel.</li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-semibold text-gray-700 mb-2">Agent Configuration</h5>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Configure custom messages (e.g., Welcome, Thank You), temperature, max tokens, and enable/disable caching.</li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-semibold text-gray-700 mb-2">Essential Voice Configuration Options</h5>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Create voices for AI agents with choices for gender, language, accent, and various voice providers.</li>
                        <li>Includes different voice suggestions, audio caching, and the ability to test voice prompts directly on the UI.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 className="font-semibold text-gray-700 mb-2">Essential Transcriber Configuration Options</h5>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Create transcribers for agents using different providers and supported languages.</li>
                        <li>Includes Voice Activity Detection (VAD) options and live record/test capabilities within the UI.</li>
                    </ul>
                </div>
            </div>
        )
    },
    { 
        id: 'test-ai', 
        title: 'Testing AI Agents', 
        summary: 'Live testing Web based, Agent is one click away from being experienced by the user who is building, enabling parallel testing',
        details: createDetailsList([
            'Users can use the testing panel on the right side to test the voice agent.',
            'The testing panel includes a transcriber display and a reset option.',
            'Test the agent instantly with all the latest changes to the transcriber, voice, prompt, etc.',
        ])
    },
    { 
        id: 'deploy-ai', 
        title: 'Deploying AI agents', 
        summary: 'Linking the AI agents to an actual phone number, supporting mulitple telephony partners',
        details: createDetailsList([
            'Manual Deploy options enabled for AI agents that are built.',
            'User can select any configuration saved for a telephony service provider from the deploy screen.',
            'User will get a configurable URL on the UI which has to be configured in the respective telephony provider dashboard.',
            'Based on the provider selected, a short guide is given to the user on how to configure the URL to make the Voice Agent Live.'
        ])
    },
    { 
        id: 'build-test-flow', 
        title: 'Building & Testing Flow Agents', 
        summary: 'A visual flow builder with an integrated testing framework to ensure reliability and accuracy.',
        details: createDetailsList([
            'Drag-and-drop interface for flow design.',
            'New nodes: API calls, database queries, custom code execution.',
            'Sub-flows for creating reusable components.',
            'Visual path tracing to debug conversation flows.',
            'Unit tests for individual nodes.',
            'Integration testing simulation.'
        ])
    },
    { 
        id: 'deploy-flow', 
        title: 'Deploying Flow Agents', 
        summary: 'One-click deployment to various environments and channels for flow agents.',
        details: createDetailsList([
            'Seamless deployment to web, mobile, and social channels.',
            'A/B testing for different flow versions.',
            'Performance monitoring post-deployment.'
        ])
    },
    { 
        id: 'channel', 
        title: 'Channel', 
        summary: 'Adding native support for new communication channels like WhatsApp, Telegram, and Slack.',
        details: createDetailsList([
            'WhatsApp Business API integration.',
            'Support for rich media content in new channels.',
            'Unified inbox view for agents managing multiple channels.'
        ])
    },
    { 
        id: 'integrations', 
        title: 'Integrations', 
        summary: 'Expanding our library of pre-built third-party integrations (e.g., Salesforce, Zendesk, HubSpot).',
        details: createDetailsList([
            'OAuth 2.0 support for secure third-party connections.',
            'Marketplace for discovering and installing new integrations.',
            'Custom integration SDK.'
        ])
    },
    { 
        id: 'providers', 
        title: 'Providers', 
        summary: 'Integration with more AI, LLM, and STT/TTS providers to offer greater flexibility.',
        details: createDetailsList([
            'Plug-and-play support for different LLM providers.',
            'Voice customization options from various STT/TTS services.',
            'Provider performance and cost comparison dashboard.'
        ])
    },
    { 
        id: 'knowledge-base', 
        title: 'Knowledge Base', 
        summary: 'AI-powered knowledge base with automatic document ingestion, versioning, and content suggestions.',
        details: createDetailsList([
            'Support for PDF, DOCX, and URL ingestion.',
            'AI-driven content summarization.',
            'Feedback loop for improving knowledge base accuracy.'
        ])
    },
    { 
        id: 'analytics', 
        title: 'Analytics', 
        summary: 'Comprehensive dashboard for tracking agent performance, user engagement, and conversation analytics.',
        details: createDetailsList([
            'Customizable reporting dashboards.',
            'Real-time analytics stream.',
            'Sentiment analysis and topic clustering reports.'
        ])
    },
    { 
        id: 'payments', 
        title: 'Payments/Credit Model', 
        summary: 'Implementing a flexible, usage-based payments and credit system for all services.',
        details: createDetailsList([
            'Tiered pricing plans.',
            'Pay-as-you-go model for specific features.',
            'Real-time credit usage monitoring and alerts.'
        ])
    },
];

export const releasePlan2Data: ReleaseItem[] = [
    { 
        id: 'advanced-ai', 
        title: 'Advanced AI Capabilities', 
        summary: 'Research and implement next-gen AI features like sentiment analysis and emotional intelligence.',
        details: createDetailsList([
            'Real-time sentiment tracking during conversations.',
            'Emotion detection to adapt agent tone and response.',
            'Topic modeling to identify emerging trends in user queries.'
        ]) 
    },
    { 
        id: 'proactive-agents', 
        title: 'Proactive Agents', 
        summary: 'Enable agents to initiate conversations based on user behavior and predictive triggers.',
        details: createDetailsList([
            'Trigger-based outreach (e.g., cart abandonment).',
            'Scheduled messaging campaigns.',
            'Personalized recommendations based on browsing history.'
        ])
    },
    { 
        id: 'personalization', 
        title: 'Hyper-Personalization', 
        summary: 'Develop a personalization engine to tailor conversations and responses to individual users.',
        details: createDetailsList([
            'User profile enrichment with data from integrated systems.',
            'Dynamic conversation flows based on user segments.',
            'Personalized product and content recommendations.'
        ])
    },
    { 
        id: 'omnichannel-v2', 
        title: 'Omnichannel V2', 
        summary: 'A unified customer profile and conversation history across all channels for seamless CX.',
        details: createDetailsList([
            'Single customer view consolidating all interactions.',
            'Seamless conversation handover between channels (e.g., web chat to mobile app).',
            'Cross-channel analytics.'
        ])
    },
    { 
        id: 'agent-collaboration', 
        title: 'Agent Collaboration', 
        summary: 'Allow multiple AI and human agents to collaborate on a single customer query.',
        details: createDetailsList([
            'Intelligent routing to the best-suited agent (AI or human).',
            'Shared conversation context for seamless handoffs.',
            'Private notes and collaboration tools for human agents.'
        ])
    },
    { 
        id: 'voice-biometrics', 
        title: 'Voice Biometrics', 
        summary: 'Implement voice authentication for secure and frictionless user identification.',
        details: createDetailsList([
            'Passive voice enrollment during conversations.',
            'Secure authentication for sensitive transactions.',
            'Fraud detection capabilities.'
        ])
    },
];
