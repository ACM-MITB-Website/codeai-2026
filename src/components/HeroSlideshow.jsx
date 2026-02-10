import { useState, useEffect } from 'react'

function HeroSlideshow() {
    // Grouping images to fit better as requested
    const slides = [
        // Single highlights
        [{ src: '/img/slideshow/IMG_5241.JPG', alt: 'Conference Audience' }],

        // Group of 2
        [
            { src: '/img/slideshow/IMG_5205.JPG', alt: 'Conference Event' },
            { src: '/img/slideshow/IMG_5224.JPG', alt: 'Conference Presentation' }
        ],

        // Group of 2
        [
            { src: '/img/slideshow/IMG_5226.JPG', alt: 'Conference Interaction' },
            { src: '/img/slideshow/IMG_5228.JPG', alt: 'Keynote Speech' }
        ],

        // Single highlight
        [{ src: '/img/slideshow/IMG_5236.JPG', alt: 'Conference Talk' }],

        // Group of 3
        [
            { src: '/img/slideshow/IMG_5242.JPG', alt: 'Event Moment' },
            { src: '/img/slideshow/IMG_5249.JPG', alt: 'Networking' },
            { src: '/img/slideshow/IMG_5270.JPG', alt: 'Closing Ceremony' }
        ]
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)

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
        const newIndex = (currentIndex + 1) % slides.length
        goToSlide(newIndex)
    }

    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length
        goToSlide(newIndex)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            // Auto-advance logic
            goToSlide((currentIndex + 1) % slides.length)
        }, 5000) // Change every 5 seconds

        return () => clearInterval(interval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex, slides.length])

    return (
        <div className="hero-image-section relative group w-full h-full overflow-hidden bg-[#1a2332]">
            {/* Background images - blurred for ambiance (using the first image of the group) */}
            {slides.map((slideGroup, index) => (
                <div
                    key={`bg-${index}`}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img
                        src={slideGroup[0].src}
                        alt=""
                        className="w-full h-full object-cover blur-3xl scale-110 brightness-50 opacity-60"
                    />
                </div>
            ))}

            {/* Foreground Content */}
            {slides.map((slideGroup, index) => (
                <div
                    key={`fg-${index}`}
                    className={`absolute inset-0 flex items-center justify-center p-4 md:p-12 transition-all duration-700 ease-in-out transform ${
                        index === currentIndex
                            ? 'opacity-100 translate-x-0 scale-100'
                            : index < currentIndex
                              ? 'opacity-0 -translate-x-full scale-95'
                              : 'opacity-0 translate-x-full scale-95'
                    }`}
                >
                    <div
                        className={`flex flex-col md:flex-row gap-4 h-full w-full items-center justify-center ${slideGroup.length > 1 ? 'max-w-7xl' : 'max-w-5xl'}`}
                    >
                        {slideGroup.map((img, imgIdx) => (
                            <div
                                key={imgIdx}
                                className={`relative overflow-hidden rounded-xl shadow-2xl transition-transform hover:scale-[1.02] duration-300 ${
                                    slideGroup.length === 1
                                        ? 'w-full h-full'
                                        : slideGroup.length === 2
                                          ? 'w-full md:w-1/2 h-4/5'
                                          : 'w-full md:w-1/3 h-3/4'
                                }`}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover hover:brightness-110 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Dark overlay for better text contrast if needed */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 text-white hover:bg-[#ffd700] hover:text-[#1a2332] transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm z-20"
                aria-label="Previous slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 text-white hover:bg-[#ffd700] hover:text-[#1a2332] transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm z-20"
                aria-label="Next slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>

            {/* Dots Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentIndex
                                ? 'bg-[#ffd700] w-8'
                                : 'bg-white/50 hover:bg-white'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default HeroSlideshow
