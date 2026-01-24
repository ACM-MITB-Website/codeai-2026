import { Link } from 'react-router-dom'
import HeroTitle from '../components/HeroTitle'
import LogoCarousel from '../components/LogoCarousel'
import AcademicPartners from '../components/AcademicPartners'
import Sponsors from '../components/Sponsors'
import EventLocation from '../components/EventLocation'
import CountdownTimer from '../components/CountdownTimer'
import AuroraHologram from '../components/AuroraHologram'

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
        <main className="w-full">
            {/* Hero Section */}
            <section className="min-h-screen w-full snap-center flex flex-col justify-center relative bg-black pt-24 pb-16 overflow-hidden">
                {/* Floating Code Snippets */}
                <div className="code-float">const ai = new NeuralNetwork()</div>
                <div className="code-float">function learn() { }</div>
                <div className="code-float">model.train(data)</div>
                <div className="code-float">predict(future)</div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Left Column - Text Content */}
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                            <div className="space-y-6 max-w-2xl">
                                <HeroTitle />

                                <h2 className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
                                    3rd International Conference on Data Science & Exploration in Artificial Intelligence
                                </h2>

                                <div className="flex items-center justify-center lg:justify-start gap-3 text-lg md:text-xl text-yellow-500 font-semibold">
                                    <span>MAHE, Dubai</span>
                                    <span>|</span>
                                    <span>7th & 8th April 2026</span>
                                </div>

                                <CountdownTimer />

                                <div className="space-y-2 pt-4 border-t border-white/10">
                                    <p className="text-base md:text-lg text-gray-300 font-medium">
                                        School of Computer Engineering, Manipal Institute of Technology
                                    </p>
                                    <p className="text-sm md:text-base text-gray-400">
                                        Manipal Academy of Higher Education (MAHE), Bengaluru
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <p className="text-sm text-yellow-500 font-bold uppercase tracking-widest">In Collaboration with</p>
                                    <p className="text-base md:text-lg text-gray-300 font-medium">
                                        School of Engineering & IT (SoEIT)
                                    </p>
                                    <p className="text-sm md:text-base text-gray-400">
                                        Manipal Academy of Higher Education (MAHE), Dubai, UAE
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                                <Link to="/registration" className="btn-primary text-lg">Register Now</Link>
                                <Link to="/call-for-papers" className="btn-outline text-lg">Submit Paper</Link>
                            </div>
                        </div>

                        {/* Aurora Hologram Animation - Now visible on all screens */}
                        <div className="flex items-center justify-center order-first lg:order-last">
                            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-[300px] sm:h-[350px] lg:h-[480px]">
                                <AuroraHologram />
                            </div>
                        </div>
                    </div>

                    {/* Publisher Logos */}
                    <div className="pt-12 border-t border-yellow-500/20 w-full max-w-3xl mx-auto lg:mx-0 mt-8">
                        <p className="text-sm text-gray-400 mb-4 text-center lg:text-left">Published by</p>
                        <div className="flex items-center gap-12 justify-center lg:justify-start">
                            <img src="/img/springerccis.png" alt="Springer CCIS" className="h-20 md:h-28 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
                            <img src="/img/sponsors/scopus.png" alt="Scopus Indexed" className="h-20 md:h-28 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Collaborators Section */}
            <section className="w-full snap-center flex flex-col justify-center relative bg-black overflow-hidden reveal py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <div className="text-center">
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

            {/* About Section */}
            <section id="about" className="w-full snap-center flex flex-col justify-center relative bg-black reveal py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title gradient-text">About CODE-AI</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
            <section className="w-full snap-center flex flex-col justify-center relative bg-black reveal py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title gradient-text">Organizers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* MIT Bengaluru */}
                        <div className="speaker-card h-full flex flex-col">
                            <img src="/img/mitb.jpg" alt="MIT Bengaluru" className="rounded-lg mb-4 w-full object-cover h-48" />
                            <h3 className="text-xl font-semibold text-white mb-2">MIT Bengaluru</h3>
                            <div className="text-gray-300 space-y-4 flex-1">
                                <p>
                                    The Garden City of India, Bengaluru, is now home to a new engineering institution, "MIT Bengaluru", the latest constituent unit of Manipal Academy of Higher Education (MAHE).
                                </p>
                                <p>
                                    MAHE is recognized as a deemed-to-be university since 1993 and has been accorded the status of Institute of Eminence (IoE) by MHRD, Government of India. Over the years, MAHE has transformed itself into a centre of excellence that offers knowledge to about 33000+ students from 67+ nations, ably supported by 2500 faculty and almost 10000 support and service staff.
                                </p>
                            </div>
                        </div>

                        {/* ACM MITB */}
                        <div className="speaker-card h-full flex flex-col">
                            <div className="h-48 bg-white/5 rounded-lg mb-4 flex items-center justify-center p-6 border border-white/10">
                                <img src="/img/sponsors/acm mitb.png" alt="ACM MITB" className="max-h-full max-w-full object-contain" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">About ACM MITB</h3>
                            <div className="text-gray-300 space-y-4 flex-1">
                                <p>
                                    The MITB ACM student chapter is a community of students passionate about computer science and technology. We strive to create a collaborative and inclusive environment for students to learn, grow, and make a difference in the world.
                                </p>
                                <p>
                                    Our chapter is affiliated with the Association for Computing Machinery (ACM), the world's largest educational and scientific computing society, which hosts a variety of events, including technical talks, workshops, hackathons, and networking opportunities, to engage and inspire our members.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Academic Partners Section */}
            <div className="w-full snap-center flex flex-col justify-center relative reveal py-12">
                <AcademicPartners />
            </div>

            {/* Sponsors & Organizers Section */}
            <div className="w-full snap-center flex flex-col justify-center relative reveal py-12">
                <Sponsors />
            </div>

            {/* Event Location Section */}
            <div className="w-full snap-center flex flex-col justify-center relative reveal py-12">
                <EventLocation />
            </div>
        </main>
    )
}

export default Home
