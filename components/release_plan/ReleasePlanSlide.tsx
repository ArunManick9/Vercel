import React, { useState } from 'react';
import type { ReleaseItem } from '../../types';
import { ReleaseItemCard } from './ReleaseItemCard';

export const ReleasePlanSlide = ({ data }: { data: ReleaseItem[] }) => {
    const [openItemId, setOpenItemId] = useState<string | null>(null);

    const handleToggle = (itemId: string) => {
        setOpenItemId(prevOpenItemId => (prevOpenItemId === itemId ? null : itemId));
    };

    return (
        <div className="flex flex-col gap-4">
            {data.map(item => (
                <ReleaseItemCard
                    key={item.id}
                    title={item.title}
                    summary={item.summary}
                    details={item.details}
                    release2={item.release2}
                    release1Scope={item.release1Scope}
                    release2Scope={item.release2Scope}
                    isExpanded={openItemId === item.id}
                    onToggle={() => handleToggle(item.id)}
                />
            ))}
        </div>
    );
};