import React, { useEffect, useRef, useState } from 'react';
interface LoadingScreenProps {
    onComplete: () => void;
}
const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [progress, setProgress] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
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
                setIsVisible(false);
                onComplete();
            }, 600);
        }, 3000);
    }, [onComplete]);
    if (!isVisible) return null;
    return (
        <div 
            ref={containerRef}
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-600 ${
                fadeOut ? 'opacity-0' : 'opacity-100'
            }`}
            style={{
                background: 'linear-gradient(135deg, #0369a1 0%, #0284c7 50%, #0ea5e9 100%)'
            }}
        >
            {/* Logo/Brand */}
            <div className="mb-8 animate-[logoEntrance_1s_ease-out_forwards] opacity-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                    <span className="text-4xl md:text-5xl font-bold text-white font-kanji">
                        海
                    </span>
                </div>
            </div>
            {/* Animated Waves */}
            <div className="flex space-x-2 mb-8 animate-[waveEntrance_0.8s_ease-out_0.5s_forwards] opacity-0">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="w-3 h-8 bg-white/80 rounded-full animate-[wave_2s_ease-in-out_infinite_alternate]"
                        style={{ 
                            animationDelay: `${i * 0.2}s`,
                            transform: 'translateY(0)'
                        }}
                    />
                ))}
            </div>
            {/* Loading Text */}
            <div className="text-center animate-[textEntrance_0.6s_ease-out_1s_forwards] opacity-0">
                <h2 className="text-2xl md:text-3xl font-light text-white mb-4 font-kanji">
                    KaiTo Tabor
                </h2>
                <p className="text-white/70 text-sm md:text-base mb-6">
                    Preparing your experience...
                </p>
                {/* Progress Bar */}
                <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-white/80 rounded-full transition-all duration-100 ease-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                {/* Progress Percentage */}
                <div className="mt-2 text-white/60 text-sm">
                    {Math.round(progress)}%
                </div>
            </div>
            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 md:w-2 md:h-2 bg-white/20 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 4}s`
                        }}
                    />
                ))}
            </div>
            {/* Custom CSS Animations */}
            <style jsx>{`
                @keyframes logoEntrance {
                    0% {
                        opacity: 0;
                        transform: scale(0.5) translateY(30px);
                    }
                    60% {
                        transform: scale(1.1) translateY(0);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
                @keyframes waveEntrance {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes textEntrance {
                    from {
                        opacity: 0;
                        transform: translateY(15px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes wave {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
            `}</style>
        </div>
    );
};
export default LoadingScreen;
