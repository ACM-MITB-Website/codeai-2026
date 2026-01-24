import { useState } from 'react'
import { Download, FileText } from 'lucide-react'

function Schedule() {
    const [activeTab, setActiveTab] = useState('day1')

    return (
        <main className="min-h-screen bg-black pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
                        Conference Schedule
                    </h1>
                    <p className="text-gray-400">Join us for two days of insights, innovation, and inspiration.</p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center gap-4 mb-16">
                    <button
                        onClick={() => setActiveTab('day1')}
                        className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'day1'
                            ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20 scale-105'
                            : 'bg-zinc-900 text-gray-400 border border-zinc-800 hover:border-yellow-500/50 hover:text-yellow-500'
                            }`}
                    >
                        Day 1 - Apr 7
                    </button>
                    <button
                        onClick={() => setActiveTab('day2')}
                        className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'day2'
                            ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20 scale-105'
                            : 'bg-zinc-900 text-gray-400 border border-zinc-800 hover:border-yellow-500/50 hover:text-yellow-500'
                            }`}
                    >
                        Day 2 - Apr 8
                    </button>
                </div>

                {/* Brochure Viewer */}
                <div className="flex flex-col gap-8 items-center">
                    {/* Image Container */}
                    <div className="w-full max-w-3xl bg-zinc-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                        {/* Placeholder / Actual Image */}
                        <div className="relative aspect-[3/4] w-full group">
                            <img
                                src="/img/placeholder.png"
                                alt={`Schedule Day ${activeTab === 'day1' ? '1' : '2'}`}
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                            />

                            {/* Overlay Instruction */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-black/60 backdrop-blur-sm text-center">
                                <FileText className="w-16 h-16 text-yellow-500 mb-4 opacity-80" />
                                <h3 className="text-2xl font-bold text-white mb-2">Brochure View</h3>
                                <p className="text-gray-300 max-w-md">
                                    Please replace this placeholder with the actual schedule image for <span className="text-yellow-500 font-bold">{activeTab === 'day1' ? 'Day 1' : 'Day 2'}</span>.
                                </p>
                                <div className="mt-6 px-4 py-2 bg-white/10 rounded-lg text-xs font-mono text-gray-400 border border-white/10">
                                    public/img/schedule-{activeTab}.jpg
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Download / Action Buttons */}
                    <div className="flex justify-center gap-4">
                        <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-yellow-500/50 rounded-lg text-white transition-all">
                            <Download className="w-4 h-4" />
                            <span>Download Full PDF</span>
                        </button>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Schedule
