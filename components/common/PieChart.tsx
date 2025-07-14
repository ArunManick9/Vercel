import React from 'react';

interface PieChartProps {
    value1: number; // Percentage for R1
    value2: number; // Percentage for R2
    size?: number;
    strokeWidth?: number;
}

export const PieChart: React.FC<PieChartProps> = ({ value1, value2, size = 52, strokeWidth = 7 }) => {
    const center = size / 2;
    const radius = center - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    const v1_dash = (value1 / 100) * circumference;
    const v2_dash = (value2 / 100) * circumference;
    
    // Rotation for the second slice to start after the first one ends
    const r2_rotation = (value1 / 100) * 360;

    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
            {/* Background circle */}
            <circle
                cx={center}
                cy={center}
                r={radius}
                fill="transparent"
                stroke="currentColor"
                className="text-gray-200"
                strokeWidth={strokeWidth}
            />
            {/* Release 2 Slice (rendered first to be in the background) */}
            {value2 > 0 && (
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="transparent"
                    stroke="currentColor"
                    className="text-purple-400"
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${v2_dash} ${circumference}`}
                    strokeLinecap="round"
                    style={{ transformOrigin: 'center', transform: `rotate(${r2_rotation}deg)` }}
                />
            )}
            {/* Release 1 Slice (rendered second to be in the foreground) */}
            {value1 > 0 && (
                 <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="transparent"
                    stroke="currentColor"
                    className="text-rose-500"
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${v1_dash} ${circumference}`}
                    strokeLinecap="round"
                 />
            )}
        </svg>
    );
};
