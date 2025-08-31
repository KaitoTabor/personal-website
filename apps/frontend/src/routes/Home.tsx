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
            <div className="flex h-screen relative z-10 items-center justify-center">
                {/* Hero Section Container */}
                <div className="relative flex items-center">
                    {/* Hero Content Area */}
                    <div className="relative">
                        {/* Hero Section - Always visible when no tab is active */}
                        <div className={`transition-all duration-500 ${
                            activeTab ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100 pointer-events-auto scale-100'
                        }`}>
                            <HeroSection />
                        </div>

                        {/* About Section - Covers only hero area, not sidebar */}
                        <div className={`absolute top-[2vh] left-[2vh] md:top-[5vw] md:left-[5vw] w-[49vh] h-[70vh] md:w-[73.5vw] md:h-[49vw] transition-all duration-500 overflow-y-auto ${
                            activeTab === 'about' ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none -translate-x-full'
                        }`}>
                            <div className="w-full h-full bg-gradient-to-b from-[rgba(35,37,41,0.9)] to-[rgba(35,37,41,0.95)] p-4 md:p-8 flex flex-col">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="font-kanji text-white text-2xl md:text-3xl">About</h2>
                                    <button
                                        onClick={() => setActiveTab(null)}
                                        className="text-white hover:text-gray-300 transition-colors p-2"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex-1 overflow-y-auto">
                                    <AboutSection />
                                </div>
                            </div>
                        </div>

                        {/* Experience Section - Covers only hero area, not sidebar */}
                        <div className={`absolute top-[2vh] left-[2vh] md:top-[5vw] md:left-[5vw] w-[49vh] h-[70vh] md:w-[73.5vw] md:h-[49vw] transition-all duration-500 overflow-y-auto ${
                            activeTab === 'experience' ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none -translate-x-full'
                        }`}>
                            <div className="w-full h-full bg-gradient-to-b from-[rgba(35,37,41,0.9)] to-[rgba(35,37,41,0.95)] p-4 md:p-8 flex flex-col">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="font-kanji text-white text-2xl md:text-3xl">Experience</h2>
                                    <button
                                        onClick={() => setActiveTab(null)}
                                        className="text-white hover:text-gray-300 transition-colors p-2"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        </button>
                                </div>
                                <div className="flex-1 overflow-y-auto">
                                    <ExperienceSection />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Vertical Tabs Sidebar - Aligned with card height */}
                    <div className="flex flex-col w-12 md:w-16 bg-white shadow-lg border-l border-gray-200 h-[70vh] md:h-[49vw] self-center">
                        {/* About Tab */}
                        <button
                            onClick={() => handleTabClick('about')}
                            className={`flex-1 flex items-center justify-center border-b border-gray-200 transition-all duration-300 hover:bg-gray-50 ${
                                activeTab === 'about' ? 'bg-blue-50 border-blue-200' : ''
                            }`}
                        >
                            <div className="transform -rotate-90 whitespace-nowrap">
                                <span className="font-kanji text-gray-700 text-sm md:text-lg">About</span>
                            </div>
                        </button>

                        {/* Experience Tab */}
                        <button
                            onClick={() => handleTabClick('experience')}
                            className={`flex-1 flex items-center justify-center transition-all duration-300 hover:bg-gray-50 ${
                                activeTab === 'experience' ? 'bg-blue-50 border-blue-200' : ''
                            }`}
                        >
                            <div className="transform -rotate-90 whitespace-nowrap">
                                <span className="font-kanji text-gray-700 text-sm md:text-lg">Experience</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExamplePage;
