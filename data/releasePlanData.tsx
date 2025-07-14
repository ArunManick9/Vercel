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

const release2Placeholder = (
    <div className="text-sm text-gray-500 italic">
        <p>Details for the next release phase will be outlined here. This may include enhancements, new features, or extensions of the current capabilities.</p>
    </div>
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
        ),
        release2: release2Placeholder
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
        ),
        release2: release2Placeholder
    },
    { 
        id: 'test-ai', 
        title: 'Testing AI Agents', 
        summary: 'Live testing Web based, Agent is one click away from being experienced by the user who is building, enabling parallel testing',
        details: createDetailsList([
            'Users can use the testing panel on the right side to test the voice agent.',
            'The testing panel includes a transcriber display and a reset option.',
            'Test the agent instantly with all the latest changes to the transcriber, voice, prompt, etc.',
        ]),
        release2: release2Placeholder
    },
    { 
        id: 'deploy-ai', 
        title: 'Deploying AI agents', 
        summary: 'Linking the AI agents to an actual phone number, supporting multiple telephony partners',
        details: createDetailsList([
            'Manual Deploy options enabled for AI agents that are built.',
            'User can select any configuration saved for a telephony service provider from the deploy screen.',
            'User will get a configurable URL on the UI which has to be configured in the respective telephony provider dashboard.',
            'Based on the provider selected, a short guide is given to the user on how to configure the URL to make the Voice Agent Live.'
        ]),
        release2: release2Placeholder
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
        ]),
        release2: release2Placeholder
    },
    { 
        id: 'deploy-flow', 
        title: 'Deploying Flow Agents', 
        summary: 'One-click deployment to various environments and channels for flow agents.',
        details: createDetailsList([
            'Seamless deployment to web, mobile, and social channels.',
            'A/B testing for different flow versions.',
            'Performance monitoring post-deployment.'
        ]),
        release2: release2Placeholder
    },
    { 
        id: 'channel', 
        title: 'Channels', 
        summary: 'Configuring Voice channels, chat platforms and social media platforms to deploy or run the Agents created in Vitos.',
        details: createDetailsList([
            'Save and reuse channel configurations for quick and efficient bot deployment.',
            'Support for dedicated Voice channels for GenAI Voice Agents.',
            'Configuration for deploying Flow Agents across Social Media Platforms and websites.',
            'List of all configurations saved ad visible when the user tries to deploy the agents created'
        ]),
        release2: release2Placeholder
    },
    { 
        id: 'integrations', 
        title: 'Integrations', 
        summary: 'Integrate API requests, Custom function codes that can be triggered during the flow/conversation, before and after.',
        details: (
            <div className="text-sm text-gray-600 space-y-4">
                <p>Users can add and manage reusable APIs and Custom Functions ("Tools") within a workspace, making them accessible to all Agents. The platform displays usage counts for each tool, and they can be edited after creation.</p>
                <div>
                    <h5 className="font-semibold text-gray-700 mb-2">Tool Categories</h5>
                    <ul className="list-disc list-inside space-y-3">
                        <li>
                            <strong>AI Agent Tools (Python):</strong>
                            <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                                <li><strong>Pre-Action:</strong> Triggered before a call begins.</li>
                                <li><strong>In-Prompt:</strong> Used in real-time during a conversation. The function's description is critical, as it informs the LLM when to trigger the tool.</li>
                                <li><strong>Post-Action:</strong> Executed after the conversation ends.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Flow Agent Tools (REST API & JavaScript):</strong>
                            <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                                <li>Functions and APIs are configured as nodes directly within the visual flow builder.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-semibold text-gray-700 mb-2">Creating a New Tool</h5>
                     <ul className="list-disc list-inside space-y-2">
                        <li><strong>Name & Description:</strong> Provide a clear name and a detailed description for each tool.</li>
                        <li><strong>Inline Testing:</strong> A built-in testing utility allows users to validate functions with sample inputs and parameters directly in the UI before saving.</li>
                        <li><strong>Output Definition:</strong> After a successful test, users define the output variables that the AI agent needs to process the function's result.</li>
                        <li><strong>Cloud Deployment:</strong> Saved functions and APIs for AI Agents are automatically deployed to the cloud, ready for immediate use.</li>
                    </ul>
                </div>
            </div>
        ),
        release2: release2Placeholder
    },
    { 
        id: 'providers', 
        title: 'Providers', 
        summary: 'Configure and save provider information in one place, allowing plug-and-play selection when building agents.',
        details: (
            <div className="text-sm text-gray-600 space-y-4">
                <p>Users can securely save their provider configurations (e.g., API keys) for services like LLM, Transcription, and Voice, making them available for plug-and-play use when building agents.</p>
                <div>
                    <h5 className="font-semibold text-gray-700 mb-2">Key Features</h5>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Provider setups are stored securely and can be reused across multiple agents.</li>
                        <li>API keys are handled on the backend and never exposed in the UI during agent configuration.</li>
                        <li>Saved providers are automatically populated in the relevant dropdowns within the agent builder.</li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-semibold text-gray-700 mb-2">Supported Providers</h5>
                    <ul className="list-disc list-inside space-y-3">
                        <li><strong>LLM Models:</strong> OpenAI, Gemini, DeepSeek.</li>
                        <li><strong>Transcription (STT):</strong> Azure, Deepgram, Google.</li>
                        <li><strong>Voice (TTS):</strong> Azure, ElevenLabs, Google.</li>
                    </ul>
                </div>
            </div>
        ),
        release2: release2Placeholder
    },
    { 
        id: 'knowledge-base', 
        title: 'Knowledge Base', 
        summary: 'AI-powered knowledge base with automatic document ingestion, versioning, and content suggestions.',
        details: createDetailsList([
            'Support for PDF, DOCX, and URL ingestion.',
            'AI-driven content summarization.',
            'Feedback loop for improving knowledge base accuracy.'
        ]),
        release2: release2Placeholder
    },
    { 
        id: 'analytics', 
        title: 'Analytics', 
        summary: 'Comprehensive dashboard for tracking agent performance, user engagement, and conversation analytics.',
        details: createDetailsList([
            'Customizable reporting dashboards.',
            'Real-time analytics stream.',
            'Sentiment analysis and topic clustering reports.'
        ]),
        release2: release2Placeholder
    },
    { 
        id: 'payments', 
        title: 'Payments/Credit Model', 
        summary: 'Implementing a flexible, usage-based payments and credit system for all services.',
        details: createDetailsList([
            'Tiered pricing plans.',
            'Pay-as-you-go model for specific features.',
            'Real-time credit usage monitoring and alerts.'
        ]),
        release2: release2Placeholder
    },
];