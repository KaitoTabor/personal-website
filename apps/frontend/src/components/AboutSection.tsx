import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import CurvedLoop from "@/blocks/TextAnimations/CurvedLoop/CurvedLoop";
import { Car, Instagram } from "lucide-react";
import GlowButton from "./ui/GlowButton";


// Custom hook to get responsive yOffset value
const useResponsiveYOffset = () => {
    const [yOffset, setYOffset] = useState(150); // Reduced default value for tab view

    useEffect(() => {
        const updateYOffset = () => {
            const width = window.innerWidth;
            if (width >= 768) { // md breakpoint and above
                setYOffset(150); // Reduced value for md+ screens in tab view
            } else {
                setYOffset(300); // Reduced value for smaller screens in tab view
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
        <div className="flex justify-center w-full overflow-x-hidden">
            <div className="relative items-center w-full overflow-x-hidden">
                <div className="flex flex-col items-center justify-center p-[1vh] md:p-[1vw]">
                    <Card className="rounded-none relative overflow-hidden w-full max-w-[80%] h-[30vw] bg-white border-[rgba(35,37,41,1)] border-1 shadow-lg shadow-[rgb(0_0_0)]">
                        <CardContent className="p-0 w-full h-full flex items-center justify-center">
                            <div className="rounded-none shadow-0 absolute overflow-hidden w-[50%] h-[60%] bg-[rgb(9,24,99)] border-white z-10">
                            </div>
                            <div className="relative z-20 w-full h-full">
                                <CurvedLoop 
                                    marqueeText="Data Scientist✦Machine Learning✦Software Engineer✦Fullstack Developer✦"
                                    speed={2}
                                    curveAmount={-300}
                                    direction="right"
                                    interactive={true}
                                    className="fill-black"
                                    yOffset={yOffset}
                                />
                            </div>
                            <div className="absolute font-kanji w-full flex justify-start left-[5%] top-[40%] text-[8vw] md:left-[3%] md:top-[35%] md:text-[4vw] z-10">
                                kaiTo
                            </div>
                            <div className="absolute font-kanji w-full flex justify-end right-[2%] top-[40%] text-[8vw] md:right-[1%] md:top-[35%] md:text-[4vw] z-10">
                                Tabor
                            </div>
                            <div className="absolute font-kanji w-full flex top-[5%] right-[5%] text-[4vw] md:right-[3%] md:text-[2vw] z-10">
                                WPI-27
                            </div>
                        </CardContent>
                    </Card>
                </div>
                
                <div className="flex justify-center mb-[2vw] mt-[2vw]">
                    <div className="relative shadow-0 overflow-hidden rounded-lg w-[90%] h-[25vw] bg-[rgba(35,37,41,0.8)] border-[rgba(42,42,39,1)] border-3 z-10">
                        <div className="absolute inset-0 flex items-center justify-start left-[3%] top-[10%]">
                            <div className="text-white text-[1.2vw] w-[60%] md:text-[0.8vw]">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus augue, dapibus sed sem id, pulvinar consectetur sapien. Morbi nec diam suscipit, consequat turpis sed, fringilla mi. Morbi ac convallis metus. Nulla consequat lobortis pretium. Suspendisse placerat mauris quis massa fermentum, sed placerat mauris fringilla.
                            </div>
                        </div>
                        <div className="absolute text-white top-[3%] left-[3%] text-[2vw] md:text-[1.5vw]">
                            About me
                        </div>
                        <GlowButton 
                            className="absolute right-[5%] top-[15%] h-[5vw] w-[15vw] md:h-[3vw] md:w-[10vw]"
                            glowColor="#0077b5"
                            href="https://www.linkedin.com/in/your-profile"
                            icon="devicon-linkedin-plain"
                            text="LinkedIn"
                            iconSize="text-[3vw] md:text-[2vw]"
                            textSize="text-[1.5vw] md:text-[1vw]"
                        />
                        <GlowButton 
                            className="absolute right-[5%] top-[40%] h-[5vw] w-[15vw] md:h-[3vw] md:w-[10vw]"
                            glowColor="#6e5494"
                            href="https://github.com/your-username"
                            icon="devicon-github-original"
                            text="GitHub"
                            iconSize="text-[3vw] md:text-[2vw]"
                            textSize="text-[1.5vw] md:text-[1vw]"
                        />
                        <GlowButton 
                            className="absolute right-[5%] top-[65%] h-[5vw] w-[15vw] md:h-[3vw] md:w-[10vw]"
                            glowColor="#E4405F"
                            href="https://www.instagram.com/your-username"
                            icon={<Instagram className="w-[3vw] h-[3vw] md:w-[2vw] md:h-[2vw]" />}
                            text="Instagram"
                            textSize="text-[1.5vw] md:text-[1vw]"
                        />
                    </div>
                </div>

                <div className="text-white flex flex-col items-center justify-center mb-[1vw]">
                    <div className="text-[2vw] md:text-[1.5vw] font-kanji mb-[0.5vw]">
                        Pics
                    </div>
                    <div className="text-[1vw] md:text-[0.8vw]">
                        Some pictures of me, my interests, and random stuff
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
                            <CarouselItem key={index} className="basis-1/4 md:basis-1/5">
                                <div className="relative group h-[15vw] md:h-[12vw]">
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
                    <div className="absolute left-0 top-0 w-[5vw] h-full pointer-events-none z-10">
                        <div 
                            className="w-full h-full backdrop-blur-md"
                            style={{
                                maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0) 100%)',
                                WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0) 100%)'
                            }}
                        />
                    </div>

                    <div className="absolute right-0 top-0 w-[5vw] rounded-lg h-full pointer-events-none z-10">
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
