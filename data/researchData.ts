export type ResearchTab = 'Market Landscape' | 'Key Players' | 'Market Capturing Approaches' | 'Resources';
export const researchTabs: ResearchTab[] = ['Market Landscape', 'Key Players', 'Market Capturing Approaches', 'Resources'];

export const marketLandscapeData = [
    {
        title: "Market Size Projections",
        color: "bg-yellow-100",
        rotation: "-rotate-2",
        content: [
            "The Conversational AI Market is projected to grow from <strong>$13.2 billion</strong> in 2024 to <strong>$49.9 billion</strong> by 2030.",
            "Global market size was estimated at <strong>$11.2 billion</strong> by the end of 2024, with a projected CAGR of <strong>23%</strong> from 2025 to 2030."
        ]
    },
    {
        title: "Business & Industry Projections",
        color: "bg-green-100",
        rotation: "rotate-1",
        content: [
            "<strong>Leading Segment:</strong> Solutions Segment (61% of global revenue).",
            "<strong>Rapid Growth Segment:</strong> Managed Services.",
            "<strong>Highest CAGR Industry:</strong> Healthcare & Life Sciences.",
            "<strong>Highest CAGR Professional Vertical:</strong> Support & Maintenance.",
            "<strong>Fast Growing Verticals:</strong> BFSI, IT & Telecom, Retail & E-commerce, Media & Entertainment.",
        ]
    },
    {
        title: "Country & Region Projections",
        color: "bg-blue-100",
        rotation: "rotate-2",
        content: [
            "<strong>Highest Growth Region:</strong> North America (highest CARG).",
            "<strong>Highest Growth Country:</strong> Saudi Arabia (projected to reach $1.3 billion by 2030).",
            "<strong>US Market Focus:</strong> Health, Retail, and Finance.",
            "<strong>EU Market Focus:</strong> Retail, Banking, and Automotive.",
            "<strong>Asia Pacific Focus:</strong> E-commerce.",
        ]
    },
    {
        title: "Pioneers",
        color: "bg-rose-100",
        rotation: "-rotate-1",
        content: [
            "<strong>Tech Giants leading implementation:</strong> Amazon, Google, Walmart, Microsoft.",
            "<strong>Example:</strong> Walmart's GenAI search uses natural language to generate comprehensive product lists, simplifying the customer's decision-making process."
        ]
    }
];
export const keyPlayersData = [
    {
        title: "Powerful Leaders",
        color: "bg-orange-100",
        rotation: "rotate-1",
        content: [
            "<strong>Players:</strong> Google Dialogflow, Amazon Lex, Microsoft Bot Framework.",
            "<strong>Model:</strong> Pay-as-you-go | Direct & third-party deployment | 24/7 global support."
        ]
    },
    {
        title: "No-Code/Low-Code Players",
        color: "bg-purple-100",
        rotation: "-rotate-2",
        content: [
            "<strong>Players:</strong> Kore.ai, Cognigy, Yellow.ai.",
            "<strong>Strengths:</strong> Strong omnichannel automation, multilingual capabilities.",
            "<strong>Model:</strong> Subscription-based | Direct & third-party deployments | 24/7 global support."
        ]
    },
    {
        title: "Service Automation & AI Solutions",
        color: "bg-teal-100",
        rotation: "rotate-2",
        content: [
            "<strong>Players:</strong> Aisera, Liveperson, Uniphore.",
            "<strong>Strengths:</strong> Speech analytics, enterprise automation, multichannel engagement.",
            "<strong>Target:</strong> Large enterprises & Fortune 500 companies seeking AI-driven solutions."
        ]
    },
    {
        title: "CX-Focused Players",
        color: "bg-pink-100",
        rotation: "-rotate-1",
        content: [
            "<strong>Players:</strong> Sprinklr, Onereach.ai, Verint.",
            "<strong>Niche Focus:</strong> Omilia, Netomi (Banking & healthcare focused).",
            "<strong>Model:</strong> ARR-based pricing | Direct & third-party vendors | 24/7 global support."
        ]
    }
];
export const marketApproachesData = [
    {
        title: "System Integrators",
        color: "bg-lime-100",
        rotation: "rotate-2",
        content: [
            "<strong>Key Players:</strong> Verint, Cognigy, Kore.ai, Sprinklr, and Onereach.ai.",
            "<strong>Strategy:</strong> Work closely with global SIs like Accenture, Capgemini, and Deloitte to deliver end-to-end AI implementations."
        ]
    },
    {
        title: "Direct Sales",
        color: "bg-sky-100",
        rotation: "-rotate-1",
        content: [
            "<strong>Key Players:</strong> Google, Microsoft, Amazon, Uniphore, Amilea, Live persons.",
            "<strong>Strategy:</strong> Prioritize direct sales, targeting large enterprises.",
            "<strong>Method:</strong> Build industry-specific models to target clients based on their strengths."
        ]
    },
    {
        title: "BPO & Outsourcing",
        color: "bg-amber-100",
        rotation: "rotate-1",
        content: [
            "<strong>BPO Partnerships:</strong> Aisera, Omilia, Netomi partner with providers like Teleperformance, Concentrix, and Alorica.",
            "<strong>Telecom Partnerships:</strong> Omilia and Aisera partner with providers like AT&T, Vodafone, and BT to embed AI into customer support."
        ]
    },
    {
        title: "Value-Added Resellers (VARs)",
        color: "bg-fuchsia-100",
        rotation: "-rotate-2",
        content: [
            "<strong>Platform Players:</strong> Kore.ai, Cognigy, and Ada use partner programs for regional resellers to package AI with CRM and other platforms.",
            "<strong>CX Specialists:</strong> Sprinklr and Verint work with CX VARs who bundle conversational AI with analytics and experience platforms."
        ]
    },
    {
        title: "Cloud & SaaS Distribution",
        color: "bg-cyan-100",
        rotation: "rotate-2",
        content: [
            "<strong>Key Players:</strong> Kore.ai, Netomi.",
            "<strong>Model:</strong> Extend SaaS-based models where businesses can subscribe to solutions without complex IT deployment.",
            "<strong>Target Audience:</strong> SMEs and large enterprises looking for rapid AI adoption."
        ]
    }
];
export const resources = [
    { title: "Grand View Research: Conversational AI Market Size Outlook", url: "https://www.grandviewresearch.com/horizon/outlook/conversational-ai-market-size/global" },
    { title: "Gartner: How to Prepare for the Impact of Generative AI", url: "https://www.gartner.com/doc/reprints?id=1-2K1VNJ3Y&ct=250124&st=sb" },
    { title: "Grand View Research: Conversational AI Market Report", url: "https://www.grandviewresearch.com/industry-analysis/conversational-ai-market-report" },
    { title: "MarketsandMarkets: Conversational AI Market Report", url: "https://www.marketsandmarkets.com/Market-Reports/conversational-ai-market-49043506.html" },
    { title: "Medium: The Conversational AI Technology Landscape", url: "https://cobusgreyling.medium.com/the-conversational-ai-technology-landscape-version-5-0-840290d97c7f" },
    { title: "Infobip: The Road to Conversational AI Market Success", url: "https://www.infobip.com/blog/conversational-ai-market" },
    { title: "LinkedIn: Global Landscape of Conversational AI", url: "https://www.linkedin.com/pulse/global-landscape-conversational-ai-its-impact-ccaas-michael-donohue--vf6ce" },
    { title: "Yellow.ai Docs: Voice Overview", url: "https://docs.yellow.ai/docs/cookbooks/voice-as-channel/voiceoverview" }
];
