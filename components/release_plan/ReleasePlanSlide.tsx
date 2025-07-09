import React from 'react';
import type { ReleaseItem } from '../../types';
import { ReleaseItemCard } from './ReleaseItemCard';

export const ReleasePlanSlide = ({ data }: { data: ReleaseItem[] }) => {
    return (
        <div className="flex flex-col gap-4">
            {data.map(item => (
                <ReleaseItemCard
                    key={item.id}
                    title={item.title}
                    summary={item.summary}
                    details={item.details}
                />
            ))}
        </div>
    );
};
