function LogoGrid() {
    const logos = [
        { name: 'ACM MITB', logo: '/img/sponsors/acm mitb.png' },

        { name: 'Linnaeus University', logo: '/img/sponsors/linnaeus.png' },
        { name: 'Sunway University', logo: '/img/sponsors/sunway.png' },
        { name: 'SUPSI', logo: '/img/sponsors/supsi.png' },
        { name: 'IBM', logo: '/img/sponsors/ibm.png' },

        { name: 'UITS', logo: '/img/sponsors/uits.png' },
        { name: 'Compendex', logo: '/img/sponsors/compendex.png' },
        { name: 'Scopus', logo: '/img/sponsors/scopus.png' },
    ]

    return (
        <section className="w-full py-20 relative overflow-hidden" style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0c29 100%)'
        }}>
            {/* Gradient overlay for visual interest */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        In Collaboration With
                    </h2>
                    <div className="w-24 h-1 bg-[#ffd700] mx-auto rounded-full"></div>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Partnering with leading institutions and organizations worldwide
                    </p>
                </div>

                {/* Static Logo Grid - Consistent Containers */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-[#ffd700]/50 transition-all duration-300 hover:scale-105 aspect-square"
                        >
                            <img
                                src={logo.logo}
                                alt={logo.name}
                                className="w-full h-full object-contain"
                                title={logo.name}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LogoGrid
