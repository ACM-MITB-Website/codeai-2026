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
        <main className="pt-24 pb-16 bg-black min-h-screen">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="section-title gradient-text">Registration</h1>

                <div className="glass-card rounded-2xl p-8 mb-8">
                    <h2 className="text-2xl font-semibold text-white mb-2">Registration Fees for Papers</h2>
                    <p className="text-gray-300 mb-6">Regular Paper / Short Paper / Special Issue Track Papers</p>

                    <h3 className="text-xl font-semibold text-yellow-400 mb-4">Early Bird Registration</h3>
                    <p className="text-gray-400 mb-4">Available till 31st December 2025</p>
                    <div className="overflow-x-auto mb-8">
                        <table className="registration-table">
                            <thead>
                                <tr>
                                    <th>Registration Fee</th>
                                    <th>UG / PG / Research Scholars</th>
                                    <th>Academicians / Faculty</th>
                                    <th>R&D Organizations / Industry</th>
                                    <th>Attendees</th>
                                </tr>
                            </thead>
                            <tbody>
                                {earlyBirdFees.map((row) => (
                                    <tr key={row.category}>
                                        <td className="font-medium">{row.category}</td>
                                        <td>{row.student}</td>
                                        <td>{row.faculty}</td>
                                        <td>{row.industry}</td>
                                        <td>{row.attendee}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-xl font-semibold text-yellow-400 mb-4">Regular Registration</h3>
                    <div className="overflow-x-auto">
                        <table className="registration-table">
                            <thead>
                                <tr>
                                    <th>Registration Fee</th>
                                    <th>UG / PG / Research Scholars</th>
                                    <th>Academicians / Faculty</th>
                                    <th>R&D Organizations / Industry</th>
                                    <th>Attendees</th>
                                </tr>
                            </thead>
                            <tbody>
                                {regularFees.map((row) => (
                                    <tr key={row.category}>
                                        <td className="font-medium">{row.category}</td>
                                        <td>{row.student}</td>
                                        <td>{row.faculty}</td>
                                        <td>{row.industry}</td>
                                        <td>{row.attendee}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-gray-400 text-sm mt-4">*Excluding GST</p>
                </div>

                <div className="glass-card rounded-2xl p-8">
                    <h2 className="text-2xl font-semibold text-white mb-6">PhD Colloquium Registration</h2>
                    <div className="overflow-x-auto">
                        <table className="registration-table">
                            <thead>
                                <tr>
                                    <th>Registration Fee</th>
                                    <th>Research Scholars</th>
                                </tr>
                            </thead>
                            <tbody>
                                {phdFees.map((row) => (
                                    <tr key={row.category}>
                                        <td className="font-medium">{row.category}</td>
                                        <td>{row.fee}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-gray-400 text-sm mt-4">
                        *Excluding GST. Registration includes kit, certificate, and meals during the conference.
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Registration
