import React, { useState } from 'react';
import {Card, CardContent} from "@/components/ui/card";
import Waves from "@blocks/Backgrounds/Waves/Waves";
import HeroSection from "@/components/HeroSection";
import AnimatedHoverDisclosure from "@/components/playpen/AnimatedHoverDisclosure.js";
import SkillsSection from '@/components/SkillSection.js';
import AboutSection from '@/components/AboutSection.js';
import ExperienceSection from '@/components/ExperienceSection.js';

type SectionType = 'hero' | 'about' | 'skills' | 'experience' | 'projects';

const ExamplePage = () => {
    const [activeSection, setActiveSection] = useState<SectionType>('hero');

    const sections = [
        { id: 'about' as SectionType, title: 'About', component: <AboutSection /> },
        { id: 'skills' as SectionType, title: 'Skills', component: (
            <div className="flex flex-col items-center justify-center h-full">
                <div className="font-kanji justify-center text-[4vh] md:text-[4vw] text-white mb-[2vh] md:mb-[2vw]">
                    Skills
                </div>
                <div className="relative flex justify-center items-center p-[1vh] md:p-[1vw] md:py-[1vw] md:px-[1vw] w-7/8">
                    <div className="absolute inset-0 justify-center -z-1 bg-[rgba(175,226,249,0.6)] rounded-lg"></div>
                    <div className="flex justify-center w-full">
                        <SkillsSection />
                    </div>
                </div>
            </div>
        ) },
        { id: 'experience' as SectionType, title: 'Experience', component: (
            <div className="flex flex-col items-center justify-center h-full">
                <div className="font-kanji text-[4vh] md:text-[4vw] text-white mb-[2vh] md:mb-[2vw]">
                    Experience
                </div>
                <ExperienceSection />
            </div>
        ) },
        { id: 'projects' as SectionType, title: 'Projects', component: (
            <div className="flex flex-col items-center justify-center h-full">
                <div className="font-kanji text-[4vh] md:text-[4vw] text-white mb-[2vh] md:mb-[2vw]">
                    Projects
                </div>
                <div className="text-white text-center">
                    Projects section content coming soon...
                </div>
            </div>
        ) }
    ];

    const renderActiveSection = () => {
        if (activeSection === 'hero') {
            return <HeroSection />;
        }
        
        const section = sections.find(s => s.id === activeSection);
        return section?.component || <HeroSection />;
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Wave Background */}
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
                style={{ pointerEvents: "none" }}
            />

            {/* Sidebar Navigation */}
            <div className="fixed right-0 top-0 h-full w-[60px] md:w-[80px] bg-gradient-to-b from-[rgba(35,37,41,0.9)] to-[rgba(35,37,41,0.7)] backdrop-blur-sm border-l border-[rgba(255,255,255,0.1)] z-20">
                {/* Home/Hero Button */}
                <div 
                    className={`flex items-center justify-center h-[80px] cursor-pointer transition-all duration-300 hover:bg-[rgba(255,255,255,0.1)] ${
                        activeSection === 'hero' ? 'bg-[rgba(255,255,255,0.2)]' : ''
                    }`}
                    onClick={() => setActiveSection('hero')}
                >
                    <div className="text-white font-kanji text-[12px] md:text-[16px] transform -rotate-90 whitespace-nowrap">
                        Home
                    </div>
                </div>

                {/* Section Navigation Items */}
                {sections.map((section) => (
                    <div 
                        key={section.id}
                        className={`flex items-center justify-center h-[80px] cursor-pointer transition-all duration-300 hover:bg-[rgba(255,255,255,0.1)] ${
                            activeSection === section.id ? 'bg-[rgba(255,255,255,0.2)]' : ''
                        }`}
                        onClick={() => setActiveSection(section.id)}
                    >
                        <div className="text-white font-kanji text-[12px] md:text-[16px] transform -rotate-90 whitespace-nowrap">
                            {section.title}
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Area */}
            <div className="mr-[60px] md:mr-[80px] min-h-screen relative z-10">
                {/* Section Content */}
                <div className={`transition-all duration-500 ease-in-out ${
                    activeSection === 'hero' ? 'opacity-100' : 'opacity-100'
                }`}>
                    {activeSection !== 'hero' ? (
                        <div className="min-h-screen bg-gradient-to-b from-[rgba(35,37,41,0.6)] to-[rgba(35,37,41,0.9)] flex items-center justify-center p-4">
                            {renderActiveSection()}
                        </div>
                    ) : (
                        renderActiveSection()
                    )}
                </div>
            </div>

            {/* Close button for expanded sections */}
            {activeSection !== 'hero' && (
                <button
                    onClick={() => setActiveSection('hero')}
                    className="fixed top-4 left-4 z-30 bg-[rgba(35,37,41,0.8)] text-white px-4 py-2 rounded-lg hover:bg-[rgba(35,37,41,0.9)] transition-all duration-300 backdrop-blur-sm border border-[rgba(255,255,255,0.1)]"
                >
                    ✕ Close
                </button>
            )}
        </div>
    );
};

export default ExamplePage;
