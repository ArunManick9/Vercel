import React, { useState } from 'react';
import { releasePlan1Data, releasePlan2Data } from '../data/releasePlanData';
import { ReleasePlanSlide } from '../components/release_plan/ReleasePlanSlide';
import { FutureIdeationSlide } from '../components/release_plan/FutureIdeationSlide';

export const ReleasePlanView: React.FC = () => {
    const [activePlan, setActivePlan] = useState('Release Plan 1');
    const plans = ['Release Plan 1', 'Release Plan 2', 'Future Release Ideation'];

    const renderContent = () => {
        switch (activePlan) {
            case 'Release Plan 1':
                return <ReleasePlanSlide data={releasePlan1Data} />;
            case 'Release Plan 2':
                return <ReleasePlanSlide data={releasePlan2Data} />;
            case 'Future Release Ideation':
                return <FutureIdeationSlide />;
            default:
                return null;
        }
    };
    
    return (
        <div className="animate-fade-in space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                 <div className="text-left">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Release Plan</h2>
                    <p className="text-lg text-gray-600">
                        Our roadmap for upcoming features and platform enhancements.
                    </p>
                </div>
                <div className="flex-shrink-0 bg-white p-1 rounded-lg shadow-sm border border-gray-200">
                    <nav className="flex space-x-1">
                        {plans.map(plan => (
                            <button
                                key={plan}
                                onClick={() => setActivePlan(plan)}
                                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-500 ${
                                    activePlan === plan
                                        ? 'bg-rose-600 text-white shadow'
                                        : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                {plan}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            <div className="animate-slide-in" key={activePlan}>
                {renderContent()}
            </div>
            
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in { animation: fade-in 0.4s ease-out forwards; }
                
                @keyframes slide-in {
                    from { opacity: 0; transform: translateX(15px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .animate-slide-in { animation: slide-in 0.4s ease-out forwards; }
            `}</style>
        </div>
    );
};
