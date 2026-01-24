function EventLocation() {
    return (
        <section className="py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/img/grid.svg')] opacity-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="lg:w-1/2 space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                                Dubai
                            </h2>
                            <p className="text-xl text-yellow-500 font-medium">City of the Future</p>
                        </div>

                        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                            <p>
                                Dubai, often called the "City of the Future," is a global metropolis located in the United Arab Emirates. Known for its cutting-edge architecture, vibrant business environment, and world-class infrastructure, Dubai has rapidly become a hub for innovation and international commerce.
                            </p>
                            <p>
                                With a multicultural population, Dubai offers a diverse blend of cultures, cuisines, and experiences. The city is also home to iconic landmarks such as the <span className="text-white font-semibold">Burj Khalifa</span>, the <span className="text-white font-semibold">Palm Jumeirah</span>, and the <span className="text-white font-semibold">Dubai Marina</span>.
                            </p>
                            <p>
                                Its futuristic skyline, dynamic lifestyle, and year-round sunshine make Dubai a major center for business, education, and tourism in the Middle East, while fostering growth in industries like finance, technology, and education.
                            </p>
                        </div>
                    </div>

                    {/* Image Area */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-white/10 shadow-2xl">
                                <img
                                    src="/img/mahedub.jpg"
                                    alt="MAHE Dubai Campus"
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <p className="text-white font-bold text-lg">MAHE Dubai Logo</p>
                                    <p className="text-yellow-400 text-sm">Venue Partner</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventLocation
