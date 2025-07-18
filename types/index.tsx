import React from 'react';

export type View = 'Research' | 'Links' | 'Release Plan' | 'Vision';

export type Status = 'Done' | 'In Progress' | 'Planned';

export interface LinkData {
    url: string;
    displayText: string;
}

export interface DetailListItem {
    text: string;
    status: Status;
    link?: LinkData;
}

export interface DetailContent {
    heading?: string;
    paragraph?: string;
    list?: DetailListItem[];
    link?: LinkData;
}

export interface ReleaseItem {
    id: string;
    title: string;
    summary: string;
    details: DetailContent[];
    release2?: DetailContent[];
    release1Scope: number;
    release2Scope: number;
}