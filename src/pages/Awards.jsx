function Awards() {
    const awards = [
        {
            id: '01',
            title: 'Best Paper Award',
            description: 'Papers selected as Best Session Papers will be nominated for Best Paper Award. The Organizing Committee will select the Best Paper for each theme based on the paper quality and feedback received from the session chairs on the quality of the presentation. Winners will receive a certificate and monetary award. Winners will be recognized during the valedictory function.'
        },
        {
            id: '02',
            title: 'Best Presenter Award',
            description: 'Outstanding presenters at the conference will be eligible for the Best Presenter Award. The Organizing Committee will evaluate presenters based on the quality of their delivery, engagement with the audience, and the clarity of the presentation. The winner will be selected by considering both the feedback received from session chairs and the overall impact of the presentation. The recipient of the Best Presenter Award will be honored with a certificate and a monetary prize, and the recognition will take place during the valedictory function.'
        },
        {
            id: '03',
            title: 'Best Paper Award in the Category of SDG',
            description: 'In recognition of exceptional research contributing to Sustainable Development Goals (SDGs), a Best Paper Award will be presented in the SDG category. Papers nominated for this award will be assessed for their relevance, innovation, and impact on addressing sustainability challenges. The Organizing Committee, in consultation with session chairs, will determine the recipient of the award. The winner will receive a certificate, a monetary prize, and acknowledgment during the valedictory function.'
        },
        {
            id: '04',
            title: 'Best Student Paper Award',
            description: 'Outstanding student researchers will have the opportunity to be recognized through the Best Student Paper Award. Eligible papers must be authored primarily by students, and the quality of research, innovation, and presentation will be taken into consideration. The award recipient must personally present the work during the conference\'s award session. Alongside a certificate, the winner will receive a monetary award and complimentary registration to the subsequent conference.'
        },
        {
            id: '05',
            title: 'Women in Engineering (WiE)',
            description: 'To celebrate and encourage women\'s contributions to the field of engineering, the Women in Engineering (WiE) Award will be presented to a distinguished female researcher or engineer. The award will consider the individual\'s outstanding achievements, leadership, and impact on the engineering community. Nominations or self-nominations for this award are welcome, and the recipient will be honored with a medal and complimentary registration to the subsequent conference. The award session will be conducted if a sufficient number of nominations are received to support the recognition.'
        }
    ]

    return (
        <main className="pt-24 pb-16 bg-black min-h-screen">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="section-title gradient-text mb-12">Awards & Recognition</h1>

                <div className="grid gap-8">
                    {awards.map((award) => (
                        <div key={award.id} className="relative group">
                            {/* Card Background */}
                            <div className="absolute inset-0 bg-yellow-500/5 rounded-2xl transform group-hover:scale-[1.01] transition-transform duration-300"></div>

                            <div className="relative border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/40 transition-colors bg-black/50 backdrop-blur-sm">
                                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                                    {/* Number Badge */}
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 rounded-xl bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-colors">
                                            <span className="text-2xl font-bold text-yellow-500">{award.id}</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                                            {award.title}
                                        </h2>
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            {award.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Awards
