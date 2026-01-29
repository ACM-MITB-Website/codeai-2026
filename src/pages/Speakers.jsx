function Speakers() {
    const speakers = [
        {
            name: 'Dr. Hong Lin',
            title: 'Professor',
            department: 'Department of Computer Science',
            institution: 'University of Houston Downtown, USA',
            image: '/img/Speakers/honglin.jpg',
        },
        {
            name: 'Dr. Jalil Piran',
            title: 'Head',
            department: 'Department of Computer Science and Engineering',
            institution: 'Sejong University Seoul, South Korea',
            image: '/img/Speakers/jalil.jpg',
        },
    ]

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-12 overflow-hidden bg-[#1a2332]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Keynote <span className="text-[#ffd700]">Speakers</span>
                        </h1>
                        <div className="w-24 h-1 bg-[#ffd700] mx-auto mt-4 rounded-full"></div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-wrap justify-center gap-10 md:gap-16">
                    {speakers.map((speaker) => (
                        <div key={speaker.name} className="group relative w-full sm:w-[350px]">
                            {/* Hover Glow Effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ffd700] to-[#ffb800] rounded-2xl opacity-0 group-hover:opacity-50 blur transition duration-500"></div>

                            <div className="relative bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center h-full hover:border-[#ffd700] transition-colors duration-300 shadow-lg">
                                {/* Image Container */}
                                <div className="relative mb-6">
                                    <div className="w-40 h-40 rounded-full p-1 bg-gradient-to-br from-[#ffd700] to-[#ffb800]">
                                        <img
                                            src={speaker.image}
                                            alt={speaker.name}
                                            className="w-full h-full rounded-full object-cover border-4 border-white"
                                        />
                                    </div>
                                    <div className="absolute bottom-2 right-2 w-8 h-8 bg-[#ffd700] rounded-full flex items-center justify-center text-gray-900 font-bold shadow-md">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                        </svg>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#ccac00] transition-colors">
                                    {speaker.name}
                                </h3>
                                <p className="text-[#ccac00] font-semibold mb-4 tracking-wide uppercase text-sm">
                                    {speaker.title}
                                </p>

                                <div className="w-full border-t border-gray-200 my-4"></div>

                                <div className="space-y-1">
                                    <p className="text-gray-700 font-medium">{speaker.department}</p>
                                    <p className="text-gray-500 text-sm">{speaker.institution}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Speakers
