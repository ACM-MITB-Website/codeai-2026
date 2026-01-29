import { useState, useEffect } from 'react'

function HeroSlideshow() {
    const images = [
        { src: '/img/venue-taiwan.png', alt: 'Taiwan Venue' },
        { src: '/img/taiwan-cityscape.png', alt: 'Taipei 101 Cityscape' },
        { src: '/img/taiwan-nature.png', alt: 'Taroko Gorge' },
        { src: '/img/taiwan-temple.png', alt: 'Traditional Temple' },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true)
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length)
                setIsTransitioning(false)
            }, 500)
        }, 5000) // Change every 5 seconds

        return () => clearInterval(interval)
    }, [images.length])

    const goToSlide = (index) => {
        if (index !== currentIndex) {
            setIsTransitioning(true)
            setTimeout(() => {
                setCurrentIndex(index)
                setIsTransitioning(false)
            }, 300)
        }
    }

    return (
        <div className="hero-image-section relative">
            {/* Background images - all preloaded */}
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`hero-image absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex && !isTransitioning ? 'opacity-100' : 'opacity-0'
                        }`}
                />
            ))}

            {/* Dark overlay */}
            <div className="hero-overlay"></div>

            {/* Navigation dots */}
            <div className="absolute bottom-6 right-6 flex items-center gap-2 z-20">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-white scale-110'
                                : 'bg-white/40 hover:bg-white/60'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default HeroSlideshow
