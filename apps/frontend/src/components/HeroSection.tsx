import {Card, CardContent} from "@/components/ui/card";

const HeroSection = () => {
    return (
        <div className="flex items-center justify-center p-[2vh] md:p-[2vw] relative z-10 w-full h-full">
            <Card className="rounded-none relative overflow-hidden w-[90%] h-[80%] max-w-[40vh] max-h-[60vh] md:max-w-[35vw] md:max-h-[50vw]">
                <div className="flex items-center justify-center ">
                    <Card className='rounded-none absolute overflow-hidden w-[80%] h-[45%] top-[8%]'
                          style={{
                              backgroundImage:"url('/Hero-image-ocean.jpg')",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                          }}>
                    </Card>
                </div>
                <div className="absolute bottom-[15%] right-[5%] text-[6vh] md:text-[4vw] font-kanji">
                    海飛
                </div>
                <div className="absolute top-[40%] right-[15%] text-[3vh] md:text-[2vw] font-kanji rotate-90 origin-center">
                    Kaito
                </div>
                <div className="absolute bottom-[8%] left-[5%] text-[4vh] md:text-[3vw] font-kanji">
                    ポートフォリオ
                </div>
                <div className="absolute bottom-[12%] left-[5%] text-[3vh] md:text-[2vw] font-kanji">
                    Portfolio
                </div>
                <div className="absolute top-[35%] right-[5%] text-[3vh] md:text-[2vw] font-kanji text-white">
                    WPI/JESGO
                </div>
                <div className="absolute top-[30%] right-[5%] text-[3vh] md:text-[2vw] font-kanji text-white">
                    CS&DS
                </div>

                <CardContent className="relative z-10 p-6">
                </CardContent>
            </Card>
        </div>
    )
}

export default HeroSection;
