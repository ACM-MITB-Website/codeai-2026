import { useEffect, useRef, useState } from 'react'

function LogoCarousel({ logos, direction = 'left', speed = 30 }) {
    const scrollRef = useRef(null)
    const [isClient, setIsClient] = useState(false)

    // Duplicate logos for seamless infinite scroll
    const duplicatedLogos = [...logos, ...logos, ...logos, ...logos]

    useEffect(() => {
        setIsClient(true)
    }, [])

    useEffect(() => {
        if (!isClient) return

        const scrollContainer = scrollRef.current
        if (!scrollContainer) return

        let animationId
        const singleSetWidth = scrollContainer.scrollWidth / 4

        // For right direction, start offset so we have room to scroll left
        let position = direction === 'right' ? singleSetWidth : 0
        const pixelsPerFrame = direction === 'left' ? 0.5 : -0.5

        const animate = () => {
            position += pixelsPerFrame

            // Reset position for seamless loop
            if (direction === 'left') {
                if (position >= singleSetWidth) {
                    position = 0
                }
            } else {
                if (position <= 0) {
                    position = singleSetWidth
                }
            }

            scrollContainer.style.transform = `translateX(${-position}px)`
            animationId = requestAnimationFrame(animate)
        }

        // Set initial position
        scrollContainer.style.transform = `translateX(${-position}px)`
        animationId = requestAnimationFrame(animate)

        return () => cancelAnimationFrame(animationId)
    }, [direction, speed, isClient])

    if (!isClient) {
        return <div className="h-28 bg-white"></div>
    }

    return (
        <div className="relative overflow-hidden py-2">
            {/* Gradient masks - Updated for light theme */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div
                ref={scrollRef}
                className="flex gap-8 items-center will-change-transform"
            >
                {duplicatedLogos.map((logo, index) => (
                    <div
                        key={`${logo.name}-${index}`}
                        className="flex-shrink-0 bg-[#1a2332] border border-gray-700 hover:border-[#ffd700] rounded-xl px-6 py-4 transition-all duration-300 hover:shadow-lg"
                    >
                        <img
                            src={logo.logo}
                            alt={logo.name}
                            className="h-20 w-auto object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LogoCarousel
