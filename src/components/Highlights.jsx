import { useState, useEffect } from 'react'

function Highlights() {
    const images = [
        '/img/event1.jpg',
        '/img/event2.jpg',
        '/img/event3.jpg',
        '/img/event4.jpg',
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    }

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    return (
        <section className="py-20 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="section-title gradient-text inline-block">Conference Highlights</h2>
                    <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="relative max-w-5xl mx-auto group">
                    {/* Main Slider Container */}
                    <div className="relative aspect-video md:aspect-[21/9] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                            >
                                <img
                                    src={img}
                                    alt={`Conference Highlight ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                        ))}

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-yellow-500 hover:text-black transition-all opacity-0 group-hover:opacity-100"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-yellow-500 hover:text-black transition-all opacity-0 group-hover:opacity-100"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center gap-2 mt-6">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-yellow-500 w-8' : 'bg-white/20 hover:bg-white/40'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlights
