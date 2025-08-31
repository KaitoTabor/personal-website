import React, { useState } from 'react';
import ExampleComponent from '../components/ExampleComponent.js';
import {Card, CardContent} from "@/components/ui/card";
import Waves from "@blocks/Backgrounds/Waves/Waves";
import HeroSection from "@/components/HeroSection";
import AnimatedHoverDisclosure from "@/components/playpen/AnimatedHoverDisclosure.js";
import SkillsSection from '@/components/SkillSection.js';
import AboutSection from '@/components/AboutSection.js';
import ExperienceSection from '@/components/ExperienceSection.js';

type TabType = 'about' | 'skills' | 'experience' | 'projects';

const ExamplePage = () => {
    const [activeTab, setActiveTab] = useState<TabType>('about');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'about':
                return (
                    <div className="p-4">
                        <AboutSection />
                    </div>
                );
            case 'skills':
                return (
                    <div className="p-4">
                        <div className="flex flex-col items-center justify-center">
                            <div className="font-kanji text-white text-[4vh] md:text-[3vw] mb-4">
                                Skills
                            </div>
                            <div className="relative flex justify-center items-center p-[1vh] md:p-[1vw] w-full">
                                <div className="absolute inset-0 bg-[rgba(175,226,249,0.6)] rounded-lg"></div>
                                <div className="flex justify-center w-full relative z-10">
                                    <SkillsSection />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'experience':
                return (
                    <div className="p-4">
                        <div className="flex flex-col items-center justify-center">
                            <div className="font-kanji text-white text-[4vh] md:text-[3vw] mb-4">
                                Experience
                            </div>
                            <ExperienceSection />
                        </div>
                    </div>
                );
            case 'projects':
                return (
                    <div className="p-4">
                        <div className="flex flex-col items-center justify-center">
                            <div className="font-kanji text-white text-[4vh] md:text-[3vw] mb-4">
                                Projects
                            </div>
                            <div className="text-white text-center">
                                Projects section coming soon...
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="relative min-h-screen w-full flex overflow-hidden">
            {/* Wave background */}
            <Waves
                className="absolute inset-0 z-0"
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
                style={{ pointerEvents: "none" }}
            />
            
            {/* Left side - Hero Section (fixed) */}
            <div className="w-1/2 h-screen relative z-10 flex items-center justify-center">
                <HeroSection />
            </div>
            
            {/* Right side - Tab content area */}
            <div className="w-1/2 h-screen relative z-10 flex flex-col">
                {/* Browser-style tabs */}
                <div className="flex bg-[rgba(35,37,41,0.9)] border-b border-[rgba(255,255,255,0.2)]">
                    {[
                        { id: 'about', label: 'About' },
                        { id: 'skills', label: 'Skills' },
                        { id: 'experience', label: 'Experience' },
                        { id: 'projects', label: 'Projects' }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as TabType)}
                            className={`px-6 py-3 text-sm font-medium relative transition-all duration-200 ${
                                activeTab === tab.id
                                    ? 'bg-[rgba(255,255,255,0.1)] text-white border-b-2 border-blue-400'
                                    : 'text-gray-300 hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
                            }`}
                            style={{
                                clipPath: activeTab === tab.id 
                                    ? 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'
                                    : 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'
                            }}
                        >
                            <span className="relative z-10">{tab.label}</span>
                            {activeTab === tab.id && (
                                <div className="absolute inset-0 bg-[rgba(16,60,101,0.8)] -z-10" 
                                     style={{
                                         clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'
                                     }} 
                                />
                            )}
                        </button>
                    ))}
                </div>
                
                {/* Tab content */}
                <div className="flex-1 overflow-y-auto bg-gradient-to-b from-[rgba(35,37,41,0.6)] to-[rgba(35,37,41,0.9)]">
                    {renderTabContent()}
                </div>
            </div>
        </div>
    );
};

export default ExamplePage;
