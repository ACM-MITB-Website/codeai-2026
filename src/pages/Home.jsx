import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import HeroSlideshow from '../components/HeroSlideshow'
import LogoGrid from '../components/LogoGrid'
import AcademicPartners from '../components/AcademicPartners'
import Sponsors from '../components/Sponsors'
import EventLocation from '../components/EventLocation'
import CountdownTimer from '../components/CountdownTimer'
import ConferenceStats from '../components/ConferenceStats'
import AIBrainIcon from '../components/AIBrainIcon'

function Home() {
    const [typingText, setTypingText] = useState('')

    useEffect(() => {
        const text = '2026'
        let currentIndex = 0
        const interval = setInterval(() => {
            if (currentIndex <= text.length) {
                setTypingText(text.slice(0, currentIndex))
                currentIndex++
            } else {
                clearInterval(interval)
            }
        }, 200) // Typing speed

        return () => clearInterval(interval)
    }, [])

    return (
        <main className="w-full">
            {/* Hero Section - Full Width Taiwan Image Slideshow */}
            <section className="relative w-full">
                {/* Hero Slideshow */}
                <HeroSlideshow />

                {/* Hero Banner - Conference Info */}
                <div className="hero-banner">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Main Title */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
                            CODE-AI <span className="text-[#ffd700]">{typingText}</span><span className="animate-pulse">|</span>
                        </h1>

                        <h2 className="text-lg md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto">
                            3rd International Conference on Data Science & Exploration in Artificial Intelligence
                        </h2>

                        {/* Date Badge */}
                        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                            <span className="date-badge">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                17th - 19th July 2026
                            </span>
                        </div>

                        {/* Countdown Timer */}
                        <div className="mb-8">
                            <CountdownTimer />
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 justify-center mb-8">
                            <Link to="/registration" className="btn-primary text-lg">
                                Register Now
                            </Link>
                            <Link to="/call-for-papers" className="btn-outline text-lg">
                                Submit Paper
                            </Link>
                        </div>

                        {/* Hosted By Info */}
                        <div className="border-t border-white/10 pt-6 mt-6">
                            <p className="text-sm text-gray-400 mb-2">Hosted by</p>
                            <p className="text-base text-white font-medium">
                                School of Computer Engineering, Manipal Institute of Technology
                            </p>
                            <p className="text-sm text-gray-400">
                                Manipal Academy of Higher Education (MAHE), Bengaluru
                            </p>
                            <div className="mt-4">
                                <p className="text-sm text-yellow-500 font-semibold uppercase tracking-wider mb-1">
                                    In Collaboration with
                                </p>
                                <p className="text-xl text-white font-bold leading-tight">
                                    National Tsing Hua University
                                </p>
                                <p className="text-base text-gray-300 mt-1">
                                    Hsinchu, Taiwan
                                </p>
                            </div>
                        </div>

                        {/* Publisher Logos */}
                        <div className="pt-8 mt-6 border-t border-white/10">
                            <p className="text-sm text-gray-400 mb-4">Published by</p>
                            <div className="flex items-center gap-12 justify-center">
                                <img
                                    src="/img/springerccis.png"
                                    alt="Springer CCIS"
                                    className="h-16 md:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                                />
                                <img
                                    src="/img/sponsors/scopus.png"
                                    alt="Scopus Indexed"
                                    className="h-16 md:h-20 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <ConferenceStats />

            {/* Collaborators Section - Dark Theme with Static Logos */}
            <LogoGrid />

            {/* About Section - Cream Background */}
            <section id="about" className="w-full py-20 bg-[#f8f6f2] reveal">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <AIBrainIcon size={48} />
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                About CODE-AI
                            </h2>
                        </div>
                        <div className="divider-gold"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="glass-card rounded-2xl p-8 bg-white">
                            <img src="/img/dark-logo-new.png" alt="CODE AI Logo" className="mx-auto max-w-full h-auto" />
                        </div>
                        <div className="space-y-6">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                CODE-AI 2026 serves as a nexus for global visionaries, uniting to bridge research gaps and foster international collaborations that shape the trajectory of careers.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                The heart of the conference lies in Intelligent Computing, where algorithms like Genetic Algorithms, Neural Networks, Machine Learning, and Quantum Computing converge to open doors to uncharted territories.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                In the realm of AI Applications, CODE-AI explores Biometrics, Pattern Recognition, Computer Vision, Expert Systems, and Smart Robotics.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Organizers Section - White Background */}
            <section className="w-full py-20 bg-white reveal">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
                        Organizers
                    </h2>
                    <div className="divider-gold"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        {/* MIT Bengaluru */}
                        <div className="partner-card h-full flex flex-col">
                            <img
                                src="/img/mitb.jpg"
                                alt="MIT Bengaluru"
                                className="rounded-t-lg w-full object-cover h-56"
                            />
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">MIT Bengaluru</h3>
                                <div className="text-gray-600 space-y-4 flex-1">
                                    <p>
                                        The Garden City of India, Bengaluru, is now home to a new engineering institution, "MIT Bengaluru", the latest constituent unit of Manipal Academy of Higher Education (MAHE).
                                    </p>
                                    <p>
                                        MAHE is recognized as a deemed-to-be university since 1993 and has been accorded the status of Institute of Eminence (IoE) by MHRD, Government of India.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ACM MITB */}
                        <div className="partner-card h-full flex flex-col">
                            <div className="h-56 bg-[#1a2332] rounded-t-lg flex items-center justify-center p-6">
                                <img src="/img/sponsors/acm mitb.png" alt="ACM MITB" className="max-h-full max-w-full object-contain" />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">About ACM MITB</h3>
                                <div className="text-gray-600 space-y-4 flex-1">
                                    <p>
                                        The MITB ACM student chapter is a community of students passionate about computer science and technology. We strive to create a collaborative and inclusive environment for students to learn, grow, and make a difference in the world.
                                    </p>
                                    <p>
                                        Our chapter is affiliated with the Association for Computing Machinery (ACM), the world's largest educational and scientific computing society.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Academic Partners Section */}
            <div className="w-full reveal">
                <AcademicPartners />
            </div>

            {/* Sponsors & Organizers Section */}
            <div className="w-full reveal">
                <Sponsors />
            </div>

            {/* Event Location Section */}
            <div className="w-full reveal">
                <EventLocation />
            </div>
        </main>
    )
}

export default Home
