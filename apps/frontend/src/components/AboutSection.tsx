import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import CurvedLoop from "@/blocks/TextAnimations/CurvedLoop/CurvedLoop";
import { Car, Instagram } from "lucide-react";
import GlowButton from "./ui/GlowButton";


// Custom hook to get responsive yOffset value
const useResponsiveYOffset = () => {
    const [yOffset, setYOffset] = useState(300); // default value

    useEffect(() => {
        const updateYOffset = () => {
            const width = window.innerWidth;
            if (width >= 768) { // md breakpoint and above
                setYOffset(300); // Different value for md+ screens
            } else {
                setYOffset(700); // Default value for smaller screens
            }
        };

        updateYOffset(); // Set initial value
        window.addEventListener('resize', updateYOffset);
        
        return () => window.removeEventListener('resize', updateYOffset);
    }, []);

    return yOffset;
};

const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80"
]

const AboutSection = () => {
    const [api, setApi] = useState<CarouselApi>()
    const timeoutRef = useRef<NodeJS.Timeout>()
    const yOffset = useResponsiveYOffset(); // Use the responsive yOffset

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
        <div className="flex justify-center w-screen overflow-x-hidden">
            <div className="relative items-center w-full max-w-[100vh] md:max-w-[100vw] overflow-x-hidden">
                <div className="flex flex-col items-center justify-center p-[2vh]  md:p-[5vw] ">
                    <Card className="rounded-none relative overflow-hidden w-[90vw] h-[60vw] md:w-[60vw] md:h-[40vw] bg-gradient-to-b from-[rgba(35,37,41,0.9)] to-[rgba(35,37,41,0.95)] border-[rgba(35,37,41,1)] border-1 shadow-lg shadow-[rgb(0_0_0)]">
                        <CardContent className="p-0 w-full h-full flex items-center justify-center">
                            <div className="rounded-none shadow-0 absolute overflow-hidden w-[45vw] h-[30vw] md:w-[30vw] md:h-[20vw] bg-gradient-to-br from-[rgba(16,60,101,0.8)] to-[rgba(9,24,99,0.9)] border-white z-10">
                            </div>
                            <div className="relative z-20 w-full h-full">
                                <CurvedLoop 
                                    marqueeText="Data Scientist✦Machine Learning✦Software Engineer✦Fullstack Developer✦"
                                    speed={2}
                                    curveAmount={-500}
                                    direction="right"
                                    interactive={true}
                                    className="fill-black"
                                    yOffset={yOffset}
                                />
                            </div>
                            {/* <div className="absolute  text-justify font-kanji w-full flex  top-[0vw]  left-[1.5vw] text-[0vw] max-w-[37.5vw] md:left-[1vw] md:text-[1vw] md:max-w-[25vw] z-10">
                                Japanese and American Bilingual Data Scientist and Developer from Palo Alto CA. Here to explore the world of Machine Learning and Deep Learning to create meaningful applications. カリフォルニア、パロアルト出身のバイリンガルデータサイエンティスト兼開発者。深層学習の世界を探求し、価値のあるプロダクトを作り出す為ここにいます。
                            </div> */}
                            <div className="absolute  font-kanji w-full flex justify-start left-[2.36vw] top-[16.5vw] text-[12vw] md:left-[1.7vw] md:top-[11vw] md:text-[8vw] text-white z-10">
                                kaiTo
                            </div>
                            <div className="absolute  font-kanji w-full flex justify-end right-[0.15vw] top-[16.5vw] text-[12vw] md:right-[0.1vw] md:top-[11vw] md:text-[8vw] text-white z-10">
                                Tabor
                            </div>
                            <div className="absolute  font-kanji w-full flex  top-[0vw]  left-[67.2vw] text-[6vw] md:left-[44.8vw] md:text-[4vw] text-white z-10">
                                WPI-27
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex justify-center mb-[5vw]">
                    <div className="relative shadow-0 overflow-hidden rounded-lg w-[80vw] h-[42vw] md:w-[54vw] md:h-[27vw] bg-gradient-to-b from-[rgba(35,37,41,0.9)] to-[rgba(35,37,41,0.95)] border-[rgba(35,37,41,1)] border-3 z-10">
                        <div className="absolute inset-0 flex items-center justify-start left-[2vw] md:left-[1vw] md:mt-[1vw]">
                            <div className="text-gray-300 text-[1.7vw] w-[43vw] mt-[2vw] md:mt-[2vw] md:px-[3.6vw] md:text-[1vw]  md:w-[30vw] md:px-[3vw]">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus augue, dapibus sed sem id, pulvinar consectetur sapien. Morbi nec diam suscipit, consequat turpis sed, fringilla mi. Morbi ac convallis metus. Nulla consequat lobortis pretium. Suspendisse placerat mauris quis massa fermentum, sed placerat mauris fringilla. Nulla tincidunt magna finibus tincidunt rutrum. Mauris varius auctor libero sed malesuada. Nunc venenatis leo mauris, eu rhoncus urna pharetra vitae. Integer vel efficitur lorem, eget eleifend lectus. Phasellus et erat non sapien ultrices venenatis. Cras sapien augue, congue sit amet sagittis ac, dignissim at odio. Aliquam eget risus ultrices, bibendum sem id, facilisis nunc.
                            </div>
                        </div>
                        <div className=" absolute text-white top-[2vw] left-[2vw] text-[3vw] w-[45vw] md:mt-[1vw] md:left-[1vw] md:px-[3.6vw] md:text-[2vw] md:w-[30vw] md:px-[3vw]">
                            About me
                        </div>
                        <GlowButton 
                            className="absolute left-[49vw] top-[4vw] h-[8vw] w-[24vw] md:left-[32vw] md:top-[3vw] md:h-[5vw] md:w-[15vw] md:text-[10vw]"
                            glowColor="#0077b5"
                            href="https://www.linkedin.com/in/your-profile"
                            icon="devicon-linkedin-plain"
                            text="LinkedIn"
                            iconSize="text-[5vw] md:text-[5vw]"
                            textSize="text-[3vw] md:text-[2vw]"
                        />
                        <GlowButton 
                            className="absolute left-[49vw] top-[9vw] h-[8vw] w-[24vw] md:left-[32vw] md:top-[5vw] md:h-[5vw] md:w-[15vw]"
                            glowColor="#6e5494"
                            href="https://github.com/your-username"
                            icon="devicon-github-original"
                            text="GitHub"
                            iconSize="text-[5vw] md:text-[5vw]"
                            textSize="text-[3vw] md:text-[2vw]"
                        />
                        <GlowButton 
                            className="absolute left-[49vw] top-[15vw] h-[8vw] w-[24vw] md:left-[32vw] md:top-[7vw] md:h-[5vw] md:w-[15vw]"
                            glowColor="#E4405F"
                            href="https://www.instagram.com/your-username"
                            icon={<Instagram className="w-[5vw] h-[5vw]" />}
                            text="Instagram"
                            textSize="text-[3vw] md:text-[2vw]"
                        />
                    </div>
                </div>

                
                <div className="text-white flex flex-col items-center justify-center">
                    <div className="text-[4vw] md:text-[2vw] font-kanji mb-[0vw]">
                        Pics
                    </div>
                    <div className="text-[1.5vw]">
                        Some pictures of me,my interests, and random stuff

                    </div>

                    
                </div>

                <Carousel
                    setApi={setApi}
                    opts={{
                        align: "center",
                        loop: true,
                        slidesToScroll: 1,
                        skipSnaps: false,
                        dragFree: false,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {images.map((image, index) => (
                            <CarouselItem key={index} className=" pl-[20vh] md:pl-0 basis-1/5 md:basis-1/5 ">
                                <div className="relative group  h-[50vw] md:h-[25vw] ">
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
                    <div className="absolute left-0 top-0 md:w-[10vw] h-full pointer-events-none z-10">
                        <div 
                            className="w-full h-full backdrop-blur-md"
                            style={{
                                maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0) 100%)',
                                WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0) 100%)'
                            }}
                        />
                    </div>

                     <div className="absolute right-0 top-0 md:w-[10vw] rounded-lg h-full pointer-events-none z-10">
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
