import React from 'react';
import ExampleComponent from '../components/ExampleComponent.js';
import {Card, CardContent} from "@/components/ui/card";
import Waves from "@blocks/Backgrounds/Waves/Waves";
import HeroSection from "@/components/HeroSection";
import DarkCard from "@/components/DarkCard";
import AnimatedHoverDisclouser from "@/components/playpen/AnimatedHoverDisclouser";



const ExamplePage = () => {
    return (
        <>
            <div className="relative z--10 p-3 md:p-10 min-h-screen min-w-screen">
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
                <HeroSection />
                <div className="flex items-center justify-center relative top-[2vh] md:top-[2vw] ">
                    <Card className="bg-[rgba(35,37,41,0.6)] w-[50vh] md:w-[95vw]">
                        <CardContent>
                            <AnimatedHoverDisclouser></AnimatedHoverDisclouser>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default ExamplePage;
