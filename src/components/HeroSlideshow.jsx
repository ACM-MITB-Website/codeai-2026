import { useState, useEffect } from 'react'

function HeroSlideshow() {
    const images = [
        { src: '/img/slideshow/slide_027.png', alt: 'Conference Highlight 1' },
        { src: '/img/slideshow/slide_028.png', alt: 'Conference Highlight 2' },
        { src: '/img/slideshow/slide_029.png', alt: 'Conference Highlight 3' },
        { src: '/img/slideshow/slide_030.png', alt: 'Conference Highlight 4' },
        { src: '/img/slideshow/slide_031.png', alt: 'Conference Highlight 5' },
        { src: '/img/slideshow/slide_032.png', alt: 'Conference Highlight 6' },
        { src: '/img/slideshow/slide_033.png', alt: 'Conference Highlight 7' },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            // Auto-advance logic
            goToSlide((currentIndex + 1) % images.length)
        }, 5000) // Change every 5 seconds

        return () => clearInterval(interval)
    }, [currentIndex, images.length]) // Depend on currentIndex to reset timer

    const goToSlide = (index) => {
        if (index !== currentIndex && !isTransitioning) {
            setIsTransitioning(true)
            setTimeout(() => {
                setCurrentIndex(index)
                setIsTransitioning(false)
            }, 300)
        }
    }

    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % images.length
        goToSlide(newIndex)
    }

    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length
        goToSlide(newIndex)
    }

    return (
        <div className="hero-image-section relative group w-full h-full overflow-hidden bg-[#1a2332]">
            {/* Background images - blurred for ambiance */}
            {images.map((image, index) => (
                <div
                    key={`bg-${index}`}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex && !isTransitioning ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img
                        src={image.src}
                        alt=""
                        className="w-full h-full object-cover blur-xl scale-110 brightness-50"
                    />
                </div>
            ))}

            {/* Foreground images - fully visible */}
            {images.map((image, index) => (
                <div
                    key={`fg-${index}`}
                    className={`absolute inset-0 flex items-center justify-center p-4 transition-opacity duration-1000 ease-in-out ${index === currentIndex && !isTransitioning ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
                    />
                </div>
            ))}

            {/* Dark overlay for better text contrast if needed */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-[#ffd700] hover:text-[#1a2332] transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                aria-label="Previous slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-[#ffd700] hover:text-[#1a2332] transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                aria-label="Next slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    )
}

export default HeroSlideshow
