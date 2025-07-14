import React from 'react';
import type { ReleaseItem } from '../types';
import { CheckCircleIcon, ClockIcon } from '@heroicons/react/24/solid';

const createRelease1Details = (items: string[]) => (
    <>
        <h5 className="text-md font-semibold text-gray-700 mb-2">Features & Details:</h5>
        <ul className="space-y-3">
            {items.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{detail}</span>
                </li>
            ))}
        </ul>
    </>
);

const createRelease2Details = (items: string[]) => (
     <ul className="space-y-3">
        {items.map((detail, index) => (
            <li key={index} className="flex items-start gap-3">
                <ClockIcon className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">{detail}</span>
            </li>
        ))}
    </ul>
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
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                            <span><strong>As a Standalone Application</strong> – Users can access the full capabilities of Vitos independently.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                            <span><strong>Within Kapture’s Configuration</strong> – Integrated into Kapture for seamless usage by existing partners.</span>
                        </li>
                    </ul>
                </div>
                <hr />
                <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Workspace Management</h4>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                            <span><strong>Standalone Access:</strong> Users can create <strong>multiple workspaces</strong> tailored to their specific needs or departments.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                            <span><strong>Kapture Integration (for existing partners):</strong> Each partner receives <strong>a single dedicated workspace</strong> as part of the integration.</span>
                        </li>
                    </ul>
                </div>
            </div>
        ),
        release2: createRelease2Details([
            'Focus on user behavior in Application in standalone application.',
            'Tracking the users fall-off points and implementing proactive product marketing through emails and webinars.',
            'YouTube Tutorials on best practices on building bots.',
        ]),
        release1Scope: 5,
        release2Scope: 3,
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
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                            <span>Energy Clients can use their pre-built Vertex setup to build bots with ready integration from Step 1.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                            <span>With correct credentials, bots can fetch customer and billing information using the marketer account number.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                            <span>Users have the flexibility to select their own LLM Models, Transcriber, and Voice Providers.</span>
                        </li>
                         <li className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                            <span>Integrate Custom Functions (Python scripts) and APIs (REST supported) as pre-call, post-call, or in-prompt actions.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                            <span>Link a Knowledge Base to an agent. This release supports FAQ formats in Excel.</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-semibold text-gray-700 mb-2">Agent Configuration</h5>
                    <ul className="space-y-3">
                       <li className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                            <span>Configure custom messages (e.g., Welcome, Thank You), temperature, max tokens, and enable/disable caching.</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-semibold text-gray-700 mb-2">Essential Voice Configuration Options</h5>
                     <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                            <span>Create voices for AI agents with choices for gender, language, accent, and various voice providers.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                            <span>Includes different voice suggestions, audio caching, and the ability to test voice prompts directly on the UI.</span>
                        </li>
                    </ul>
                </div>
                
                <div>
                    <h5 className="font-semibold text-gray-700 mb-2">Essential Transcriber Configuration Options</h5>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                            <span>Create transcribers for agents using different providers and supported languages.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                            <span>Includes Voice Activity Detection (VAD) options and live record/test capabilities within the UI.</span>
                        </li>
                    </ul>
                </div>
            </div>
        ),
        release2: createRelease2Details([
            'Having pre-built templates for Major industries and important/most common use cases.',
            'Advanced Voice creation options like Voice cloning, flexibility in determining the Pitch, tone, and speech rate.',
            'Advanced options for configuring a transcriber like Speech amplification and noise cancellation will be enabled.',
            'A Conversational Chat Agent will also be built while creating a Voice Agent (as soon as models and tools are defined).',
        ]),
        release1Scope: 15,
        release2Scope: 4,
    },
    { 
        id: 'test-ai', 
        title: 'Testing AI Agents', 
        summary: 'Live testing Web based, Agent is one click away from being experienced by the user who is building, enabling parallel testing',
        details: createRelease1Details([
            'Users can use the testing panel on the right side to test the voice agent.',
            'The testing panel includes a transcriber display and a reset option.',
            'Test the agent instantly with all the latest changes to the transcriber, voice, prompt, etc.',
        ]),
        release2: createRelease2Details([
            'The user will also have a chat option to test at the web level in addition to the existing voice option.',
            'The user can check the LLM model and the tools configured directly by chatting with the AI agent instead of speaking and testing all the time.',
        ]),
        release1Scope: 3,
        release2Scope: 2,
    },
    { 
        id: 'deploy-ai', 
        title: 'Deploying AI agents', 
        summary: 'Linking the AI agents to an actual phone number, supporting multiple telephony partners',
        details: createRelease1Details([
            'Manual Deploy options enabled for AI agents that are built.',
            'User can select any configuration saved for a telephony service provider from the deploy screen.',
            'User will get a configurable URL on the UI which has to be configured in the respective telephony provider dashboard.',
            'Based on the provider selected, a short guide is given to the user on how to configure the URL to make the Voice Agent Live.'
        ]),
        release2: createRelease2Details([
            'User will have API-based Deployment for Voice Agents.',
            'Users will provide their credentials or some form of authentication to connect with their telephony partner and trigger deployment automatically from the Vitos portal.',
            'Users will also have webhooks for AI Chat Agents that they can use on their websites or chat channels like WhatsApp, Instagram, or Facebook.',
        ]),
        release1Scope: 4,
        release2Scope: 3,
    },
    { 
        id: 'build-test-flow', 
        title: 'Building & Testing Flow Agents', 
        summary: 'A visual flow builder with an integrated testing framework to ensure reliability and accuracy.',
        details: createRelease1Details([
            'Drag-and-drop interface for flow design.',
            'New nodes: API calls, database queries, custom code execution.',
            'Sub-flows for creating reusable components.',
            'Visual path tracing to debug conversation flows.',
            'Unit tests for individual nodes.',
            'Integration testing simulation.'
        ]),
        release2: createRelease2Details([
            'Enhanced widgets for Fastlane.',
            'Added widgets for Freshdesk and other platform providers.',
            'Users will have a provision to add their CRM platform credentials and then will have widgets in the flow builder to integrate them smoothly for easy actions like creating a ticket, updating a ticket, etc.',
        ]),
        release1Scope: 6,
        release2Scope: 3,
    },
    { 
        id: 'deploy-flow', 
        title: 'Deploying Flow Agents', 
        summary: 'One-click deployment to various environments and channels for flow agents.',
        details: createRelease1Details([
            'Seamless deployment to web, mobile, and social channels.',
            'A/B testing for different flow versions.',
            'Performance monitoring post-deployment.'
        ]),
        release2: release2Placeholder,
        release1Scope: 3,
        release2Scope: 0,
    },
    { 
        id: 'channel', 
        title: 'Channels', 
        summary: 'Configuring Voice channels, chat platforms and social media platforms to deploy or run the Agents created in Vitos.',
        details: createRelease1Details([
            'Save and reuse channel configurations for quick and efficient bot deployment.',
            'Support for dedicated Voice channels for GenAI Voice Agents.',
            'Configuration for deploying Flow Agents across Social Media Platforms and websites.',
            'List of all configurations saved ad visible when the user tries to deploy the agents created'
        ]),
        release2: release2Placeholder,
        release1Scope: 4,
        release2Scope: 0,
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
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                           <CheckCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                           <div>
                                <strong>AI Agent Tools (Python):</strong>
                                <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                                    <li><strong>Pre-Action:</strong> Triggered before a call begins.</li>
                                    <li><strong>In-Prompt:</strong> Used in real-time during a conversation. The function's description is critical, as it informs the LLM when to trigger the tool.</li>
                                    <li><strong>Post-Action:</strong> Executed after the conversation ends.</li>
                                </ul>
                           </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                            <div>
                                <strong>Flow Agent Tools (REST API & JavaScript):</strong>
                                <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                                    <li>Functions and APIs are configured as nodes directly within the visual flow builder.</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-semibold text-gray-700 mb-2">Creating a New Tool</h5>
                     <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                            <span><strong>Name & Description:</strong> Provide a clear name and a detailed description for each tool.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                            <span><strong>Inline Testing:</strong> A built-in testing utility allows users to validate functions with sample inputs and parameters directly in the UI before saving.</span>
                        </li>
                         <li className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                            <span><strong>Output Definition:</strong> After a successful test, users define the output variables that the AI agent needs to process the function's result.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                            <span><strong>Cloud Deployment:</strong> Saved functions and APIs for AI Agents are automatically deployed to the cloud, ready for immediate use.</span>
                        </li>
                    </ul>
                </div>
            </div>
        ),
        release2: release2Placeholder,
        release1Scope: 10,
        release2Scope: 0,
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
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                            <span>Provider setups are stored securely and can be reused across multiple agents.</span>
                        </li>
                         <li className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                            <span>API keys are handled on the backend and never exposed in the UI during agent configuration.</span>
                        </li>
                         <li className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                            <span>Saved providers are automatically populated in the relevant dropdowns within the agent builder.</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-semibold text-gray-700 mb-2">Supported Providers</h5>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                           <span><strong>LLM Models:</strong> OpenAI, Gemini, DeepSeek.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                           <span><strong>Transcription (STT):</strong> Azure, Deepgram, Google.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                           <span><strong>Voice (TTS):</strong> Azure, ElevenLabs, Google.</span>
                        </li>
                    </ul>
                </div>
            </div>
        ),
        release2: release2Placeholder,
        release1Scope: 6,
        release2Scope: 0,
    },
    { 
        id: 'knowledge-base', 
        title: 'Knowledge Base', 
        summary: 'Adding Text Embedded Knowledge base documents to support the AI Agents with FAQs and Guidelines',
        details: createRelease1Details([
            'Users can add more than one Knowledge base per Agent.',
            'For release one, KB documents have to be uploaded as Sheets/Excel with Question and answer columns.',
            'The KB document samples can be downloaded and reuploaded by the user.',
            'Once a KB is uploaded, the user can append more rows to the existing Q&A or replace the entire file.',
        ]),
        release2: release2Placeholder,
        release1Scope: 4,
        release2Scope: 0,
    },
    { 
        id: 'analytics', 
        title: 'Analytics', 
        summary: 'Comprehensive dashboard for tracking agent performance, user engagement, and conversation analytics.',
        details: createRelease1Details([
            'Customizable reporting dashboards.',
            'Real-time analytics stream.',
            'Sentiment analysis and topic clustering reports.'
        ]),
        release2: release2Placeholder,
        release1Scope: 3,
        release2Scope: 0,
    },
    { 
        id: 'payments', 
        title: 'Payments/Credit Model', 
        summary: 'Generous Free tier, with simple payment structure with manual support to buy credits',
        details: createRelease1Details([
            'The users can use the free tier credit to build and test the AI agents and flow agents.',
            'Once the user has reached the limit the user can then reach raise request to buy new credits from the platform or Support communities.',
            'Based on the requirement and request we will enable more credit for the requested account to test out the Agents.'
        ]),
        release2: release2Placeholder,
        release1Scope: 3,
        release2Scope: 0,
    },
];