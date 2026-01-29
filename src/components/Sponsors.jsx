function Sponsors() {
    const organizations = {
        hosted: [
            {
                name: 'School of Engineering - Information Technology',
                sub: 'Manipal Academy of Higher Education, Dubai',
                logo: '/img/mahe-dub.png'
            }
        ],
        association: [
            {
                name: 'SoCE',
                sub: 'Manipal Institute of Technology, Bengaluru',
                logo: '/img/mitb-logo.png'
            }
        ],
        organized: [
            {
                name: 'ACM MITB Student Chapter',
                logo: '/img/sponsors/acm mitb.png'
            }
        ]
    }

    const SectionHeader = ({ title }) => (
        <div className="text-center mb-8 mt-12">
            <h3 className="text-xl md:text-2xl font-bold text-yellow-500 uppercase tracking-widest">{title}</h3>
            <div className="w-16 h-0.5 bg-yellow-500/50 mx-auto mt-2"></div>
        </div>
    )

    const OrgCard = ({ logo, name, sub }) => (
        <div className="flex flex-col items-center text-center space-y-4 max-w-sm mx-auto">
            <div className="glass-card bg-white/5 p-6 rounded-xl w-full h-48 flex items-center justify-center">
                <img src={logo} alt={name} className="max-w-full max-h-32 w-auto h-auto object-contain" />
            </div>
            <div>
                <h4 className="text-white font-semibold text-lg">{name}</h4>
                {sub && <p className="text-gray-400 text-sm mt-1">{sub}</p>}
            </div>
        </div>
    )

    return (
        <section className="py-20 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="section-title gradient-text inline-block">Sponsors & Organizers</h2>
                    <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Call to Action for Sponsorship */}
                <div className="mb-20 flex justify-center">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                        <button className="relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50 text-lg">
                            Apply for Sponsorship
                        </button>
                    </div>
                </div>

                {/* Organizers Grid */}
                <div className="border-t border-white/10 pt-16">
                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Hosted By */}
                        <div>
                            <SectionHeader title="Hosted By" />
                            {organizations.hosted.map((o, i) => (
                                <OrgCard key={i} {...o} />
                            ))}
                        </div>

                        {/* In Association With */}
                        <div>
                            <SectionHeader title="In Association With" />
                            {organizations.association.map((o, i) => (
                                <OrgCard key={i} {...o} />
                            ))}
                        </div>

                        {/* Organized By */}
                        <div>
                            <SectionHeader title="Organized By" />
                            {organizations.organized.map((o, i) => (
                                <OrgCard key={i} {...o} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sponsors
