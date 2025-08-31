import React, { useState, useEffect, useRef } from 'react';
import ExampleComponent from '../components/ExampleComponent.js';
import {Card, CardContent} from "@/components/ui/card";
import Waves from "@blocks/Backgrounds/Waves/Waves";
import HeroSection from "@/components/HeroSection";
import AnimatedHoverDisclosure from "@/components/playpen/AnimatedHoverDisclosure.js";
import SkillsSection from '@/components/SkillSection.js';
import AboutSection from '@/components/AboutSection.js';
import ExperienceSection from '@/components/ExperienceSection.js';

type TabType = 'about' | 'experience' | 'skills' | null;

const ExamplePage = () => {
    const [activeTab, setActiveTab] = useState<TabType>(null);
    const [showResumePopup, setShowResumePopup] = useState(false);
    const resumePopupRef = useRef<HTMLDivElement>(null);

    // Close popup when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (resumePopupRef.current && !resumePopupRef.current.contains(event.target as Node)) {
                setShowResumePopup(false);
            }
        };

        if (showResumePopup) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showResumePopup]);

    const handleTabClick = (tab: TabType) => {
        setActiveTab(activeTab === tab ? null : tab);
    };

    const handleResumeDownload = (format: 'pdf' | 'docx') => {
        const link = document.createElement('a');
        link.href = format === 'pdf' ? '/resume.pdf' : '/resume.docx';
        link.download = `Kaito_Tabor_Resume.${format}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setShowResumePopup(false);
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
                <div className="relative flex items-center -translate-x-[0.85vh] md:-translate-x-[2vw]">
                    {/* Hero Content Area */}
                    <div className="relative">
                        {/* Hero Section - Always visible when no tab is active */}
                        <div className={`transition-all duration-1000 overflow-hidden ${
                            activeTab ? 'opacity-100 pointer-events-none' : 'opacity-100 pointer-events-auto'
                        }`}>
                            <div className={`transition-transform duration-1000 ${
                                activeTab ? 'translate-x-full' : 'translate-x-0'
                            }`}>
                                <HeroSection />
                            </div>
                        </div>

                        {/* About Section - Covers only hero area, not sidebar */}
                        <div className={`absolute top-[2vh] left-[2vh] md:top-[5vw] md:left-[5vw] w-[42.75vh] h-[86vh] md:w-[73.5vw] md:h-[49vw] overflow-hidden transition-all duration-1000 ${
                            activeTab === 'about' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                        }`}>
                            <div className={`w-full h-full bg-gradient-to-b from-[rgba(35,37,41,0.9)] to-[rgba(35,37,41,0.95)] p-[1vh] md:p-[2vw] flex flex-col transition-transform duration-1000 ${
                                activeTab === 'about' ? 'translate-x-0' : 'translate-x-full'
                            }`}>
                                <div className="flex justify-between items-center mb-[1.5vh] md:mb-[1.5vw]">
                                    <h2 className="font-kanji text-white text-[3vh] md:text-[3vw]">About</h2>
                                    <button
                                        onClick={() => setActiveTab(null)}
                                        className="text-white hover:text-gray-300 transition-colors p-[0.5vh] md:p-[0.5vw]"
                                    >
                                        <svg className="w-[1.25vh] h-[1.25vh] md:w-[1.25vw] md:h-[1.25vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        <div className={`absolute top-[2vh] left-[2vh] md:top-[5vw] md:left-[5vw] w-[42.75vh] h-[86vh] md:w-[73.5vw] md:h-[49vw] overflow-hidden transition-all duration-1000 ${
                            activeTab === 'experience' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                        }`}>
                            <div className={`w-full h-full bg-gradient-to-b from-[rgba(35,37,41,0.9)] to-[rgba(35,37,41,0.95)] p-[1vh] md:p-[2vw] flex flex-col transition-transform duration-1000 ${
                                activeTab === 'experience' ? 'translate-x-0' : 'translate-x-full'
                            }`}>
                                <div className="flex justify-between items-center mb-[1.5vh] md:mb-[1.5vw]">
                                    <h2 className="font-kanji text-white text-[3vh] md:text-[3vw]">Experience</h2>
                                    <button
                                        onClick={() => setActiveTab(null)}
                                        className="text-white hover:text-gray-300 transition-colors p-[0.5vh] md:p-[0.5vw]"
                                    >
                                        <svg className="w-[1.25vh] h-[1.25vh] md:w-[1.25vw] md:h-[1.25vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        </button>
                                </div>
                                <div className="flex-1 overflow-y-auto">
                                    <ExperienceSection />
                                </div>
                            </div>
                        </div>

                        {/* Skills Section - Covers only hero area, not sidebar */}
                        <div className={`absolute top-[2vh] left-[2vh] md:top-[5vw] md:left-[5vw] w-[42.75vh] h-[86vh] md:w-[73.5vw] md:h-[49vw] overflow-hidden transition-all duration-1000 ${
                            activeTab === 'skills' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                        }`}>
                            <div className={`w-full h-full bg-gradient-to-b from-[rgba(35,37,41,0.9)] to-[rgba(35,37,41,0.95)] p-[1vh] md:p-[2vw] flex flex-col transition-transform duration-1000 ${
                                activeTab === 'skills' ? 'translate-x-0' : 'translate-x-full'
                            }`}>
                                <div className="flex justify-between items-center mb-[1.5vh] md:mb-[1.5vw]">
                                    <h2 className="font-kanji text-white text-[3vh] md:text-[3vw]">Skills & Projects</h2>
                                    <button
                                        onClick={() => setActiveTab(null)}
                                        className="text-white hover:text-gray-300 transition-colors p-[0.5vh] md:p-[0.5vw]"
                                    >
                                        <svg className="w-[1.25vh] h-[1.25vh] md:w-[1.25vw] md:h-[1.25vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex-1 overflow-y-auto space-y-[2vh] md:space-y-[2vw]">
                                    {/* Skills Section */}
                                    <div>
                                        <h3 className="font-kanji text-white text-[2.5vh] md:text-[2.5vw] mb-[1vh] md:mb-[1vw]">Technical Skills</h3>
                                        <SkillsSection />
                                    </div>
                                    
                                    {/* Projects Section */}
                                    <div>
                                        <h3 className="font-kanji text-white text-[2.5vh] md:text-[2.5vw] mb-[1vh] md:mb-[1vw]">Projects</h3>
                                        <div className="space-y-[1vh] md:space-y-[1vw]">
                                            <div className="bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.05)] p-[1vh] md:p-[1vw] rounded-lg">
                                                <h4 className="text-white text-[2vh] md:text-[2vw] font-semibold mb-[0.5vh] md:mb-[0.5vw]">Personal Website</h4>
                                                <p className="text-gray-300 text-[1.5vh] md:text-[1.5vw] mb-[0.5vh] md:mb-[0.5vw]">
                                                    A modern portfolio website built with React, TypeScript, and Tailwind CSS featuring responsive design and smooth animations.
                                                </p>
                                                <div className="flex flex-wrap gap-[0.5vh] md:gap-[0.5vw]">
                                                    <span className="bg-blue-500/20 text-blue-300 px-[0.5vh] py-[0.25vh] md:px-[0.5vw] md:py-[0.25vw] rounded text-[1.2vh] md:text-[1.2vw]">React</span>
                                                    <span className="bg-blue-500/20 text-blue-300 px-[0.5vh] py-[0.25vh] md:px-[0.5vw] md:py-[0.25vw] rounded text-[1.2vh] md:text-[1.2vw]">TypeScript</span>
                                                    <span className="bg-blue-500/20 text-blue-300 px-[0.5vh] py-[0.25vh] md:px-[0.5vw] md:py-[0.25vw] rounded text-[1.2vh] md:text-[1.2vw]">Tailwind CSS</span>
                                                </div>
                                            </div>
                                            
                                            <div className="bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.05)] p-[1vh] md:p-[1vw] rounded-lg">
                                                <h4 className="text-white text-[2vh] md:text-[2vw] font-semibold mb-[0.5vh] md:mb-[0.5vw]">Coming Soon...</h4>
                                                <p className="text-gray-300 text-[1.5vh] md:text-[1.5vw]">
                                                    More exciting projects are in development. Stay tuned!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Vertical Tabs Sidebar - Aligned with card height */}
                    <div className="flex flex-col w-[2vh] md:w-[4vw] bg-white shadow-lg border-l border-gray-200 h-[86vh] md:h-[49vw] self-center">
                        {/* About Tab */}
                        <button
                            onClick={() => handleTabClick('about')}
                            className={`flex-1 flex items-center justify-center border-b border-gray-200 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:border-blue-300 hover:shadow-lg transform hover:[&_span]:text-blue-600 ${
                                activeTab === 'about' ? 'bg-blue-50 border-blue-200' : ''
                            }`}
                        >
                            <div className="transform -rotate-90 whitespace-nowrap">
                                <span className="font-kanji text-gray-700 text-[1.5vh] md:text-[1.5vw] transition-colors duration-300">About</span>
                            </div>
                        </button>

                        {/* Experience Tab */}
                        <button
                            onClick={() => handleTabClick('experience')}
                            className={`flex-1 flex items-center justify-center border-b border-gray-200 transition-all duration-300 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:border-green-300 hover:shadow-lg transform hover:[&_span]:text-green-600 ${
                                activeTab === 'experience' ? 'bg-blue-50 border-blue-200' : ''
                            }`}
                        >
                            <div className="transform -rotate-90 whitespace-nowrap">
                                <span className="font-kanji text-gray-700 text-[1.5vh] md:text-[1.5vw] transition-colors duration-300">Experience</span>
                            </div>
                        </button>

                        {/* Skills Tab */}
                        <button
                            onClick={() => handleTabClick('skills')}
                            className={`flex-1 flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-violet-50 hover:border-purple-300 hover:shadow-lg transform hover:[&_span]:text-purple-600 ${
                                activeTab === 'skills' ? 'bg-blue-50 border-blue-200' : ''
                            }`}
                        >
                            <div className="transform -rotate-90 whitespace-nowrap">
                                <span className="font-kanji text-gray-700 text-[1.5vh] md:text-[1.5vw] transition-colors duration-300">Skills</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Social/Professional Links - Bottom Right Corner */}
            <div className="fixed bottom-[2vh] right-[2vh] md:bottom-[2vw] md:right-[2vw] z-20 flex flex-row md:flex-col gap-[1vh] md:gap-[1vw]">
                {/* Resume Link */}
                <div className="relative" ref={resumePopupRef}>
                    <button
                        onClick={() => setShowResumePopup(!showResumePopup)}
                        className="group bg-white/90 hover:bg-white shadow-lg hover:shadow-xl p-[1vh] md:p-[1vw] rounded-full transition-all duration-300 transform hover:scale-110"
                        title="Resume"
                    >
                        <svg className="w-[2.5vh] h-[2.5vh] md:w-[2.5vw] md:h-[2.5vw] text-gray-700 group-hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                        </svg>
                    </button>

                    {/* Resume Format Popup */}
                    {showResumePopup && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 md:bottom-full md:right-0 md:left-auto md:transform-none mb-[0.5vh] md:mb-[0.5vw] bg-white rounded-lg shadow-lg border border-gray-200 p-[0.5vh] md:p-[0.3vw] min-w-[8vh] md:min-w-[5vw]">
                            <div className="flex flex-col gap-[0.25vh] md:gap-[0.15vw]">
                                <button
                                    onClick={() => handleResumeDownload('pdf')}
                                    className="px-[1vh] py-[0.5vh] md:px-[0.6vw] md:py-[0.3vw] text-[1.5vh] md:text-[1.2vw] text-gray-700 hover:bg-gray-100 rounded transition-colors duration-200 text-left"
                                >
                                    PDF
                                </button>
                                <button
                                    onClick={() => handleResumeDownload('docx')}
                                    className="px-[1vh] py-[0.5vh] md:px-[0.6vw] md:py-[0.3vw] text-[1.5vh] md:text-[1.2vw] text-gray-700 hover:bg-gray-100 rounded transition-colors duration-200 text-left"
                                >
                                    DOCX
                                </button>
                            </div>
                            {/* Arrow pointing down to the button */}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 md:left-auto md:right-[1.25vw] md:transform-none w-0 h-0 border-l-[0.5vh] md:border-l-[0.5vw] border-l-transparent border-r-[0.5vh] md:border-r-[0.5vw] border-r-transparent border-t-[0.5vh] md:border-t-[0.5vw] border-t-white"></div>
                        </div>
                    )}
                </div>

                {/* GitHub Link */}
                <a
                    href="https://github.com/KaitoTabor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/90 hover:bg-white shadow-lg hover:shadow-xl p-[1vh] md:p-[1vw] rounded-full transition-all duration-300 transform hover:scale-110"
                    title="GitHub"
                >
                    <svg className="w-[2.5vh] h-[2.5vh] md:w-[2.5vw] md:h-[2.5vw] text-gray-700 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                    </svg>
                </a>

                {/* LinkedIn Link */}
                <a
                    href="https://linkedin.com/in/kaito-tabor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/90 hover:bg-white shadow-lg hover:shadow-xl p-[1vh] md:p-[1vw] rounded-full transition-all duration-300 transform hover:scale-110"
                    title="LinkedIn"
                >
                    <svg className="w-[2.5vh] h-[2.5vh] md:w-[2.5vw] md:h-[2.5vw] text-gray-700 group-hover:text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default ExamplePage;
