import {Card, CardContent} from "@/components/ui/card";
const HeroSection = () => {
    return (
        <div className="flex items-center justify-center p-[2vh] pr-0 md:p-[5vw] md:pr-0 relative z-10">
            <Card className="rounded-none rounded-r-none relative overflow-hidden w-[42.75vh] h-[86vh] md:w-[66.75vw] md:h-[44.5vw]">
                <div className="flex items-center justify-center ">
                    <Card className='rounded-none absolute overflow-hidden w-[40vh] h-[31.5vh] top-[4vh]  md:left-[2vw] md:w-[49.5vw] md:h-[33vw]  md:top-[2vw]'
                          style={{
                              backgroundImage:"url('/Hero-image-ocean.jpg')",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                          }}>
                    </Card>
                </div>
                <div className="absolute  text-[7vh] top-[77vh] right-[22vh] font-kanji w-full flex justify-end right-[1vh] md:-top-[23vw] md:rotate-90 md:text-[8vw] md:left-[28.5vw]">
                    有安
                </div>
                <div className="absolute text-[7vh] top-[35vh] right-[6vh] font-kanji w-full flex justify-end   md:text-[8vw] md:-top-[16.5vw] md:left-[21.5vw]">
                    Kaito 
                </div>
                <div className="absolute top-[40vh] left-[17vh] text-[8vh] font-kanji w-full flex justify-end right-[1vh] md:top-[3vw] rotate-90 md:text-[8vw] md:left-[28.5vw]">
                    Tabor
                </div>
                <div className="absolute text-[7vh] top-[53vh] right-[18vh] font-kanji w-full flex justify-end   rotate-90 md:text-[8vw] md:top-[0vw] md:left-[21.5vw]">
                    海飛
                </div>
                <div className="absolute  rotate-307 top-[58vh]  right-[0.3vh] text-[3vh] font-kanji w-full flex justify-start md:scale-x-[1] md:scale-y-[1] md:rotate-0 md:top-[38.5vw] md:text-[5vw] md:left-[1vw]">
                    ポートフォリオ
                </div>
                <div className="absolute  rotate-307   top-[35vh]  left-[18vh]  text-[3vh] font-kanji w-full flex justify-start md:rotate-0 md:top-[34.5vw] md:text-[5vw] md:left-[1.5vw]">
                    Portfolio 
                </div>
                <div className="absolute top-[30vh] text-[4vh] font-kanji w-full flex justify-end right-[2vh] text-white md:top-[30vw] md:text-[4vw] md:right-[16vw]">
                    WPI/JESGO
                </div>
                <div className="absolute top-[25vh] text-[4vh] font-kanji w-full flex justify-end right-[2vh] md:top-[25vw] text-white md:text-[4vw] md:right-[16vw]">
                    CS&DS
                </div>
                <CardContent className="relative z-10 p-6">
                </CardContent>
            </Card>
        </div>
    )
}
export default HeroSection;
