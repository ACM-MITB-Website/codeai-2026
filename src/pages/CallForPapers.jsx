function CallForPapers() {
    const importantDates = [
        { date: '15th February 2026', event: 'Submission Start Date' },
        { date: '15th March 2026', event: 'Submission Deadline' },
        { date: '1st April 2026', event: 'Acceptance Notification' },
        { date: '15th April 2026', event: 'Registration Deadline' }
    ]

    const themes = [
        'Artificial Intelligence for Machine Vision',
        'Neurocomputing',
        'Face, Gesture, and Action Recognition',
        'Pattern Recognition',
        'AI in Cryptography',
        'Human Computer Engineering',
        'Human Computer Interaction',
        'AI and Application',
        'AI Policy'
    ]

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-12 overflow-hidden bg-[#1a2332]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Call for <span className="text-[#ffd700]">Papers</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Submit your research to CODE-AI 2026
                        </p>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Submission Types */}
                <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Submission Types</h2>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#ffd700]"></span>
                            <span className="font-medium text-gray-700">Regular Papers</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#ffb800]"></span>
                            <span className="font-medium text-gray-700">Short Papers</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#ccac00]"></span>
                            <span className="font-medium text-gray-700">
                                Special Issue Track Papers
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Important Dates */}
                <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Important Dates</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {importantDates.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-gradient-to-br from-[#ffd700] to-[#ffb800] rounded-xl p-4 text-gray-900 text-center shadow-md"
                            >
                                <p className="text-2xl font-bold">{item.date.split(' ')[0]}</p>
                                <p className="text-sm opacity-80">
                                    {item.date.split(' ').slice(1).join(' ')}
                                </p>
                                <p className="mt-2 font-medium">{item.event}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Themes */}
                <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                        Themes for CODE-AI 2026
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {themes.map((theme, idx) => (
                            <div
                                key={idx}
                                className="bg-[#f8f6f2] border border-gray-200 rounded-xl p-4 flex items-center gap-4 hover:border-[#ffd700] transition-colors"
                            >
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ffd700] to-[#ffb800] flex items-center justify-center text-gray-900 font-bold flex-shrink-0">
                                    {idx + 1}
                                </div>
                                <p className="text-gray-700 font-medium">{theme}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Paper Format */}
                <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Paper Format</h2>
                    <p className="text-gray-600 mb-6">
                        Download the conference template for paper submission
                    </p>
                    <a
                        href="/file/Microsoft+Word+Proceedings+Templates.zip"
                        className="inline-flex items-center gap-2 bg-[#ffd700] text-gray-900 font-semibold px-6 py-3 hover:bg-[#ffb800] transition-colors"
                        download
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                        </svg>
                        Download Template
                    </a>
                    <a
                        href="/file/CODE AI - 3rd Conference (4).pdf"
                        className="inline-flex items-center gap-2 bg-[#ffd700] text-gray-900 font-semibold px-6 py-3 hover:bg-[#ffb800] transition-colors ml-4"
                        target="_blank"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                        </svg>
                        Download Brochure
                    </a>
                </div>
            </section>
        </main>
    )
}

export default CallForPapers
