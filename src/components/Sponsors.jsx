import { ArrowRight } from 'lucide-react'

function Sponsors() {
    const organizations = {
        hosted: [
            {
                name: 'National Tsing Hua University',
                sub: 'Hsinchu, Taiwan',
                logo: '/img/nthu-logo.svg'
            }
        ],
        association: [
            {
                name: 'ACM MITB Student Chapter',
                sub: 'Manipal Institute of Technology Bengaluru',
                logo: '/img/acm-mitb-logo.png'
            }
        ],
        organized: [
            {
                name: 'SoCE',
                sub: 'Manipal Institute of Technology Bengaluru',
                logo: '/img/mahe-blru-logo.png'
            }
        ]
    }

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block">
                        Sponsors & Organizers
                    </h2>
                    <div className="w-24 h-1 bg-[#ffd700] mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="mb-20 flex justify-center">
                    <button className="flex items-center gap-2 px-8 py-4 bg-[#ffd700] text-gray-900 border-2 border-[#ffd700] font-bold hover:bg-transparent hover:text-gray-900 transform hover:scale-105 transition-all duration-300 text-lg rounded-none">
                        Apply for Sponsorship
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>

                <div className="border-t border-gray-200 pt-16">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div>
                            <SectionHeader title="Hosted By" />
                            {organizations.hosted.map((o) => (
                                <OrgCard key={o.name} {...o} />
                            ))}
                        </div>
                        <div>
                            <SectionHeader title="Organized By" />
                            {organizations.organized.map((o) => (
                                <OrgCard key={o.name} {...o} />
                            ))}
                        </div>
                        <div>
                            <SectionHeader title="Managed By" />
                            {organizations.association.map((o) => (
                                <OrgCard key={o.name} {...o} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const SectionHeader = ({ title }) => (
    <div className="text-center mb-8 mt-12">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 uppercase tracking-widest">
            {title}
        </h3>
        <div className="w-16 h-0.5 bg-[#ffd700] mx-auto mt-2"></div>
    </div>
)

const OrgCard = ({ logo, name, sub }) => (
    <div className="flex flex-col items-center text-center space-y-4 max-w-sm mx-auto">
        <div className="p-6 rounded-xl w-full h-48 flex items-center justify-center transition-colors">
            <img
                src={logo}
                alt={name}
                className="max-w-full max-h-32 w-auto h-auto object-contain"
            />
        </div>
        <div>
            <h4 className="text-gray-900 font-semibold text-lg">{name}</h4>
            {sub && <p className="text-gray-500 text-sm mt-1">{sub}</p>}
        </div>
    </div>
)

export default Sponsors
