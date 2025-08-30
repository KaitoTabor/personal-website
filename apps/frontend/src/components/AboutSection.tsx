import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "./ui/carousel";

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
            }, 1000) // Auto advance every 3 seconds
        }

        startAutoplay()

        // Pause autoplay on user interaction
        const handleUserInteraction = () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
            // Restart autoplay after 5 seconds of no interaction
            timeoutRef.current = setTimeout(startAutoplay, 5000)
        }

        api.on('pointerDown', handleUserInteraction)

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
            api.off('pointerDown', handleUserInteraction)
        }
    }, [api])

    return (
        <div className="flex justify-center py-8 overflow-hidden">
            <div className="relative w-full max-w-6xl">
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
                    <CarouselContent className="-ml-1">
                        {images.map((image, index) => (
                            <CarouselItem key={index} className="pl-1 basis-1/5">
                                <div className="relative group h-80">
                                    <div className="aspect-[3/4] rounded-lg overflow-hidden h-full">
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

                    
                    {/* Left blur gradient overlay */}
                    <div className="absolute left-0 top-0 w-32 h-full pointer-events-none z-10">
                        <div className="w-full h-full bg-gradient-to-r from-white via-white/60 to-transparent backdrop-blur-sm" />
                    </div>
                    
                    {/* Right blur gradient overlay */}
                    <div className="absolute right-0 top-0 w-32 h-full pointer-events-none z-10">
                        <div className="w-full h-full bg-gradient-to-l from-white via-white/60 to-transparent backdrop-blur-sm" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default AboutSection;
