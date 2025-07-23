import React from 'react';
import ExampleComponent from '../components/ExampleComponent.js';
import {Card, CardContent} from "@/components/ui/card";

const ExamplePage = () => {
    return (
        <div className="p-10 bg-background">
            <div className="flex items-center justify-center">
                <Card className="rounded-none relative overflow-hidden w-[70vh] h-[49vh] md:w-[49vw] md:h-[70vw]">
                    <div className="flex items-center justify-center ">
                        <Card className='rounded-none absolute overflow-hidden w-[31.5vh] h-[45vh] top-[4vh] md:w-[45vw] md:h-[31.5vw] md:top-[4vw]'
                        style={{
                            backgroundImage:"url('/Hero-image-ocean.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}>
                        </Card>
                    </div>
                    <div className="absolute top-[40vh] text-[8vh] font-kanji w-full flex justify-end right-[2vh] md:top-[40vw] md:text-[8vw] md:right-[2vw]"> 
                        海飛
                    </div>
                    <div className="absolute text-[4vh] font-kanji w-full flex justify-end top-[33vh] left-[20vh] rotate-90 md:text-[4vw] md:top-[33vw] md:left-[20vw]"> 
                        Kaito
                    </div>
                    <div className="absolute top-[63.5vh] text-[5vh] font-kanji w-full flex justify-start left-[1vh] md:top-[63.5vw] md:text-[5vw] md:left-[1vw]"> 
                        ポートフォリオ
                    </div>
                    <div className="absolute top-[60vh] text-[4vh] font-kanji w-full flex justify-start left-[1vh] md:top-[60vw] md:text-[4vw] md:left-[1vw]"> 
                        Portfolio
                    </div>
                    <div className="absolute top-[30vh] text-[4vh] font-kanji w-full flex justify-end right-[2vh] text-white md:top-[30vw] md:text-[4vw] md:right-[2vw]"> 
                        WPI/JESGO
                    </div>

                    <CardContent className="relative z-10 p-6">
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default ExamplePage;
