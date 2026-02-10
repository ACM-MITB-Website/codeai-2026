function Registration() {
    const registrationFees = [
        {
            category: 'Participants From India\n( Offline )',
            student: 'INR 18,000/-',
            faculty: 'INR 19,000/-',
            industry: 'INR 20,000/-',
            attendee: 'INR 14,000/-'
        },
        {
            category: 'Participants From India\n( Online )',
            student: 'INR 14,000/-',
            faculty: 'INR 15,000/-',
            industry: 'INR 16,000/-',
            attendee: 'INR 14,000/-'
        },
        {
            category: 'Participants From Abroad\n( Offline )',
            student: 'USD 200/-',
            faculty: 'USD 225/-',
            industry: 'USD 250/-',
            attendee: 'USD 150/-'
        },
        {
            category: 'Participants From Abroad\n( Online )',
            student: 'USD 150/-',
            faculty: 'USD 150/-',
            industry: 'USD 150/-',
            attendee: 'USD 150/-'
        }
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                        Registration Fees
                    </h2>

                    <div className="overflow-x-auto mb-6">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="bg-[#ffd700] text-gray-900 font-semibold p-4 text-center border border-gray-300">
                                        Registration Fee
                                    </th>
                                    <th className="bg-[#ffd700] text-gray-900 font-semibold p-4 text-center border border-gray-300">
                                        UG / PG / Research Scholars
                                    </th>
                                    <th className="bg-[#ffd700] text-gray-900 font-semibold p-4 text-center border border-gray-300">
                                        Academicians / Faculty
                                    </th>
                                    <th className="bg-[#ffd700] text-gray-900 font-semibold p-4 text-center border border-gray-300">
                                        R & D Organizations / Industry
                                    </th>
                                    <th className="bg-[#ffd700] text-gray-900 font-semibold p-4 text-center border border-gray-300">
                                        Attendees
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {registrationFees.map((row, index) => (
                                    <tr
                                        key={index}
                                        className="border-b border-gray-300 hover:bg-[#ffd700]/5"
                                    >
                                        <td className="font-medium p-4 text-gray-900 text-center border border-gray-300 whitespace-pre-line">
                                            {row.category}
                                        </td>
                                        <td className="p-4 text-gray-700 text-center border border-gray-300">
                                            {row.student}
                                        </td>
                                        <td className="p-4 text-gray-700 text-center border border-gray-300">
                                            {row.faculty}
                                        </td>
                                        <td className="p-4 text-gray-700 text-center border border-gray-300">
                                            {row.industry}
                                        </td>
                                        <td className="p-4 text-gray-700 text-center border border-gray-300">
                                            {row.attendee}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="text-center mb-6">
                        <p className="text-lg font-semibold text-gray-900 mb-2">
                            Accepted papers will be published in Scopus-indexed conference
                            proceedings.
                        </p>
                        <a
                            href="#"
                            className="text-blue-600 hover:text-blue-800 font-semibold underline text-lg"
                        >
                            Submission Link
                        </a>
                    </div>

                    <p className="text-gray-600 text-sm">
                        *Excluding GST, registration kit (backpack, notepad, pen, brochure,
                        schedule, etc.), certificate, breakfast, lunch, tea/coffee during the
                        conference.
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Registration
