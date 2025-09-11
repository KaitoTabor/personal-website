import React, { useEffect, useState } from 'react';
interface LoadingScreenProps {
    onComplete: () => void;
}
const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);
    useEffect(() => {
        const startTime = Date.now();
        const duration = 2500;
        const animateProgress = () => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / duration) * 100, 100);
            setProgress(newProgress);
            if (newProgress < 100) {
                requestAnimationFrame(animateProgress);
            }
        };
        requestAnimationFrame(animateProgress);
        setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                onComplete();
            }, 500);
        }, 3000);
    }, [onComplete]);
    return (
        <div 
            className={`fixed inset-0 z-50 bg-black flex flex-col items-center justify-center transition-opacity duration-500 ${
                fadeOut ? 'opacity-0' : 'opacity-100'
            }`}
        >
            {/* Logo/Brand */}
            <div className="mb-12">
                <h1 className="text-white font-kanji text-4xl md:text-6xl font-light tracking-wider">
                    KaiTo Tabor
                </h1>
            </div>
            {/* Loading Bar Container */}
            <div className="w-80 md:w-96">
                {/* Progress Bar Background */}
                <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                    {/* Progress Bar Fill */}
                    <div 
                        className="h-full bg-white rounded-full transition-all duration-100 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                {/* Progress Percentage */}
                <div className="mt-4 text-center">
                    <span className="text-gray-400 text-sm font-mono">
                        {Math.round(progress)}%
                    </span>
                </div>
            </div>
            {/* Loading Text */}
            <div className="mt-8 text-center">
                <p className="text-gray-500 text-sm uppercase tracking-widest">
                    Loading Portfolio
                </p>
            </div>
        </div>
    );
};
export default LoadingScreen;
