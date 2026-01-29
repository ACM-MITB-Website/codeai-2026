import { Users, FileText, Globe, Award, Calendar, Building2 } from 'lucide-react'

function ConferenceStats() {
    const stats = [
        {
            number: "3rd",
            label: "Edition",
            icon: Calendar
        },
        {
            number: "50+",
            label: "Papers",
            icon: FileText
        },
        {
            number: "15+",
            label: "Countries",
            icon: Globe
        },
        {
            number: "100+",
            label: "Authors",
            icon: Users
        },
        {
            number: "20+",
            label: "Institutions",
            icon: Building2
        },
        {
            number: "5+",
            label: "Awards",
            icon: Award
        }
    ]

    return (
        <section className="py-16 bg-[#1a2332] border-t-4 border-[#ffd700]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon
                        return (
                            <div
                                key={index}
                                className="stat-item group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <IconComponent
                                    className="stat-icon mb-3 transition-transform group-hover:scale-110"
                                    strokeWidth={1.5}
                                />
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label text-gray-400">{stat.label}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ConferenceStats
