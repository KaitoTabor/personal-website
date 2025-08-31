import {Card, CardContent} from "@/components/ui/card";

const HeroSection = () => {
    return (
        <div className="flex items-center justify-center p-[2vh] pr-0 md:p-[5vw] md:pr-0 relative z-10">
            <Card className="rounded-none rounded-r-none relative overflow-hidden w-[42.75vh] h-[86vh] md:w-[73.5vw] md:h-[49vw]">
                <div className="flex items-center justify-center ">
                    <Card className='rounded-none absolute overflow-hidden w-[40vh] h-[31.5vh] top-[4vh] md:w-[45vw] md:h-[31.5vw] md:top-[4vw]'
                          style={{
                              backgroundImage:"url('/Hero-image-ocean.jpg')",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                          }}>
                    </Card>
                </div>
                <div className="absolute top-[40vh] text-[8vh] font-kanji w-full flex justify-end right-[1vh] md:top-[40vw] md:text-[8vw] md:right-[2vw]">
                    海飛
                </div>
                <div className="absolute text-[4vh] font-kanji w-full flex justify-end top-[35vh] left-[18vh] rotate-90 md:text-[4vw] md:top-[33vw] md:left-[20vw]">
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
                <div className="absolute top-[25vh] text-[4vh] font-kanji w-full flex justify-end right-[2vh] text-white md:top-[25vw] md:text-[4vw] md:right-[2vw]">
                    CS&DS
                </div>


                <CardContent className="relative z-10 p-6">
                </CardContent>
            </Card>
        </div>
    )
}

export default HeroSection;
