import { Link } from 'react-router-dom'

function ConferenceSouvenir() {
    return (
        <main className="pt-24 pb-16 bg-black min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px]"></div>
            </div>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="glass-card p-12 md:p-20 rounded-3xl border border-yellow-500/30 shadow-[0_0_50px_-12px_rgba(234,179,8,0.3)]">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                        CODE-AI <span className="text-yellow-500">2026</span>
                        <br />
                        <span className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400 mt-2 block">
                            Souvenir
                        </span>
                    </h1>

                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto rounded-full mb-10"></div>

                    <p className="text-3xl md:text-5xl font-black text-white tracking-wider animate-pulse">
                        Launching Soon<span className="text-yellow-500">...</span>
                    </p>

                    <div className="mt-12">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-colors font-medium"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ConferenceSouvenir
