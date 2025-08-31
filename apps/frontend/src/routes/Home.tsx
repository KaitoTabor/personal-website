import React, { useState } from 'react';
import ExampleComponent from '../components/ExampleComponent.js';
import {Card, CardContent} from "@/components/ui/card";
import Waves from "@blocks/Backgrounds/Waves/Waves";
import HeroSection from "@/components/HeroSection";
import AnimatedHoverDisclosure from "@/components/playpen/AnimatedHoverDisclosure.js";
import SkillsSection from '@/components/SkillSection.js';
import AboutSection from '@/components/AboutSection.js';
import ExperienceSection from '@/components/ExperienceSection.js';

type TabType = 'about' | 'experience' | null;

const ExamplePage = () => {
    const [activeTab, setActiveTab] = useState<TabType>(null);

    const handleTabClick = (tab: TabType) => {
        setActiveTab(activeTab === tab ? null : tab);
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Wave Background - only for hero section */}
            <Waves
                className="absolute z-0"
                lineColor="rgba(0, 0, 0, 0.2)"
                backgroundColor="rgba(16, 60, 101, 1)"
                waveSpeedX={0.02}
                waveSpeedY={0.01}
                waveAmpX={40}
                waveAmpY={20}
                friction={0.9}
                tension={0.01}
                maxCursorMove={0}
                xGap={12}
                yGap={36}
                style={{ pointerEvents: "none" }}>
            </Waves>

            {/* Main Layout Container */}
            <div className="flex h-screen relative z-10">
                {/* Main Content Area */}
                <div className="flex-1 relative">
                    {/* Hero Section - Always visible when no tab is active */}
                    <div className={`absolute inset-0 transition-all duration-500 ${
                        activeTab ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100 pointer-events-auto scale-100'
                    }`}>
                        <HeroSection />
                    </div>

                    {/* About Section */}
                    <div className={`absolute inset-0 transition-all duration-500 overflow-y-auto ${
                        activeTab === 'about' ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none -translate-x-full'
                    }`}>
                        <div className="min-h-full bg-gradient-to-b from-[rgba(35,37,41,0.8)] to-[rgba(35,37,41,0.95)] p-4 md:p-8">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="font-kanji text-white text-3xl md:text-4xl">About</h2>
                                <button
                                    onClick={() => setActiveTab(null)}
                                    className="text-white hover:text-gray-300 transition-colors p-2"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <AboutSection />
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className={`absolute inset-0 transition-all duration-500 overflow-y-auto ${
                        activeTab === 'experience' ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none -translate-x-full'
                    }`}>
                        <div className="min-h-full bg-gradient-to-b from-[rgba(35,37,41,0.8)] to-[rgba(35,37,41,0.95)] p-4 md:p-8">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="font-kanji text-white text-3xl md:text-4xl">Experience</h2>
                                <button
                                    onClick={() => setActiveTab(null)}
                                    className="text-white hover:text-gray-300 transition-colors p-2"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <ExperienceSection />
                        </div>
                    </div>
                </div>

                {/* Vertical Tabs Sidebar - Moved to Right */}
                <div className="flex flex-col w-16 md:w-20 bg-black bg-opacity-30 backdrop-blur-sm">
                    {/* About Tab */}
                    <button
                        onClick={() => handleTabClick('about')}
                        className={`flex-1 flex items-center justify-center border-b border-white border-opacity-20 transition-all duration-300 hover:bg-white hover:bg-opacity-10 ${
                            activeTab === 'about' ? 'bg-white bg-opacity-20' : ''
                        }`}
                    >
                        <div className="transform -rotate-90 whitespace-nowrap">
                            <span className="font-kanji text-white text-lg md:text-xl">About</span>
                        </div>
                    </button>

                    {/* Experience Tab */}
                    <button
                        onClick={() => handleTabClick('experience')}
                        className={`flex-1 flex items-center justify-center transition-all duration-300 hover:bg-white hover:bg-opacity-10 ${
                            activeTab === 'experience' ? 'bg-white bg-opacity-20' : ''
                        }`}
                    >
                        <div className="transform -rotate-90 whitespace-nowrap">
                            <span className="font-kanji text-white text-lg md:text-xl">Experience</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ExamplePage;
