function CallForPapers() {
    const importantDates = [
        { date: '10th November 2025', event: 'Submission Start Date' },
        { date: '15th January 2026', event: 'Submission Deadline' },
        { date: '1st February 2026', event: 'Acceptance Notification' },
        { date: '1st March 2026', event: 'Registration Deadline' },
    ]

    const themes = [
        'Exploration Techniques in AI and Data Science',
        'Explainability and Interpretability in AI-Driven Data Science',
        'AI-Powered Data Integration',
        'Data-Driven Decision Making Using AI',
        'Deep Learning for Data Analytics',
        'Data Exploration in IoT and Edge Environments',
        'Advanced Data Visualization Techniques',
        'AI for Real-World Challenges in Data Science',
        'Ethical and Responsible AI in Data Science',
        'Emerging Trends in Data Exploration',
    ]

    return (
        <main className="pt-24 pb-16 bg-black min-h-screen">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="section-title gradient-text">Call for Papers</h1>

                {/* Submission Types */}
                <div className="glass-card rounded-2xl p-8 mb-8">
                    <h2 className="text-2xl font-semibold text-white mb-4">Submission Types</h2>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                            <span className="font-medium text-gray-300">Regular Papers</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                            <span className="font-medium text-gray-300">Short Papers</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-yellow-300"></span>
                            <span className="font-medium text-gray-300">Special Issue Track Papers</span>
                        </li>
                    </ul>
                </div>

                {/* Important Dates */}
                <div className="glass-card rounded-2xl p-8 mb-8">
                    <h2 className="text-2xl font-semibold text-white mb-6">Important Dates</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {importantDates.map((item, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-4 text-black text-center">
                                <p className="text-2xl font-bold">{item.date.split(' ')[0]}</p>
                                <p className="text-sm opacity-80">{item.date.split(' ').slice(1).join(' ')}</p>
                                <p className="mt-2 font-medium">{item.event}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Themes */}
                <div className="glass-card rounded-2xl p-8 mb-8">
                    <h2 className="text-2xl font-semibold text-white mb-6">Themes for CODE-AI 2026</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {themes.map((theme, idx) => (
                            <div key={idx} className="theme-card flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-black font-bold">
                                    {idx + 1}
                                </div>
                                <p className="text-gray-300 font-medium">{theme}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Paper Format */}
                <div className="glass-card rounded-2xl p-8 text-center">
                    <h2 className="text-2xl font-semibold text-white mb-4">Paper Format</h2>
                    <p className="text-gray-400 mb-6">Download the conference template for paper submission</p>
                    <a href="/file/Microsoft+Word+Proceedings+Templates.zip" className="btn-primary inline-flex items-center gap-2" download>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Template
                    </a>
                </div>
            </section>
        </main>
    )
}

export default CallForPapers
