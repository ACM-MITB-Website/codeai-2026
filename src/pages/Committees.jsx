function Committees() {
    const chiefPatrons = [
        { name: 'Lt. Gen. (Dr.) M D Venkatesh', title: 'Vice Chancellor', institution: 'MAHE', image: '/img/Organisers/Dr.M.D.Venkatesh.png' },
    ]

    const patrons = [
        { name: 'Dr. Narayana Sabhahit', title: 'Pro Vice Chancellor', institution: 'MAHE Bengaluru', image: '/img/Organisers/Dr.Narayana.png' },
        { name: 'Dr. H.S. Ballal', title: 'Pro Chancellor', institution: 'MAHE', image: '/img/Organisers/Dr.H.S.Ballal.jpg' },
    ]

    const generalChairs = [
        { name: 'Dr. Sreejith V', title: 'Director', institution: 'MIT Bengaluru', image: '/img/Organisers/drshri.jpg' },
        { name: 'Dr. Raghavendra Prabhu P', title: 'HOD, Computer Science', institution: 'MIT Bengaluru', image: '/img/Organisers/Dr-Raghavendra-Prabhu-P.jpg' },
    ]

    const organizingChairs = [
        { name: 'Dr. Deepa Shenoy', title: 'Professor', institution: 'MIT Bengaluru', image: '/img/Organisers/drdeepa.jpg' },
        { name: 'Dr. Anand Kumar M', title: 'Associate Professor', institution: 'MIT Bengaluru', image: '/img/Organisers/drabdulla.jpg' },
    ]

    const technicalCommittee = [
        'Dr. James Wilson, Stanford University',
        'Dr. Sarah Chen, MIT',
        'Dr. Michael Brown, Oxford University',
        'Dr. Priya Sharma, IIT Delhi',
        'Dr. David Kim, Seoul National University',
        'Dr. Emma Davis, ETH Zurich',
    ]

    const advisoryBoard = [
        'Prof. Robert Johnson, Harvard University',
        'Prof. Lisa Wang, Tsinghua University',
        'Prof. Ahmed Hassan, Cairo University',
        'Prof. Maria Garcia, TU Munich',
    ]

    return (
        <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm font-medium mb-6">
                            Meet Our Team
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Conference <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Committees</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Distinguished academicians and industry leaders driving CODE-AI 2026
                        </p>
                    </div>
                </div>
            </section>

            {/* Chief Patron - Featured Large Card */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-600/10 rounded-3xl blur-xl"></div>
                    <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-yellow-500/20 rounded-3xl p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full blur-lg opacity-50"></div>
                                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-yellow-500/30">
                                    <img
                                        src={chiefPatrons[0].image}
                                        alt={chiefPatrons[0].name}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                            <div className="text-center md:text-left">
                                <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm font-semibold rounded-full mb-4">
                                    Chief Patron
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{chiefPatrons[0].name}</h2>
                                <p className="text-yellow-400 text-xl font-medium mb-1">{chiefPatrons[0].title}</p>
                                <p className="text-gray-400 text-lg">{chiefPatrons[0].institution}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Patrons */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    <span className="text-yellow-400">◆</span> Patrons <span className="text-yellow-400">◆</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {patrons.map((patron) => (
                        <div key={patron.name} className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative bg-gray-900/80 border border-gray-800 group-hover:border-yellow-500/30 rounded-2xl p-6 transition-all">
                                <div className="flex items-center gap-5">
                                    <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-yellow-500/20 flex-shrink-0">
                                        <img
                                            src={patron.image}
                                            alt={patron.name}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors">{patron.name}</h3>
                                        <p className="text-yellow-500 font-medium">{patron.title}</p>
                                        <p className="text-gray-500 text-sm">{patron.institution}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* General Chairs */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    <span className="text-yellow-400">◆</span> General Chairs <span className="text-yellow-400">◆</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {generalChairs.map((chair) => (
                        <div key={chair.name} className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative bg-gray-900/80 border border-gray-800 group-hover:border-yellow-500/30 rounded-2xl p-6 transition-all">
                                <div className="flex items-center gap-5">
                                    <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-yellow-500/20 flex-shrink-0">
                                        <img
                                            src={chair.image}
                                            alt={chair.name}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors">{chair.name}</h3>
                                        <p className="text-yellow-500 font-medium">{chair.title}</p>
                                        <p className="text-gray-500 text-sm">{chair.institution}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Organizing Chairs */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    <span className="text-yellow-400">◆</span> Organizing Chairs <span className="text-yellow-400">◆</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {organizingChairs.map((chair) => (
                        <div key={chair.name} className="bg-gray-900/50 border border-gray-800 hover:border-yellow-500/30 rounded-xl p-5 text-center transition-all group">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-500/20 mx-auto mb-4">
                                <img
                                    src={chair.image}
                                    alt={chair.name}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-white">{chair.name}</h3>
                            <p className="text-yellow-500 text-sm font-medium">{chair.title}</p>
                            <p className="text-gray-500 text-xs">{chair.institution}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Technical Program Committee & Advisory Board */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Technical Committee */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-8">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-white">Technical Program Committee</h2>
                        </div>
                        <ul className="space-y-3">
                            {technicalCommittee.map((member, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors">
                                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                                    {member}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Advisory Board */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-8">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-white">Advisory Board</h2>
                        </div>
                        <ul className="space-y-3">
                            {advisoryBoard.map((member, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors">
                                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                                    {member}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Committees
