import { useState } from 'react'
import { Download, FileText } from 'lucide-react'

function Schedule() {
    const [activeTab, setActiveTab] = useState('day1')

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-12 overflow-hidden bg-[#1a2332]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Conference <span className="text-[#ffd700]">Schedule</span>
                        </h1>
                        <p className="text-gray-300">Join us for two days of insights, innovation, and inspiration.</p>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Tabs */}
                <div className="flex justify-center gap-4 mb-16">
                    <button
                        onClick={() => setActiveTab('day1')}
                        className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'day1'
                            ? 'bg-[#ffd700] text-gray-900 shadow-lg shadow-[#ffd700]/20 scale-105'
                            : 'bg-gray-100 text-gray-600 border border-gray-200 hover:border-[#ffd700] hover:text-[#ccac00]'
                            }`}
                    >
                        Day 1 - Apr 7
                    </button>
                    <button
                        onClick={() => setActiveTab('day2')}
                        className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'day2'
                            ? 'bg-[#ffd700] text-gray-900 shadow-lg shadow-[#ffd700]/20 scale-105'
                            : 'bg-gray-100 text-gray-600 border border-gray-200 hover:border-[#ffd700] hover:text-[#ccac00]'
                            }`}
                    >
                        Day 2 - Apr 8
                    </button>
                </div>

                {/* Brochure Viewer */}
                <div className="flex flex-col gap-8 items-center">
                    {/* Image Container */}
                    <div className="w-full max-w-3xl bg-[#f8f6f2] border border-gray-200 rounded-xl overflow-hidden shadow-lg">
                        {/* Placeholder / Actual Image */}
                        <div className="relative aspect-[3/4] w-full group">
                            <img
                                src="/img/placeholder.png"
                                alt={`Schedule Day ${activeTab === 'day1' ? '1' : '2'}`}
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                            />

                            {/* Overlay Instruction */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-[#1a2332]/80 backdrop-blur-sm text-center">
                                <FileText className="w-16 h-16 text-[#ffd700] mb-4 opacity-80" />
                                <h3 className="text-2xl font-bold text-white mb-2">Brochure View</h3>
                                <p className="text-gray-300 max-w-md">
                                    Please replace this placeholder with the actual schedule image for <span className="text-[#ffd700] font-bold">{activeTab === 'day1' ? 'Day 1' : 'Day 2'}</span>.
                                </p>
                                <div className="mt-6 px-4 py-2 bg-white/10 rounded-lg text-xs font-mono text-gray-400 border border-white/10">
                                    public/img/schedule-{activeTab}.jpg
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Download / Action Buttons */}
                    <div className="flex justify-center gap-4">
                        <button className="flex items-center gap-2 px-6 py-3 bg-[#ffd700] hover:bg-[#ffb800] rounded-lg text-gray-900 font-semibold transition-all shadow-md">
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
