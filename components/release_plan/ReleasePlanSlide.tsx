import React, { useState } from 'react';
import type { ReleaseItem } from '../../types';
import { ReleaseItemCard } from './ReleaseItemCard';

interface ReleasePlanSlideProps {
    data: ReleaseItem[];
}

export const ReleasePlanSlide = ({ data }: ReleasePlanSlideProps) => {
    const [openItemId, setOpenItemId] = useState<string | null>(null);

    const handleToggle = (itemId: string) => {
        setOpenItemId(currentOpenId => (currentOpenId === itemId ? null : itemId));
    };

    return (
        <div className="flex flex-col gap-4">
            {data.map(item => (
                <div key={item.id}>
                    <ReleaseItemCard
                        title={item.title}
                        summary={item.summary}
                        details={item.details}
                        release2={item.release2}
                        release1Scope={item.release1Scope}
                        release2Scope={item.release2Scope}
                        isExpanded={openItemId === item.id}
                        onToggle={() => handleToggle(item.id)}
                    />
                </div>
            ))}
        </div>
    );
};