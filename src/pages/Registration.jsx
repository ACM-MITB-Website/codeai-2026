function Registration() {
    const earlyBirdFees = [
        { category: 'Participants from India', student: 'INR 11000', faculty: 'INR 13000', industry: 'INR 15000', attendee: 'INR 4000' },
        { category: 'Participants from Abroad', student: 'USD 150', faculty: 'USD 180', industry: 'USD 200', attendee: 'USD 75' },
    ]

    const regularFees = [
        { category: 'Participants from India', student: 'INR 12000', faculty: 'INR 14000', industry: 'INR 16000', attendee: 'INR 5000' },
        { category: 'Participants from Abroad', student: 'USD 200', faculty: 'USD 250', industry: 'USD 300', attendee: 'USD 85' },
    ]

    const phdFees = [
        { category: 'Participants from India', fee: 'INR 10000' },
        { category: 'Participants from Abroad', fee: 'USD 150' },
    ]

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-12 overflow-hidden bg-[#1a2332]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            <span className="text-[#ffd700]">Registration</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Secure your spot at CODE-AI 2026
                        </p>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">Registration Fees for Papers</h2>
                    <p className="text-gray-600 mb-6">Regular Paper / Short Paper / Special Issue Track Papers</p>

                    <h3 className="text-xl font-semibold text-[#ccac00] mb-4">Early Bird Registration</h3>
                    <p className="text-gray-500 mb-4">Available till 31st December 2025</p>
                    <div className="overflow-x-auto mb-8">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="bg-[#ffd700] text-gray-900 font-semibold p-4 text-left">Registration Fee</th>
                                    <th className="bg-[#ffd700] text-gray-900 font-semibold p-4 text-left">UG / PG / Research Scholars</th>
                                    <th className="bg-[#ffd700] text-gray-900 font-semibold p-4 text-left">Academicians / Faculty</th>
                                    <th className="bg-[#ffd700] text-gray-900 font-semibold p-4 text-left">R&D Organizations / Industry</th>
                                    <th className="bg-[#ffd700] text-gray-900 font-semibold p-4 text-left">Attendees</th>
                                </tr>
                            </thead>
                            <tbody>
                                {earlyBirdFees.map((row) => (
                                    <tr key={row.category} className="border-b border-gray-200 hover:bg-[#ffd700]/5">
                                        <td className="font-medium p-4 text-gray-900">{row.category}</td>
                                        <td className="p-4 text-gray-700">{row.student}</td>
                                        <td className="p-4 text-gray-700">{row.faculty}</td>
                                        <td className="p-4 text-gray-700">{row.industry}</td>
                                        <td className="p-4 text-gray-700">{row.attendee}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-xl font-semibold text-[#ccac00] mb-4">Regular Registration</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="bg-[#ffd700] text-gray-900 font-semibold p-4 text-left">Registration Fee</th>
                                    <th className="bg-[#ffd700] text-gray-900 font-semibold p-4 text-left">UG / PG / Research Scholars</th>
                                    <th className="bg-[#ffd700] text-gray-900 font-semibold p-4 text-left">Academicians / Faculty</th>
                                    <th className="bg-[#ffd700] text-gray-900 font-semibold p-4 text-left">R&D Organizations / Industry</th>
                                    <th className="bg-[#ffd700] text-gray-900 font-semibold p-4 text-left">Attendees</th>
                                </tr>
                            </thead>
                            <tbody>
                                {regularFees.map((row) => (
                                    <tr key={row.category} className="border-b border-gray-200 hover:bg-[#ffd700]/5">
                                        <td className="font-medium p-4 text-gray-900">{row.category}</td>
                                        <td className="p-4 text-gray-700">{row.student}</td>
                                        <td className="p-4 text-gray-700">{row.faculty}</td>
                                        <td className="p-4 text-gray-700">{row.industry}</td>
                                        <td className="p-4 text-gray-700">{row.attendee}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-gray-500 text-sm mt-4">*Excluding GST</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">PhD Colloquium Registration</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="bg-[#ffd700] text-gray-900 font-semibold p-4 text-left">Registration Fee</th>
                                    <th className="bg-[#ffd700] text-gray-900 font-semibold p-4 text-left">Research Scholars</th>
                                </tr>
                            </thead>
                            <tbody>
                                {phdFees.map((row) => (
                                    <tr key={row.category} className="border-b border-gray-200 hover:bg-[#ffd700]/5">
                                        <td className="font-medium p-4 text-gray-900">{row.category}</td>
                                        <td className="p-4 text-gray-700">{row.fee}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-gray-500 text-sm mt-4">
                        *Excluding GST. Registration includes kit, certificate, and meals during the conference.
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Registration
