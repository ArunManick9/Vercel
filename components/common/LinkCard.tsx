import React from 'react';
import { ExternalLinkIcon } from '../icons';

export const LinkCard = ({ title, url }: { title: string, url:string }) => (
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
