import React from 'react';

export type View = 'Research' | 'Links' | 'Release Plan';

export interface ReleaseItem {
    id: string;
    title: string;
    summary: string;
    details: React.ReactNode;
}