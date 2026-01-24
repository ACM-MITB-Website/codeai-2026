import { Link } from 'react-router-dom'
import HeroTitle from '../components/HeroTitle'
import LogoCarousel from '../components/LogoCarousel'

function Home() {
    const collaborators = [
        { name: 'ACM MITB', logo: '/img/sponsors/acm mitb.png' },
        { name: 'ACM Meerut', logo: '/img/sponsors/acm meerut.png' },
        { name: 'Linnaeus', logo: '/img/sponsors/linnaeus.png' },
        { name: 'Sunway', logo: '/img/sponsors/sunway.png' },
        { name: 'SUPSI', logo: '/img/sponsors/supsi.png' },
        { name: 'IBM', logo: '/img/sponsors/ibm.png' },
    ]

    return (
        <main>
            {/* Hero Section */}
            <section className="min-h-screen bg-black pt-24 pb-16 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="flex flex-col items-center justify-center text-center space-y-8 min-h-[calc(100vh-12rem)]">

                        <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2">
                            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                            <span className="text-sm font-medium text-gray-300">3rd International Conference • April 2026</span>
                        </div>

                        <div className="space-y-4">
                            <HeroTitle />
                            <p className="mt-4 text-2xl md:text-3xl font-semibold text-gray-200">Where Code Meets Intelligence</p>
                        </div>

                        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
                            International Conference on Data Science & Exploration in Artificial Intelligence
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <div className="glass-card rounded-xl px-4 py-3 flex items-center gap-3">
                                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-sm font-medium text-gray-200">MIT Bengaluru, MAHE</span>
                            </div>
                            <div className="glass-card rounded-xl px-4 py-3 flex items-center gap-3">
                                <svg className="w-5 h-5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="text-sm font-medium text-gray-200">April 7-8, 2026</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 justify-center pt-4">
                            <Link to="/registration" className="btn-primary text-lg">Register Now</Link>
                            <Link to="/call-for-papers" className="btn-outline text-lg">Submit Paper</Link>
                        </div>

                        <div className="pt-8 border-t border-yellow-500/20 w-full max-w-3xl">
                            <p className="text-sm text-gray-400 mb-4">Published by</p>
                            <div className="flex items-center gap-6 justify-center">
                                <div className="glass-card rounded-lg px-4 py-2">
                                    <span className="text-sm font-semibold text-gray-200">Springer CCIS</span>
                                </div>
                                <div className="glass-card rounded-lg px-4 py-2">
                                    <span className="text-sm font-semibold text-gray-200">Scopus Indexed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title gradient-text">About CODE-AI</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="glass-card rounded-2xl p-8">
                            <img src="/img/dark-logo-new.png" alt="CODE AI Logo" className="mx-auto max-w-full h-auto" />
                        </div>
                        <div className="space-y-6">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                CODE-AI 2026 serves as a nexus for global visionaries, uniting to bridge research gaps and foster international collaborations that shape the trajectory of careers.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                The heart of the conference lies in Intelligent Computing, where algorithms like Genetic Algorithms, Neural Networks, Machine Learning, and Quantum Computing converge to open doors to uncharted territories.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                In the realm of AI Applications, CODE-AI explores Biometrics, Pattern Recognition, Computer Vision, Expert Systems, and Smart Robotics.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Organizers Section */}
            <section className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title gradient-text">Organizers</h2>
                    <div className="max-w-2xl mx-auto">
                        <div className="speaker-card">
                            <img src="/img/mitb.jpg" alt="MIT Bengaluru" className="rounded-lg mb-4 w-full object-cover h-48" />
                            <h3 className="text-xl font-semibold text-white mb-2">MIT Bengaluru</h3>
                            <p className="text-gray-300">The Garden City of India, Bengaluru, is home to MIT Bengaluru, the latest constituent unit of Manipal Academy of Higher Education (MAHE), recognized as Institute of Eminence by MHRD.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Collaborators Section */}
            <section className="py-20 bg-black overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <div className="text-center">
                        <span className="inline-block px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm font-medium mb-4">
                            Our Partners
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            In Collaboration With
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Partnering with leading institutions and organizations worldwide
                        </p>
                    </div>
                </div>

                {/* Two rows of scrolling logos */}
                <div className="space-y-8">
                    <LogoCarousel logos={collaborators} direction="left" speed={25} />
                    <LogoCarousel logos={collaborators} direction="right" speed={30} />
                </div>
            </section>
        </main>
    )
}

export default Home
