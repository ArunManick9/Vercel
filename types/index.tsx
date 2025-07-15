import React from 'react';

export type View = 'Research' | 'Links' | 'Release Plan';

export type Status = 'Done' | 'In Progress' | 'Planned';

export interface DetailListItem {
    text: string;
    status: Status;
}

export interface DetailContent {
    heading?: string;
    paragraph?: string;
    list?: DetailListItem[];
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
