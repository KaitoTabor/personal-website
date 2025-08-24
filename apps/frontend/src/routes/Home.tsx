import React from 'react';
import ExampleComponent from '../components/ExampleComponent.js';
import {Card, CardContent} from "@/components/ui/card";
import Waves from "@blocks/Backgrounds/Waves/Waves";
import HeroSection from "@/components/HeroSection";

const ExamplePage = () => {
    return (
        <>
            <div className="relative z-0 p-3 md:p-10 min-h-screen min-w-screen">
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
            </div>
            <div >
                <Card >
                    <CardContent>

                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default ExamplePage;
