import React, { useState, useRef } from 'react';

export const ReleaseItemCard = ({ title, summary, details, release2 }: { title: string, summary: string, details: React.ReactNode, release2?: React.ReactNode }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className="border border-gray-200 rounded-lg bg-white transition-all duration-300 ease-in-out shadow-sm hover:shadow-lg focus-within:shadow-lg">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex justify-between items-start text-left p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-lg"
                aria-expanded={isExpanded}
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
                    maxHeight: isExpanded ? `${contentRef.current?.scrollHeight ?? 0}px` : '0px',
                    transition: 'max-height 0.5s ease-in-out',
                }}
                className="overflow-hidden"
            >
                <div ref={contentRef} className="px-5 pb-5 pt-4 border-t border-gray-200">
                    {details}
                    {release2 && (
                        <div className="mt-6 pt-4 border-t border-dashed border-gray-300">
                           <h5 className="text-md font-semibold text-rose-700 mb-2">Release Plan 2 Scope</h5>
                           {release2}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};