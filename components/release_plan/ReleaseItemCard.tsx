import React, { useRef } from 'react';
import type { ReleaseItem, DetailContent, Status } from '../../types';
import { PieChart } from '../common/PieChart';
import { CheckCircleIcon, ClockIcon, ListBulletIcon } from '@heroicons/react/24/solid';

interface ReleaseItemCardProps extends Omit<ReleaseItem, 'id'> {
    isExpanded: boolean;
    onToggle: () => void;
}

const StatusIndicator = ({ status }: { status: Status }) => {
    switch (status) {
        case 'Done':
            return <CheckCircleIcon className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />;
        case 'In Progress':
            return <ClockIcon className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />;
        case 'Planned':
            return <ListBulletIcon className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />;
        default:
            return null;
    }
};

const renderDetails = (content: DetailContent[]) => {
    if (!content) return null;

    const isPlaceholder = content.length === 1 && content[0].paragraph && content[0].paragraph.startsWith('Details for the next release phase');

    return content.map((block, index) => (
        <div key={index} className="space-y-2">
            {block.heading && <h5 className="text-md font-semibold text-gray-700">{block.heading}</h5>}
            {block.paragraph && (
                 <p className={isPlaceholder ? 'italic text-gray-500' : ''} dangerouslySetInnerHTML={{ __html: block.paragraph }} />
            )}
            {block.list && (
                <ul className="space-y-3">
                    {block.list.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex justify-between items-start gap-4">
                            <span className="flex-1 text-gray-600" dangerouslySetInnerHTML={{ __html: item.text }} />
                            <StatusIndicator status={item.status} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    ));
};


export const ReleaseItemCard = ({ title, summary, details, release2, release1Scope, release2Scope, isExpanded, onToggle }: ReleaseItemCardProps) => {
    const contentRef = useRef<HTMLDivElement>(null);

    const totalScope = release1Scope + release2Scope;
    const r1_percentage = totalScope > 0 ? (release1Scope / totalScope) * 100 : 0;
    const r2_percentage = totalScope > 0 ? (release2Scope / totalScope) * 100 : 0;

    return (
        <div className="border border-gray-200 rounded-lg bg-white transition-all duration-300 ease-in-out shadow-sm hover:shadow-lg focus-within:shadow-lg">
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-start text-left p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-lg"
                aria-expanded={isExpanded}
            >
                <div className="flex-grow pr-4">
                    <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{summary}</p>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                    <div className="flex flex-col items-center">
                        <PieChart value1={r1_percentage} value2={r2_percentage} />
                         <div className="flex items-center gap-2.5 mt-1.5 text-xs font-medium text-gray-500">
                            <div className="flex items-center gap-1" title="Release 1 Scope">
                                <CheckCircleIcon className="w-3.5 h-3.5 text-rose-500" />
                                <span>R1</span>
                            </div>
                            <div className="flex items-center gap-1" title="Release 2 Scope">
                                <ClockIcon className="w-3.5 h-3.5 text-purple-400" />
                                <span>R2</span>
                            </div>
                        </div>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 transform transition-transform duration-300 flex-shrink-0 text-gray-400 self-center ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>
            <div
                style={{
                    maxHeight: isExpanded ? `${contentRef.current?.scrollHeight ?? 0}px` : '0px',
                    transition: 'max-height 0.5s ease-in-out',
                }}
                className="overflow-hidden"
            >
                <div ref={contentRef} className="px-5 pb-5 pt-4 border-t border-gray-200">
                    <div className="flex justify-end mb-4">
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-xs">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="flex items-center gap-2">
                                    <CheckCircleIcon className="w-4 h-4 text-green-500 shrink-0" />
                                    <span className="font-medium text-gray-600">Done</span>
                                 </div>
                                <div className="flex items-center gap-2">
                                    <ClockIcon className="w-4 h-4 text-yellow-500 shrink-0" />
                                    <span className="font-medium text-gray-600">In Progress</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ListBulletIcon className="w-4 h-4 text-gray-400 shrink-0" />
                                    <span className="font-medium text-gray-600">Planned</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-sm text-gray-600 space-y-4">
                        {renderDetails(details)}
                    </div>
                    {release2 && (
                        <div className="mt-6 pt-4 border-t border-dashed border-gray-300">
                           <h5 className="text-md font-semibold text-purple-700 mb-2">Release Plan 2 Scope</h5>
                           <div className="text-sm text-gray-600 space-y-4">
                                {renderDetails(release2)}
                           </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};