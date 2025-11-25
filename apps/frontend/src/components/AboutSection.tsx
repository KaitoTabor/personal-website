import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import CurvedLoop from "@/blocks/TextAnimations/CurvedLoop/CurvedLoop";
import { Car, Instagram } from "lucide-react";
import GlowButton from "./ui/GlowButton";
const useResponsiveYOffset = () => {
    const [yOffset, setYOffset] = useState(300);
    useEffect(() => {
        const updateYOffset = () => {
            const width = window.innerWidth;
            if (width >= 768) {
                setYOffset(-400);
            } else {
                setYOffset(750);
            }
        };
        updateYOffset();
        window.addEventListener('resize', updateYOffset);
        return () => window.removeEventListener('resize', updateYOffset);
    }, []);
    return yOffset;
};
const images = [
    '/me.jpg',
    '/dog.jpg',
    '/repo.jpg',
    '/gunpla.jpg',
    '/hxh.jpg',
    '/chi_bread.jpg',
    '/usagi.jpg',
    '/tower.jpg',
    '/cat.jpg',
]
const AboutSection = () => {
    const [api, setApi] = useState<CarouselApi>()
    const timeoutRef = useRef<NodeJS.Timeout>()
    const yOffset = useResponsiveYOffset();
    useEffect(() => {
        if (!api) return
        const startAutoplay = () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
            timeoutRef.current = setTimeout(() => {
                api.scrollNext()
                startAutoplay()
            }, 4000) 
        }
        startAutoplay()
        const handleUserInteraction = () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
            timeoutRef.current = setTimeout(startAutoplay, 5000)
        }
        const handleMouseEnter = () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
        const handleMouseLeave = () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
            startAutoplay()
        }
        api.on('pointerDown', handleUserInteraction)
        const carouselElement = api.containerNode()
        carouselElement.addEventListener('mouseenter', handleMouseEnter)
        carouselElement.addEventListener('mouseleave', handleMouseLeave)
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
            api.off('pointerDown', handleUserInteraction)
            carouselElement.removeEventListener('mouseenter', handleMouseEnter)
            carouselElement.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [api])
    return (
        <div className="flex justify-center w-full overflow-visible z-10">
            <div className="relative items-center w-full overflow-visible">
                <div className="flex flex-col items-center justify-center p-[2vh]  md:p-[2.5vw] ">
                    <Card className="rounded-none absolute  md:left-[2vw] overflow-hidden w-[41.4vh] h-[27.6vh] top-[5vh] md:top-[5vw] md:w-[30vw] md:h-[20vw] bg-[rgba(35,37,41,1)] border-[rgba(35,37,41,1)] border-1 shadow-lg shadow-[rgb(0_0_0)]">
                        <CardContent className="p-0 w-full h-full flex items-center justify-center">
                            <div className="rounded-none shadow-0 absolute overflow-hidden w-[31.05vh] h-[20.7vh] md:w-[22.5vw] md:h-[15vw] border-white z-10"
                                 style={{
                                     backgroundImage: "url('/idea1.jpg')",
                                     backgroundSize: "cover",
                                     backgroundPosition: "center",
                                 }}>
                            </div>
                            <div className="relative z-20 w-full h-full">
                                <CurvedLoop 
                                    marqueeText="Data Scientist✦Machine Learning✦Software Engineer✦Fullstack Developer✦"
                                    speed={2}
                                    curveAmount={-500}
                                    direction="right"
                                    interactive={true}
                                    className="fill-white"
                                    yOffset={yOffset}
                                />
                            </div>
                            {/* <div className="absolute  text-justify font-kanji w-full flex  top-[0vw]  left-[1.5vw] text-[0vw] max-w-[37.5vw] md:left-[0.5vw] md:text-[0.5vw] md:max-w-[12.5vw] z-10">
                                Japanese and American Bilingual Data Scientist and Developer from Palo Alto CA. Here to explore the world of Machine Learning and Deep Learning to create meaningful applications. カリフォルニア、パロアルト出身のバイリンガルデータサイエンティスト兼開発者。深層学習の世界を探求し、価値のあるプロダクトを作り出す為ここにいます。
                            </div> */}
                            <div className="absolute  font-kanji w-full flex justify-start left-[1.0856vh] top-[7.59vh] text-[5.52vh] md:left-[0.5vw] md:top-[5.5vw] md:text-[4vw] text-white z-10">
                                Kaito
                            </div>
                            <div className="absolute  font-kanji w-full flex justify-end right-[1.0856vh] top-[7.59vh] text-[5.52vh] md:right-[0.5vw] md:top-[5.5vw] md:text-[4vw] text-white z-10">
                                Tabor
                            </div>
                            <div className="absolute  font-kanji w-full flex  top-[0vh]  left-[30.912vh] text-[2.76vh] md:left-[22.4vw] md:text-[2vw] text-white z-10">
                                WPI-27
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex justify-center mb-[2.3vh] md:mb-[5vw]">
                    <div className="absolute shadow-0 overflow-hidden rounded-lg w-[40.48vh] h-[21.252vh] top-[35vh] md:w-[33vw] md:h-[17.55vw] md:top-[6vw] md:right-[1vw] backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:bg-white/20 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/20 transition-all duration-300 z-10 group">
                        <div className="absolute inset-0 flex items-center justify-start left-[1.012vh] md:left-[0.65vw]">
                            <div className="text-gray-200 text-[1.058vh] w-[21.578vh] md:px-[2.34vw] md:text-[0.85vw] md:w-[19.5vw] md:px-[1.95vw] leading-relaxed">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Japanese and American bilingual data scientist and developer from Palo Alto, CA. Passionate about exploring machine learning and deep learning to create meaningful applications that make a difference. Always eager to learn new technologies and solve complex problems.
                            </div>
                        </div>
                        <div className="absolute text-white top-[1.012vh] left-[1.408vh] text-[1.518vh] w-[22.7vh] md:top-[0.65vw] md:left-[0.65vw] md:px-[2.34vw] md:text-[1.3vw] md:w-[19.5vw] md:px-[1.95vw] font-bold group-hover:text-cyan-300 transition-colors">
                            About me
                        </div>
                        <GlowButton 
                            className="absolute left-[24.794vh] top-[2.024vh] h-[4.048vh] w-[12.144vh] md:left-[20.8vw] md:top-[1.95vw] md:h-[3.25vw] md:w-[9.75vw] md:text-[6.5vw] backdrop-blur-sm bg-white/5 hover:bg-white/10 border border-white/20"
                            glowColor="#0077b5"
                            href="https://linkedin.com/m/in/kaito-tabor"
                            icon="devicon-linkedin-plain"
                            text="LinkedIn"
                            iconSize="text-[2.53vh] md:text-[3.25vw]"
                            textSize="text-[1.518vh] md:text-[1.3vw]"
                        />
                        <GlowButton 
                            className="absolute left-[24.794vh] top-[2.024vh] h-[4.048vh] w-[12.144vh] md:left-[20.8vw] md:top-[3.25vw] md:h-[3.25vw] md:w-[9.75vw] backdrop-blur-sm bg-white/5 hover:bg-white/10 border border-white/20"
                            glowColor="#6e5494"
                            href="https://github.com/KaitoTabor"
                            icon="devicon-github-original"
                            text="GitHub"
                            iconSize="text-[2.53vh] md:text-[3.25vw]"
                            textSize="text-[1.518vh] md:text-[1.3vw]"
                        />
                        <GlowButton 
                            className="absolute left-[24.794vh] top-[2.024vh] h-[4.048vh] w-[12.144vh] md:left-[20.8vw] md:top-[4.55vw] md:h-[3.25vw] md:w-[9.75vw] backdrop-blur-sm bg-white/5 hover:bg-white/10 border border-white/20"
                            glowColor="#E4405F"
                            href="https://www.instagram.com/arys_kaito/"
                            icon={<Instagram className="w-[5.5vw] h-[5.5vw] md:w-[3.25vw] md:h-[3.25vw]" />}
                            text="Instagram"
                            textSize="text-[1.518vh] md:text-[1.3vw]"
                        />
                    </div>
                </div>
                {/* <div className="text-white flex flex-col items-center justify-center">
                    <div className="text-[4vw] md:text-[2vw] font-kanji mb-[0vw]">
                        Pics
                    </div>
                    <div className="text-[1.5vw]">
                        Some pictures of me,my interests, and random stuff
                    </div>
                </div> */}
                <Carousel
                    setApi={setApi}
                    opts={{
                        align: "center",
                        loop: true,
                        slidesToScroll: 1,
                        skipSnaps: false,
                        dragFree: false,
                    }}
                    className="w-[250%] md:w-[103%] top-[55vh] md:top-[17vw]  -translate-x-[29%] md:-translate-x-[0%]"
                >
                    <CarouselContent>
                        {images.map((image, index) => (
                            <CarouselItem key={index} className="md:pl-0 basis-1/5 md:basis-1/5 ">
                                <div className="relative group  h-[23vh] md:h-[17vw] ">
                                    <div className="aspect-[3/4] rounded-lg h-full overflow-hidden">
                                        <img 
                                            src={image} 
                                            alt={`Gallery image ${index + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="absolute  w-[10vh] left-[31vh] md:left-0 top-0  md:w-[10vw] h-full pointer-events-none z-10">
                        <div 
                            className="w-full h-full backdrop-blur-md"
                            style={{
                                maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0) 100%)',
                                WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0) 100%)'
                            }}
                        />
                    </div>
                     <div className="absolute w-[10vh] right-[33vh]  md:right-0 top-0 md:w-[10vw] rounded-lg h-full pointer-events-none z-10">
                        <div 
                            className="w-full h-full backdrop-blur-md"
                            style={{
                                maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0) 100%)',
                                WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0) 100%)'
                            }}
                        />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}
export default AboutSection;
