import React from 'react';

export const FutureIdeationSlide = () => (
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
