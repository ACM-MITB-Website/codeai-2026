function EventLocation() {
    return (
        <section className="py-20 bg-[#1a2332] overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/img/grid.svg')] opacity-5"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Content */}
                    <div className="lg:w-1/2 space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                                Taiwan
                            </h2>
                            <p className="text-xl text-[#ffd700] font-medium">The Silicon Island</p>
                        </div>

                        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                            <p>
                                Taiwan, widely revered as the &quot;Silicon Island&quot; or &quot;AI
                                Island,&quot; is a technological powerhouse located in East Asia.
                                Acknowledged as the undisputed global leader in semiconductor
                                manufacturing, it serves as the heart of the modern digital economy,
                                producing the advanced chips that power everything from smartphones
                                to global defense systems and artificial intelligence.
                            </p>
                            <p>
                                Beyond its industrial dominance, Taiwan offers a rich tapestry of
                                experiences, blending ancient temples and indigenous heritage with a
                                vibrant, progressive democracy. The island is anchored by the
                                bamboo-inspired{' '}
                                <span className="text-white font-semibold">Taipei 101</span> and is
                                famed for its culinary innovation being the birthplace of{' '}
                                <span className="text-white font-semibold">bubble tea</span> as well
                                as its convenient 24 hour urban lifestyle and breathtaking natural
                                landscapes like{' '}
                                <span className="text-white font-semibold">Taroko Gorge</span>.
                            </p>
                            <p>
                                Its strategic role as a Silicon Shield, highly educated workforce,
                                and robust R&D ecosystem make Taiwan a critical pivot point for the
                                future of technology, driving unparalleled advancements in smart
                                manufacturing, green energy, and the global AI supply chain.
                            </p>
                        </div>
                    </div>

                    {/* Image Area */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#ffd700] to-[#ffb800] rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-white/10 shadow-2xl">
                                <img
                                    src="/img/venue-taiwan.jpg"
                                    alt="Taiwan Venue"
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <p className="text-white font-bold text-lg">Taiwan</p>
                                    <p className="text-[#ffd700] text-sm">Venue Partner</p>
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
