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
        <main className="pt-24 pb-16 bg-black min-h-screen">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="section-title gradient-text">Keynote Speakers</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {speakers.map((speaker) => (
                        <div key={speaker.name} className="speaker-card text-center">
                            <img
                                src={speaker.image}
                                alt={speaker.name}
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h3 className="text-xl font-semibold text-white">{speaker.name}</h3>
                            <p className="text-yellow-400 font-medium">{speaker.title}</p>
                            <p className="text-gray-400 text-sm">{speaker.department}</p>
                            <p className="text-gray-500 text-sm">{speaker.institution}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Speakers
