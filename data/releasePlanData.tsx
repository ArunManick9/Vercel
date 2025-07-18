import type { ReleaseItem, DetailContent } from '../types';

const release2Placeholder: DetailContent[] = [{
    paragraph: "Details for the next release phase will be outlined here. This may include enhancements, new features, or extensions of the current capabilities."
}];

export const releasePlan1Data: ReleaseItem[] = [
    { 
        id: 'platform', 
        title: 'Platform', 
        summary: 'Vitos Platform capabilities, Workspaces, access control, security etc.',
        details: [
            {
                heading: "Accessing Vitos Platform",
                paragraph: "The <strong>Vitos Platform</strong> can be accessed in two ways:",
                list: [
                    { text: "<strong>As a Standalone Application</strong> – Users can access the full capabilities of Vitos independently.", status: 'Done' },
                    { text: "<strong>Within Kapture’s Configuration</strong> – Integrated into Kapture for seamless usage by existing partners.", status: 'Done' },
                ]
            },
            {
                heading: "Workspace Management",
                list: [
                    { text: "<strong>Standalone Access:</strong> Users can create <strong>multiple workspaces</strong> tailored to their specific needs or departments.", status: 'Done' },
                    { text: "<strong>Kapture Integration (for existing partners):</strong> Each partner receives <strong>a single dedicated workspace</strong> as part of the integration.", status: 'Done' }
                ]
            },
            {
                heading: "Resources and Product Onboarding",
                list: [
                    { text: '<strong>First time product onboarding and Assistance</strong> – Product Onboarding Flow, tours and Assist mode', status: 'In Progress' },
                    { text: "<strong>Documentation</strong> – Complete documentation of Vitos Release one for assisting users - <a href=\"https://dev.kapture.cx/docs-vitos\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-rose-600 underline font-medium\">Link</a>", status: 'Done' },
                    { text: '<strong>Video content</strong> – Initial Videos helping user Deploy Agents created in our portal(Manual Process)', status: 'In Progress' },
                ]
            },
        ],
        release2: [{
            list: [
                { text: '<strong>User Behavior Analytics:</strong> Focus on user behavior in Application in standalone application.', status: 'Planned' },
                { text: '<strong>Proactive Marketing:</strong> Tracking the users fall-off points and implementing proactive product marketing through emails and webinars.', status: 'In Progress' },
                { text: '<strong>Educational Content:</strong> YouTube Tutorials on best practices on building bots.', status: 'In Progress' },
            ]
        }],
        release1Scope: 5,
        release2Scope: 3,
    },
    { 
        id: 'build-ai', 
        title: 'Building AI Agents', 
        summary: 'Creating AI agents, Prompt based bot, DIY builder, Flexible Model Providers and tools selections',
        details: [
            {
                paragraph: "Users can create AI agents, which are prompt-based Voice Agents."
            },
            {
                heading: "Key Capabilities & Integrations",
                list: [
                    { text: '<strong>Vertex Integration:</strong> Energy Clients can use their pre-built Vertex setup to build bots with ready integration from Step 1.', status: 'Done' },
                    { text: '<strong>Customer Data Fetching(Vertex):</strong> With correct credentials, bots can fetch customer and billing information using the marketer account number.', status: 'Done' },
                    { text: '<strong>Provider Flexibility:</strong> Users have the flexibility to select their own LLM Models, Transcriber, and Voice Providers.', status: 'Done' },
                    { text: '<strong>Custom Functions & APIs:</strong> Integrate Custom Functions (Python scripts) and APIs (REST supported) as pre-call, post-call, or in-prompt actions.', status: 'Done' },
                    { text: '<strong>Knowledge Base Integration:</strong> Link a Knowledge Base to an agent. This release supports FAQ formats in Excel.', status: 'Done' }
                ]
            },
            {
                heading: "Agent Configuration",
                list: [
                    { text: '<strong>Customizable Agent Settings:</strong> Configure custom messages (e.g., Welcome, Thank You), temperature, max tokens, and enable/disable caching.', status: 'Done' }
                ]
            },
            {
                heading: "Essential Voice Configuration Options",
                list: [
                    { text: '<strong>Voice Customization:</strong> Create voices for AI agents with choices for gender, language, accent, and various voice providers.', status: 'Done' },
                    { text: '<strong>Advanced Voice Features:</strong> Includes different voice suggestions, audio caching, and the ability to test voice prompts directly on the UI.', status: 'Done' }
                ]
            },
            {
                heading: "Template For Building Agents",
                list: [
                    { text: '<strong>Industry Templates:</strong> Having pre-built templates for Major industries and important/most common use cases.', status: 'In Progress' },
    
                ]
            },
            
        ],
        release2: [{
            list: [
                { text: '<strong>Advanced Voice Creation:</strong> Advanced Voice creation options like Voice cloning, flexibility in determining the Pitch, tone, and speech rate.', status: 'In Progress' },
                { text: '<strong>Advanced Transcriber Config:</strong> Advanced options for configuring a transcriber like Speech amplification and noise cancellation will be enabled.', status: 'Planned' },
                { text: '<strong>Dual Voice/Chat Agent Creation:</strong> A Conversational Chat Agent will also be built while creating a Voice Agent (as soon as models and tools are defined).', status: 'In Progress' },
                { text: '<strong>Multi-Agent Systems:</strong> Capability to build Multi Agents using the platform', status: 'Planned' },
                { text: '<strong>Specific Model Selection:</strong> User should be able to mention the model along with the provider Example: Open -> GPT 4o, GPT 4 Turbo; Google-> Gemini 1.5 Pro, Gemini 1.5 Flash', status: 'Planned' },
            ]
        }],
        release1Scope: 9,
        release2Scope: 5,
    },
    {
        id: 'multi-agents',
        title: 'Multi Agents',
        summary: 'Orchestrate multiple specialized AI agents to work together on complex tasks.',
        details: [{
            paragraph: "No Multi Agent Capabilities are available on Release 1"
        }],
        release2: [{
            heading: 'Multi Agent',
            list: [
                { text: '<strong>Unified Agent Platform:</strong> Users will get a unified platform to create flow Agents, Individual Agents and will be able to build Multi Agents on the same space.', status: 'Planned' },
                { text: '<strong>Agent Import & Composition:</strong> Users can import Agents, send messages, options, include functions and build new Agents and subagents on the go.', status: 'Planned' },
                { text: '<strong>Chat & Voice Support:</strong> Both Chat Agents and Voice agents are supported.', status: 'Planned' },
                { text: '<strong>Advanced Routing & Logic:</strong> Intent based routing and logic based flow can be configured in the screen, with enhanced UX.', status: 'Planned' },
            ]
        }],
        release1Scope: 0,
        release2Scope: 4,
    },
    { 
        id: 'test-ai', 
        title: 'Testing AI Agents', 
        summary: 'Live testing Web based, Agent is one click away from being experienced by the user who is building, enabling parallel testing',
        details: [{
            heading: "Features & Details:",
            list: [
                { text: '<strong>Live Testing Panel:</strong> Users can use the testing panel on the right side to test the voice agent.', status: 'Done' },
                { text: '<strong>Transcriber Display & Reset:</strong> The testing panel includes a transcriber display and a reset option.', status: 'Done' },
                { text: '<strong>Instantaneous Updates:</strong> Test the agent instantly with all the latest changes to the transcriber, voice, prompt, etc.', status: 'Done' },
            ]
        }],
        release2: [{
            list: [
                { text: '<strong>Chat-based Testing:</strong> The user will also have a chat option to test at the web level in addition to the existing voice option.', status: 'In Progress' },
                { text: '<strong>Configuration Verification via Chat:</strong> The user can check the LLM model and the tools configured directly by chatting with the AI agent instead of speaking and testing all the time.', status: 'In Progress' },
                { text: '<strong>Bot-to-Bot Testing:</strong> Enabling bot to bot testing for the users', status: 'Planned' },
                { text: '<strong>Shareable Test Links:</strong> Users can create a bot and share a web view URl with their team to test and experience the AI agent created', status: 'Planned' },
            ]
        }],
        release1Scope: 3,
        release2Scope: 4,
    },
    { 
        id: 'deploy-ai', 
        title: 'Deploying AI agents', 
        summary: 'Linking the AI agents to an actual phone number, supporting multiple telephony partners',
        details: [{
            heading: "Features & Details:",
            list: [
                { text: '<strong>Manual Deployment:</strong> Manual Deploy options enabled for AI agents that are built.', status: 'Done' },
                { text: '<strong>Telephony Provider Selection:</strong> User can select any configuration saved for a telephony service provider from the deploy screen.', status: 'Done' },
                { text: '<strong>Configurable Webhook URL:</strong> User will get a configurable URL on the UI which has to be configured in the respective telephony provider dashboard.', status: 'Done' },
                { text: '<strong>Deployment Guides:</strong> Based on the provider selected, a short guide is given to the user on how to configure the URL to make the Voice Agent Live.', status: 'Done' }
            ]
        }],
        release2: [{
            list: [
                { text: '<strong>API-Based Deployment:</strong> User will have API-based Deployment for Voice Agents.', status: 'Planned' },
                { text: '<strong>Automated Deployment:</strong> Users will provide their credentials or some form of authentication to connect with their telephony partner and trigger deployment automatically from the Vitos portal.', status: 'Planned' },
                { text: '<strong>Chat Agent Webhooks:</strong> Users will also have webhooks for AI Chat Agents that they can use on their websites or chat channels like WhatsApp, Instagram, or Facebook.', status: 'Planned' },
            ]
        }],
        release1Scope: 4,
        release2Scope: 3,
    },
    { 
        id: 'build-test-flow', 
        title: 'Building & Testing Flow Agents', 
        summary: 'A visual flow builder with an integrated testing framework to ensure reliability and accuracy.',
        details: [{
            heading: "Features & Details:",
            list: [
                { text: '<strong>Visual Flow Builder:</strong> Drag-and-drop interface for flow design.', status: 'Done' },
                { text: '<strong>Integration/Action Nodes:</strong> New nodes: API calls, database queries, custom code execution.', status: 'Done' },
                { text: '<strong>Reusable Sub-flows:</strong> Sub-flows for creating reusable components.', status: 'Done' },
                { text: '<strong>Visual Debugging:</strong> Visual path tracing to debug conversation flows.', status: 'Done' },
                { text: '<strong>New CRM Widgets:</strong> Added widgets for Freshdesk and Zendesk platforms', status: 'In Progress' },
            ]
        }],
        release2: [{
            list: [
                { text: '<strong>Node-Level Unit Testing:</strong> Unit tests for individual nodes.', status: 'Planned' },
                { text: '<strong>End-to-End Integration Testing:</strong> Integration testing simulation.Running APIs at node level and calling out missing components', status: 'Planned' },
                { text: '<strong>Fastlane Widget Enhancement: Commonly used ML APIs used in fastlane like intent recoginition, sentiments etc.,</strong> Enhanced widgets for Fastlane.', status: 'Planned'},
                { text: '<strong>Seamless CRM Integration:</strong> Users will have a provision to add their CRM platform credentials and then will have widgets in the flow builder to integrate them smoothly for easy actions like creating a ticket, updating a ticket, etc.', status: 'Planned' },
            ]
        }],
        release1Scope: 6,
        release2Scope: 3,
    },
    { 
        id: 'deploy-flow', 
        title: 'Deploying Flow Agents', 
        summary: 'One-click deployment to various environments and channels for flow agents.',
        details: [{
            heading: "Features & Details:",
            list: [
                { text: '<strong>Omnichannel Deployment:</strong> Seamless deployment to web and mobile channels', status: 'Done' },
                { text: '<strong>A/B Testing:</strong> A/B testing for different flow versions.', status: 'In Progress' },
                { text: '<strong>Flexible User Deployment:</strong> Supporting both Registered and non registered user deployment', status: 'Done' }
            ]
        }],
        release2:  [{
            list: [
                { text: '<strong>Social Media Channels</strong> One-Click deployment to Social Medial channels for the configuration saved by the user', status: 'Planned' },
               ]
        }],
        release1Scope: 3,
        release2Scope: 0,
    },
    { 
        id: 'channel', 
        title: 'Channels', 
        summary: 'Configuring Voice channels, chat platforms and social media platforms to deploy or run the Agents created in Vitos.',
        details: [{
            heading: "Features & Details:",
            list: [
                { text: '<strong>Reusable Configurations:</strong> Save and reuse channel configurations for quick and efficient bot deployment.', status: 'Done' },
                { text: '<strong>Dedicated Voice Channels:</strong> Support for dedicated Voice channels for GenAI Voice Agents.', status: 'Done' },
                { text: '<strong>Multi-Platform Deployment:</strong> Configuration for deploying Flow Agents across Social Media Platforms and websites.', status: 'Done' },
                { text: '<strong>Saved Configuration List:</strong> List of all configurations saved ad visible when the user tries to deploy the agents created', status: 'Done' }
            ]
        }],
        release2: release2Placeholder,
        release1Scope: 4,
        release2Scope: 0,
    },
    { 
        id: 'integrations', 
        title: 'Integrations', 
        summary: 'Integrate API requests, Custom function codes that can be triggered during the flow/conversation, before and after.',
        details: [
            {
                paragraph: "Users can add and manage reusable APIs and Custom Functions ('Tools') within a workspace, making them accessible to all Agents. The platform displays usage counts for each tool, and they can be edited after creation."
            },
            {
                heading: "Tool Categories",
                list: [
                    { text: '<strong>AI Agent Tools (Python):</strong><ul class="list-disc list-inside pl-5 mt-2 space-y-1"><li><strong>Pre-Action:</strong> Triggered before a call begins.</li><li><strong>In-Prompt:</strong> Used in real-time during a conversation. The function\'s description is critical, as it informs the LLM when to trigger the tool.</li><li><strong>Post-Action:</strong> Executed after the conversation ends.</li></ul>', status: 'Done' },
                    { text: '<strong>Flow Agent Tools (REST API & JavaScript):</strong><ul class="list-disc list-inside pl-5 mt-2 space-y-1"><li>Functions and APIs are configured as nodes directly within the visual flow builder.</li></ul>', status: 'Done' }
                ]
            },
            {
                heading: "Creating a New Tool",
                list: [
                    { text: '<strong>Name & Description:</strong> Provide a clear name and a detailed description for each tool.', status: 'Done' },
                    { text: '<strong>Inline Testing:</strong> A built-in testing utility allows users to validate functions with sample inputs and parameters directly in the UI before saving.', status: 'Done' },
                    { text: '<strong>Output Definition:</strong> After a successful test, users define the output variables that the AI agent needs to process the function\'s result.', status: 'Done' },
                    { text: '<strong>Cloud Deployment:</strong> Saved functions and APIs for AI Agents are automatically deployed to the cloud, ready for immediate use.', status: 'Done' }
                ]
            }
        ],
        release2: [{
            list: [
                { text: '<strong>Advanced API Triggers:</strong> Calling Multiple APIs in one configuration, Sequential and parallel triggers', status: 'Planned' },
            ]
        }],
        release1Scope: 6,
        release2Scope: 1,
    },
    { 
        id: 'providers', 
        title: 'Providers', 
        summary: 'Configure and save provider information in one place, allowing plug-and-play selection when building agents.',
        details: [
            {
                paragraph: "Users can securely save their provider configurations (e.g., API keys) for services like LLM, Transcription, and Voice, making them available for plug-and-play use when building agents."
            },
            {
                heading: "Key Features",
                list: [
                    { text: '<strong>Secure & Reusable Setups:</strong> Provider setups are stored securely and can be reused across multiple agents.', status: 'Done' },
                    { text: '<strong>Backend Key Management:</strong> API keys are handled on the backend and never exposed in the UI during agent configuration.', status: 'Done' },
                    { text: '<strong>Auto-populated Dropdowns:</strong> Saved providers are automatically populated in the relevant dropdowns within the agent builder.', status: 'Done' }
                ]
            },
            {
                heading: "Supported Providers",
                list: [
                    { text: '<strong>LLM Models:</strong> OpenAI, Gemini, DeepSeek.', status: 'Done' },
                    { text: '<strong>Transcription (STT):</strong> Azure, Deepgram, Google.', status: 'Done' },
                    { text: '<strong>Voice (TTS):</strong> Azure, ElevenLabs, Google.', status: 'Done' },
                    { text: '<strong>Platforms:</strong> Freshdesk and Zendesk', status: 'In Progress' }
                ]
            }
        ],
         release2: [{
            list: [
                { text: '<strong>Direct Platform Integration:</strong>  Users can directly link any of their Agent Platform by sharing corresponding Domains URLs and keys', status: 'In Progress' },
            ]
        }],
        release1Scope: 6,
        release2Scope: 1,
    },
    { 
        id: 'knowledge-base', 
        title: 'Knowledge Base', 
        summary: 'Adding Text Embedded Knowledge base documents to support the AI Agents with FAQs and Guidelines',
        details: [{
            heading: "Features & Details:",
            list: [
                { text: '<strong>Multiple KBs per Agent:</strong> Users can add more than one Knowledge base per Agent.', status: 'Done' },
                { text: '<strong>Excel/Sheet Upload:</strong> For release one, KB documents have to be uploaded as Sheets/Excel with Question and answer columns.', status: 'Done' },
                { text: '<strong>Downloadable Templates:</strong> The KB document samples can be downloaded and reuploaded by the user.', status: 'Done' },
                { text: '<strong>Append or Replace Data:</strong> Once a KB is uploaded, the user can append more rows to the existing Q&A or replace the entire file.', status: 'Done' }
            ]
        }],
        release2: release2Placeholder,
        release1Scope: 4,
        release2Scope: 0,
    },
    { 
        id: 'analytics', 
        title: 'Analytics', 
        summary: 'Comprehensive dashboard for tracking agent performance, user engagement, and conversation analytics.',
        details: [{
            paragraph: "Details for Release Plan 1 are being finalized and will be added soon."
        }],
        release2: [{
            heading: 'Enhanced Analytics for Voice, Chat, and Flow Agents',
            list: [
                { text: '<strong>Dedicated Analytics Tabs:</strong> Separate sub-tabs for GenAI Voice, Chat, and Flow agents for focused analysis.', status: 'Planned' },
                { text: '<strong>AI Agent Performance Tracking:</strong> Track intents, sentiments, drop-offs, unidentified utterances, bot health, and call statistics.', status: 'Planned' },
                { text: '<strong>Flow Agent CX Metrics:</strong> Monitor CSAT, resolution rate, trends, completion rates, and other key customer experience parameters.', status: 'Planned' },
            ]
        }],
        release1Scope: 0,
        release2Scope: 3,
    },
    { 
        id: 'payments', 
        title: 'Payments/Credit Model', 
        summary: 'Generous Free tier, with simple payment structure with manual support to buy credits',
        details: [{
            heading: "Features & Details:",
            paragraph:"Notes on Payment Policy briefings : <a href=\"https://www.notion.so/Finalizing-Payment-and-billing-20266e066d5180d68c09fb2638af1479?source=copy_link\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-rose-600 underline font-medium\">Link</a>",
            list: [
                { text: '<strong>Generous Free Tier:</strong> The users can use the free tier credit to build and test the AI agents and flow agents.', status: 'Planned' },
                { text: '<strong>Manual Credit Purchase:</strong> Once the user has reached the limit the user can then reach raise request to buy new credits from the platform or Support communities.', status: 'Planned' },
                { text: '<strong>On-Demand Credit:</strong> Based on the requirement and request we will enable more credit for the requested account to test out the Agents.', status: 'Planned' }
            ]
        }],
        release2: release2Placeholder,
        release1Scope: 3,
        release2Scope: 0,
    },
];