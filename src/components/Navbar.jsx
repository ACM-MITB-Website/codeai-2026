import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Committees', href: '/committees' },
        { name: 'Speakers', href: '/speakers' },
        { name: 'Registration', href: '/registration' },
        { name: 'Publications', href: '/publications' },
        { name: 'Awards', href: '/awards' },
        { name: 'Schedule', href: '/schedule' },
    ]

    return (
        <>
            {/* Sleek Full-Width Navbar - Yellow Theme */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-yellow-500/90 backdrop-blur-md border-b border-black/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">

                        {/* Desktop Navigation - Centered */}
                        <div className="hidden md:flex items-center justify-center flex-1 gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-black font-semibold text-sm px-2 py-1 relative group transition-colors hover:text-white"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-black group-hover:w-full group-hover:bg-white transition-all duration-300"></span>
                                </Link>
                            ))}
                        </div>

                        {/* Right Side Actions */}
                        <div className="flex items-center gap-4">
                            {/* CTA Button */}
                            <Link
                                to="/registration"
                                className="hidden md:inline-flex items-center justify-center text-sm px-5 py-2 font-bold border-2 border-black text-black hover:bg-black hover:text-yellow-500 transition-all duration-300"
                            >
                                Register Not Open
                            </Link>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="md:hidden p-2 text-black hover:text-white transition-colors"
                                aria-label="Toggle menu"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {isOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed inset-0 top-16 z-40 bg-black transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col items-center pt-12 gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-xl font-medium text-gray-200 hover:text-yellow-400 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/registration"
                        onClick={() => setIsOpen(false)}
                        className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-6 py-2.5 rounded-full mt-4"
                    >
                        Register Now
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
