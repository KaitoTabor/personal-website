import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import CurvedLoop from "@/blocks/TextAnimations/CurvedLoop/CurvedLoop";
import { Car } from "lucide-react";

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

    useEffect(() => {
        if (!api) return

        const startAutoplay = () => {
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
        }
    }, [api])

    return (
        <div className="flex justify-center  overflow-hidden">
            <div className="relative w-full  max-w-[100vh] md:max-w-[100vw]">
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
                    <CarouselContent className="">
                        {images.map((image, index) => (
                            <CarouselItem key={index} className=" basis-1/5">
                                <div className="relative group  h-[25vh] md:h-[25vw] ">
                                    <div className="aspect-[3/4] overflow-hidden rounded-xl h-full ">
                                        <img 
                                            src={image} 
                                            alt={`Gallery image ${index + 1}`}
                                            className="w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
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
                <div className="flex items-center justify-center p-[2vh]  md:p-[5vw] ">
                <Card className="rounded-none relative overflow-hidden  md:w-[60vw] md:h-[40vw] bg-white">
                    <CardContent className="p-0 w-full h-full flex items-center justify-center">
                        <div className="rounded-none shadow-0 absolute overflow-hidden md:w-[30vw] md:h-[20vw] bg-[rgb(9,24,99)] border-white z-10">
                        </div>
                        <div className="relative z-20 w-full h-full">
                            <CurvedLoop 
                                marqueeText="Kaito ✦  海飛  ✦ Tabor ✦  有安  ✦ "
                                speed={2}
                                curveAmount={-500}
                                direction="right"
                                interactive={true}
                                className="fill-black"
                                yOffset={300}
                            />
                        </div>
                    </CardContent>
                </Card>
        </div>
            </div>
        </div>
    );
}

export default AboutSection;
