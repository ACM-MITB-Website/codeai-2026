function Publications() {
    const journals = [
        { id: '01', title: 'Frontiers in Digital Health', publisher: 'Frontiers', sjr: 'Q1' },
        {
            id: '02',
            title: 'JDMSC Journal of Discrete Mathematics Sciences and Cryptography',
            publisher: '',
            sjr: 'Q1'
        },
        { id: '03', title: 'SN Computer Science', publisher: 'Springer Nature', sjr: 'Q1' },
        { id: '04', title: 'CNS Neurosciences and Therapeutics', publisher: 'Wiley', sjr: 'Q1' },
        { id: '05', title: 'Journal of Sensors', publisher: 'Wiley', sjr: 'Q2' },
        {
            id: '06',
            title: 'BJIT - International Journal of Information Technology',
            publisher: 'Springer Nature',
            sjr: 'Q2'
        },
        { id: '07', title: 'Other Journals Will Be Announced Soon.....', publisher: '', sjr: '' }
    ]

    const ethics = [
        {
            id: '1',
            title: 'Originality of Submission',
            desc: 'Authors must submit only original work not under consideration elsewhere.'
        },
        {
            id: '2',
            title: 'Plagiarism Limit',
            desc: 'The manuscript should have less than 15% similarity to other works.'
        },
        {
            id: '3',
            title: 'Prohibition on Generative AI Content',
            desc: 'Generative AI tools for content creation are not allowed. Language editing tools are permitted if disclosed.'
        },
        {
            id: '4',
            title: 'Research Ethics Compliance',
            desc: 'Authors must adhere to COPE standards on research ethics and integrity.'
        }
    ]

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-20 sm:pt-32 pb-12 overflow-hidden bg-[#1a2332]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            <span className="text-[#ffd700]">Publications</span>
                        </h1>
                        <div className="w-24 h-1 bg-[#ffd700] mx-auto mt-4 rounded-full"></div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Proceedings Section */}
                <div className="mb-20">
                    <div className="bg-[#f8f6f2] rounded-2xl p-8 md:p-12 mb-12 border border-[#ffd700]/30 text-center shadow-lg">
                        <p className="text-xl md:text-2xl text-gray-700 font-medium italic max-w-4xl mx-auto leading-relaxed">
                            &quot;All accepted and presented papers in the conference will be
                            published in the conference proceedings and indexed in Scopus, Ei
                            Compendex, and other major databases.&quot;
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Scopus */}
                        <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#ffd700] transition-all group shadow-lg">
                            <div className="h-64 flex items-center justify-center mb-6 bg-[#f8f6f2] rounded-xl">
                                <img
                                    src="/img/sponsors/scopus.png"
                                    alt="Scopus"
                                    className="h-56 object-contain transition-all"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Scopus Indexed</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Scopus is a robust academic database designed to assist researchers,
                                academics, and institutions in efficiently accessing and analyzing
                                scholarly literature. It indexes research papers, journals,
                                conference proceedings, and patents, making it a valuable tool for
                                tracking and evaluating academic work.
                            </p>
                        </div>

                        {/* Compendex */}
                        <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#ffd700] transition-all group shadow-lg">
                            <div className="h-64 flex items-center justify-center mb-6 bg-[#f8f6f2] rounded-xl">
                                <img
                                    src="/img/sponsors/compendex.png"
                                    alt="Ei Compendex"
                                    className="h-56 object-contain transition-all"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Ei Compendex</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Compendex is an engineering and technical research database that
                                serves as a valuable resource for professionals in engineering and
                                related fields. It contains a wide range of technical literature,
                                making it a go-to tool for staying updated on latest developments in
                                various engineering disciplines.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Journals Section */}
                <div className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-[#ffd700] text-2xl">★</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Journal Publications
                        </h2>
                    </div>
                    <p className="text-gray-600 text-lg mb-8">
                        Selected and Extended Papers of the Conference will be published in the
                        following Journals:
                    </p>

                    <div className="grid gap-4">
                        {journals.map((journal) => (
                            <div
                                key={journal.id}
                                className="bg-white border border-gray-200 p-6 rounded-xl flex flex-col md:flex-row md:items-center gap-4 group hover:border-[#ffd700] transition-all shadow-sm hover:shadow-lg"
                            >
                                <div className="flex-shrink-0 w-12 h-12 bg-[#ffd700]/10 rounded-full flex items-center justify-center text-[#ccac00] font-bold border border-[#ffd700]/20">
                                    {journal.id}
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#ccac00] transition-colors">
                                        {journal.title}
                                    </h3>
                                    {journal.publisher && (
                                        <p className="text-gray-500 text-sm">{journal.publisher}</p>
                                    )}
                                </div>
                                {journal.sjr && (
                                    <div className="flex-shrink-0">
                                        <span
                                            className={`px-4 py-1.5 rounded-full text-sm font-bold ${journal.sjr === 'Q1' ? 'bg-[#ffd700] text-gray-900' : 'bg-gray-100 text-gray-700'}`}
                                        >
                                            SJR: {journal.sjr}
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Ethics Section */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-[#ffd700] text-2xl">★</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Publications Ethics
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ethics.map((item) => (
                            <div
                                key={item.id}
                                className="bg-[#f8f6f2] border border-gray-200 rounded-xl p-6 hover:bg-[#ffd700]/5 hover:border-[#ffd700] transition-colors"
                            >
                                <span className="inline-flex w-8 h-8 rounded-lg bg-[#ffd700] text-gray-900 font-bold items-center justify-center mb-4">
                                    {item.id}
                                </span>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Publications
