function Publications() {
    const journals = [
        { id: '01', title: 'Frontiers in Digital Health', publisher: 'Frontiers', sjr: 'Q1' },
        { id: '02', title: 'JDMSC Journal of Discrete Mathematics Sciences and Cryptography', publisher: '', sjr: 'Q1' },
        { id: '03', title: 'SN Computer Science', publisher: 'Springer Nature', sjr: 'Q1' },
        { id: '04', title: 'CNS Neurosciences and Therapeutics', publisher: 'Wiley', sjr: 'Q1' },
        { id: '05', title: 'Journal of Sensors', publisher: 'Wiley', sjr: 'Q2' },
        { id: '06', title: 'BJIT - International Journal of Information Technology', publisher: 'Springer Nature', sjr: 'Q2' },
        { id: '07', title: 'Other Journals Will Be Announced Soon.....', publisher: '', sjr: '' },
    ]

    const ethics = [
        { id: '1', title: 'Originality of Submission', desc: 'Authors must submit only original work not under consideration elsewhere.' },
        { id: '2', title: 'Plagiarism Limit', desc: 'The manuscript should have less than 15% similarity to other works.' },
        { id: '3', title: 'Prohibition on Generative AI Content', desc: 'Generative AI tools for content creation are not allowed. Language editing tools are permitted if disclosed.' },
        { id: '4', title: 'Research Ethics Compliance', desc: 'Authors must adhere to COPE standards on research ethics and integrity.' },
    ]

    return (
        <main className="pt-24 pb-16 bg-black min-h-screen">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="section-title gradient-text mb-12">Publications</h1>

                {/* Proceedings Section */}
                <div className="mb-20">
                    <div className="glass-card rounded-2xl p-8 md:p-12 mb-12 border border-yellow-500/20 text-center">
                        <p className="text-xl md:text-2xl text-gray-200 font-medium italic max-w-4xl mx-auto leading-relaxed">
                            "All accepted and presented papers in the conference will be published in the conference proceedings and indexed in Scopus, Ei Compendex, and other major databases."
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Scopus */}
                        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-yellow-500/30 transition-all group">
                            <div className="h-64 flex items-center justify-center mb-6">
                                <img src="/img/sponsors/scopus.png" alt="Scopus" className="h-56 object-contain transition-all" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Scopus Indexed</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Scopus is a robust academic database designed to assist researchers, academics, and institutions in efficiently accessing and analyzing scholarly literature. It indexes research papers, journals, conference proceedings, and patents, making it a valuable tool for tracking and evaluating academic work.
                            </p>
                        </div>

                        {/* Compendex */}
                        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-yellow-500/30 transition-all group">
                            <div className="h-64 flex items-center justify-center mb-6">
                                <img src="/img/sponsors/compendex.png" alt="Ei Compendex" className="h-56 object-contain transition-all" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Ei Compendex</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Compendex is an engineering and technical research database that serves as a valuable resource for professionals in engineering and related fields. It contains a wide range of technical literature, making it a go-to tool for staying updated on latest developments in various engineering disciplines.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Journals Section */}
                <div className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-yellow-500 text-2xl">★</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Journal Publications</h2>
                    </div>
                    <p className="text-gray-400 text-lg mb-8">
                        Selected and Extended Papers of the Conference will be published in the following Journals:
                    </p>

                    <div className="grid gap-4">
                        {journals.map((journal) => (
                            <div key={journal.id} className="glass-card p-6 rounded-xl flex flex-col md:flex-row md:items-center gap-4 group hover:border-yellow-500/40 transition-all">
                                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-500 font-bold border border-yellow-500/20">
                                    {journal.id}
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">
                                        {journal.title}
                                    </h3>
                                    {journal.publisher && (
                                        <p className="text-gray-400 text-sm">{journal.publisher}</p>
                                    )}
                                </div>
                                {journal.sjr && (
                                    <div className="flex-shrink-0">
                                        <span className={`px-4 py-1.5 rounded-full text-sm font-bold ${journal.sjr === 'Q1' ? 'bg-yellow-500 text-black' : 'bg-white/10 text-white'}`}>
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
                        <span className="text-yellow-500 text-2xl">★</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Publications Ethics</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ethics.map((item) => (
                            <div key={item.id} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                <span className="inline-block w-8 h-8 rounded-lg bg-yellow-500 text-black font-bold flex items-center justify-center mb-4">
                                    {item.id}
                                </span>
                                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </main>
    )
}

export default Publications
