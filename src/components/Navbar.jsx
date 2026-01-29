import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(null)

    const navLinks = [
        { name: 'Home', href: '/' },
        {
            name: 'Authors',
            dropdown: [
                { name: 'Important Dates', href: '/call-for-papers' },
                { name: 'Call for Papers', href: '/call-for-papers' },
                { name: 'Call for Workshop Papers', href: '/call-for-workshop-papers' },
                { name: 'Submission Guidelines [Main Conference]', href: '/submission-guidelines' },
                { name: 'Final Paper Submission Guidelines [Main Conference]', href: '/final-submission-guidelines' }
            ]
        },
        { name: 'Committees', href: '/committees' },
        {
            name: 'Program',
            dropdown: [
                { name: 'Schedule', href: '/schedule' },
                { name: 'Speakers', href: '/speakers' },
                { name: 'Awards', href: '/awards' }
            ]
        },
        { name: 'Registration', href: '/registration' },
        {
            name: 'Sponsor',
            dropdown: [
                { name: 'About Us', href: '/about' },
                { name: 'Contact Us', href: '/contact' }
            ]
        },
        {
            name: 'About',
            dropdown: [
                { name: 'About Us', href: '/about' },
                { name: 'Contact Us', href: '/contact' }
            ]
        },
    ]

    const handleDropdownToggle = (linkName) => {
        setOpenDropdown(openDropdown === linkName ? null : linkName)
    }

    return (
        <>
            {/* Sleek Full-Width Navbar - Yellow Theme */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-yellow-500/90 backdrop-blur-md border-b border-black/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">

                        {/* Desktop Navigation - Centered */}
                        <div className="hidden md:flex items-center justify-center flex-1 gap-1">
                            {navLinks.map((link) => (
                                <div key={link.name} className="relative group">
                                    {link.dropdown ? (
                                        <>
                                            <button
                                                onMouseEnter={() => setOpenDropdown(link.name)}
                                                className="text-black font-semibold text-sm px-3 py-6 hover:text-white transition-colors duration-200 flex items-center gap-1"
                                            >
                                                {link.name}
                                                <svg
                                                    className={`w-4 h-4 transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            <div
                                                onMouseEnter={() => setOpenDropdown(link.name)}
                                                onMouseLeave={() => setOpenDropdown(null)}
                                                className={`absolute top-full left-0 mt-0 bg-gradient-to-br from-[#1a3a5c] to-[#152d47] shadow-2xl min-w-[300px] rounded-b-lg overflow-hidden border-t-2 border-yellow-500 transition-all duration-300 ease-out ${openDropdown === link.name
                                                        ? 'opacity-100 translate-y-0 visible'
                                                        : 'opacity-0 -translate-y-2 invisible'
                                                    }`}
                                                style={{ zIndex: 100 }}
                                            >
                                                <div className="py-2">
                                                    {link.dropdown.map((item, index) => (
                                                        <Link
                                                            key={item.name}
                                                            to={item.href}
                                                            className="block px-6 py-3 text-white text-sm hover:bg-yellow-500/20 hover:pl-8 transition-all duration-200 border-l-4 border-transparent hover:border-yellow-500"
                                                            style={{
                                                                animationDelay: `${index * 30}ms`
                                                            }}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            to={link.href}
                                            className="text-black font-semibold text-sm px-3 py-6 relative transition-colors duration-200 hover:text-white"
                                        >
                                            {link.name}
                                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-black group-hover:w-full group-hover:bg-white transition-all duration-300"></span>
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right Side Actions */}
                        <div className="flex items-center gap-4">
                            {/* CTA Button */}
                            <Link
                                to="/registration"
                                className="hidden md:inline-flex items-center justify-center text-sm px-5 py-2 font-bold border-2 border-black text-black hover:bg-black hover:text-yellow-500 transition-all duration-300"
                            >
                                Register Now
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
                <div className="flex flex-col items-start px-6 pt-8 gap-4 overflow-y-auto max-h-[calc(100vh-4rem)]">
                    {navLinks.map((link) => (
                        <div key={link.name} className="w-full">
                            {link.dropdown ? (
                                <>
                                    <button
                                        onClick={() => handleDropdownToggle(link.name)}
                                        className="w-full text-left text-lg font-medium text-gray-200 hover:text-yellow-400 transition-colors flex items-center justify-between"
                                    >
                                        {link.name}
                                        <svg
                                            className={`w-5 h-5 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {openDropdown === link.name && (
                                        <div className="mt-2 ml-4 space-y-2">
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="block text-base text-gray-400 hover:text-yellow-400 transition-colors py-2"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    to={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-gray-200 hover:text-yellow-400 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                    <Link
                        to="/registration"
                        onClick={() => setIsOpen(false)}
                        className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-6 py-2.5 rounded-full mt-4 w-full text-center"
                    >
                        Register Now
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
