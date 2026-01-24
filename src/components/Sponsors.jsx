function Sponsors() {
    const sponsors = {
        gold: [
            { name: 'FlutterFlow', logo: '/img/placeholder.png', alt: 'FlutterFlow' }
        ],
        bronze: [
            { name: 'HP', logo: '/img/placeholder.png', alt: 'HP' }
        ],
        publicity: [
            { name: 'Confab360', logo: '/img/sponsors/confab.png', alt: 'Confab360' }
        ],
        technical: [
            { name: 'IBM', logo: '/img/sponsors/ibm.png', alt: 'IBM' },
            { name: 'ACM Meerut', logo: '/img/sponsors/acm meerut.png', alt: 'ACM Meerut' },
            { name: 'Nokia', logo: '/img/placeholder.png', alt: 'Nokia' }
        ]
    }

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
                name: 'Department of Information Technology',
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

    const SponsorCard = ({ logo, alt, className = "" }) => (
        <div className={`glass-card bg-white/5 hover:bg-white/10 p-6 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 ${className}`}>
            <img src={logo} alt={alt} className="max-w-full max-h-24 w-auto h-auto object-contain transition-transform duration-300 hover:scale-105" />
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

                {/* Sponsors Grid */}
                <div className="space-y-12 mb-20">
                    {/* Gold */}
                    <div>
                        <SectionHeader title="Gold Sponsor" />
                        <div className="flex justify-center">
                            {sponsors.gold.map((s, i) => (
                                <SponsorCard key={i} logo={s.logo} alt={s.alt} className="w-64 h-40" />
                            ))}
                        </div>
                    </div>

                    {/* Bronze */}
                    <div>
                        <SectionHeader title="Bronze Sponsor" />
                        <div className="flex justify-center">
                            {sponsors.bronze.map((s, i) => (
                                <SponsorCard key={i} logo={s.logo} alt={s.alt} className="w-56 h-36" />
                            ))}
                        </div>
                    </div>

                    {/* Publicity */}
                    <div>
                        <SectionHeader title="Publicity Sponsor" />
                        <div className="flex justify-center">
                            {sponsors.publicity.map((s, i) => (
                                <SponsorCard key={i} logo={s.logo} alt={s.alt} className="w-56 h-36" />
                            ))}
                        </div>
                    </div>

                    {/* Technical */}
                    <div>
                        <SectionHeader title="Technical Sponsors" />
                        <div className="flex flex-wrap justify-center gap-8">
                            {sponsors.technical.map((s, i) => (
                                <SponsorCard key={i} logo={s.logo} alt={s.alt} className="w-48 h-32" />
                            ))}
                        </div>
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
