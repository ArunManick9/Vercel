import React from 'react';

const ideas = [
    {
        title: 'Full-fledged Voice Assisted Builder',
        content: 'Users can talk to the assistant, mention their requirements, and then build Voice Agents using it.',
        bgColor: 'bg-yellow-100',
        textColor: 'text-yellow-900',
        rotation: '-rotate-3'
    },
    {
        title: 'Prompt-based GenAI Assistant',
        content: 'A prompt-based GenAI assistant which can build for the user based on the prompts entered.',
        bgColor: 'bg-pink-100',
        textColor: 'text-pink-900',
        rotation: 'rotate-2'
    },
    {
        title: 'Revamped Multi-Agents',
        content: (
            <>
                <p>Build and manage complex agent interactions:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 opacity-90">
                    <li>Build Multi-Agent systems.</li>
                    <li>Import previously created agents.</li>
                    <li>Use a flow-based builder with AI & intent nodes.</li>
                    <li>Enhanced UI for voice and chat agents.</li>
                </ul>
            </>
        ),
        bgColor: 'bg-sky-100',
        textColor: 'text-sky-900',
        rotation: '-rotate-2'
    }
];

export const FutureIdeationSlide = () => (
    <div className="p-8 bg-white rounded-lg border border-gray-200">
        <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-800">Future Release Ideation</h3>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                A mood board for our next-generation features. Here we brainstorm big ideas for the future of Vitos.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-10 pt-8 pb-4 min-h-[350px]">
            {ideas.map((idea, index) => (
                <div 
                    key={index} 
                    className={`relative p-6 rounded-lg shadow-xl transform ${idea.bgColor} ${idea.rotation} transition-transform duration-300 hover:scale-105 hover:!rotate-0 flex flex-col text-left h-full`}
                >
                    {/* Tack Pin */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 z-10">
                        <div className="w-8 h-8 bg-gray-300 rounded-full shadow-lg flex items-center justify-center ring-2 ring-white/80">
                            <div className="w-3 h-3 bg-gray-500 rounded-full shadow-inner"></div>
                        </div>
                    </div>
                    
                    <h4 className={`text-xl font-bold ${idea.textColor} mb-3 mt-5`}>{idea.title}</h4>
                    <div className={`text-base ${idea.textColor} opacity-80 flex-grow`}>{idea.content}</div>
                </div>
            ))}
        </div>
    </div>
);