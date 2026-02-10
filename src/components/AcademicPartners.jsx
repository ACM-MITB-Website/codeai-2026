function AcademicPartners() {
    const partners = [
        {
            name: 'Sunway University',
            logo: '/img/sponsors/sunway.png',
            desc: 'Sunway University, located in Malaysia, is a leading private institution known for its focus on research, innovation, and holistic education. With a commitment to fostering a world-class learning environment, Sunway University excels in areas such as business, computing, health sciences, and the arts.'
        },
        {
            name: 'Linnaeus University',
            logo: '/img/sponsors/linnaeus.png',
            desc: 'Linnaeus University, situated in Sweden with campuses in Växjö and Kalmar, is a dynamic institution recognized for its high-quality education and commitment to sustainability, innovation, and international collaboration. Named after the renowned scientist Carl Linnaeus.'
        },
        {
            name: 'SUPSI',
            logo: '/img/sponsors/supsi.png',
            desc: 'SUPSI, located in the Italian-speaking region of Switzerland, is a leading institution renowned for its applied sciences programs and practical, hands-on approach to education. With a strong emphasis on interdisciplinary research, innovation, and collaboration with industry.'
        },
        {
            name: 'University of Information Technology and Sciences',
            logo: '/img/sponsors/uits.png',
            desc: 'The University of Information Technology and Sciences (UITS) is a beacon of academic excellence, specializing in technology and sciences education. Renowned for its innovative approach, UITS provides a dynamic learning environment that integrates theoretical knowledge with practical skills.'
        },
        {
            name: 'ACM MITB',
            logo: '/img/acm-mitb-logo.png',
            desc: 'The Association for Computing Machinery (ACM) Student Chapter at MIT Bengaluru is a dynamic community dedicated to advancing computing as a science and profession. It fosters a collaborative environment for students to explore emerging technologies, engage in research, and build professional networks.'
        },
        {
            name: 'IBM',
            logo: '/img/sponsors/ibm.png',
            desc: 'IBM is a global technology and innovation leader, pioneering advancements in artificial intelligence, cloud computing, and quantum computing. With a legacy of research and development, IBM continues to shape the future of technology and empower industries worldwide.'
        },
        {
            name: 'Compendex',
            logo: '/img/sponsors/compendex.png',
            desc: 'Ei Compendex is the broadest and most complete engineering literature database in the world. It provides a comprehensive and trustworthy view of engineering research, ensuring that scholars and professionals access high-quality, peer-reviewed content across various engineering disciplines.'
        }
    ]

    return (
        <section className="py-20 bg-[#f8f6f2] relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffd700]/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ffd700]/5 rounded-full blur-3xl -ml-20 -mb-20"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block">
                        Academic Partners
                    </h2>
                    <div className="w-24 h-1 bg-[#ffd700] mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {partners.map((partner, idx) => (
                        <div
                            key={idx}
                            className="group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] max-w-sm"
                        >
                            <div className="h-full bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#ffd700] transition-all duration-300 flex flex-col group-hover:-translate-y-2 relative shadow-sm hover:shadow-xl">
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-[#ffd700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                                {/* Logo Banner - Dark background for visibility */}
                                <div className="p-8 h-56 flex items-center justify-center border-b border-gray-100 bg-[#1a2332]">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="w-auto h-auto max-w-[80%] max-h-48 object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-1 flex flex-col relative z-10">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#ccac00] transition-colors">
                                        {partner.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed flex-1 text-justify">
                                        {partner.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AcademicPartners
