import React from 'react';
import ExampleComponent from '../components/ExampleComponent.js';
import {Card, CardContent} from "@/components/ui/card";
import Waves from "@blocks/Backgrounds/Waves/Waves";
import HeroSection from "@/components/HeroSection";
import AnimatedHoverDisclosure from "@/components/playpen/AnimatedHoverDisclosure.js";
import SkillsSection from '@/components/SkillSection.js';




const ExamplePage = () => {
    return (
            <div className="relative z--10  min-h-screen  w-full">
                <Waves
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
                <HeroSection></HeroSection>
                <div className="absolute w-full h-[6vh] md:h-[6vw] bg-gradient-to-t from-[rgba(35,37,41,0.6)] to-transparent"></div>
                {/* <div className="absolute w-full overflow-hidden h-[10vh] md:h-[6vw] bg-[radial-gradient(circle_at_50%_300%,rgba(35,37,41,0.6),rgba(35,37,41,0))]"></div> */}
                {/* <div className="absolute w-1/8 h-[6vh] md:h-[6vw] bg-[rgba(35,37,41,1)] "></div> */}
                <div className="flex items-center justify-center relative mt-[6vh] md:mt-[6vw] ">
                    <div className="bg-gradient-to-b from-[rgba(35,37,41,0.6)] to-[rgba(35,37,41,0.9)] w-full">
                        <div className='flex items-center justify-center font-kanji text-white text-[4vh] md:text-[4vw]'>
                            Contents
                        </div>
                        <AnimatedHoverDisclosure></AnimatedHoverDisclosure>
                        <div className='flex items-center justify-center font-kanji text-white text-[4vh] md:text-[4vw]'>
                            About
                        </div>
                        
                        <div className="flex flex-col items-center justify-center relative mt-[2vh] md:mt-[2vw]">
                            <div className="font-kanji justify-center text-[4vh] md:text-[4vw]  text-white">
                                Skills
                            </div>

                            <SkillsSection />
                        </div>
                        <div className="flex items-center justify-center relative mt-[2vh] md:mt-[2vw]">
                            <div className="font-kanji text-[4vh] md:text-[4vw] text-white">
                                Experiences
                            </div>
                        </div>
                        <div className="flex items-center justify-center relative mt-[2vh] md:mt-[2vw]">
                            <div className="font-kanji text-[4vh] md:text-[4vw] text-white">
                                Projects
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ExamplePage;
