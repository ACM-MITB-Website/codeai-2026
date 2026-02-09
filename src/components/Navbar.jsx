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
    ]

    const handleDropdownToggle = (linkName) => {
        setOpenDropdown(openDropdown === linkName ? null : linkName)
    }

    return (
        <>
            {/* Dark Navy Navbar - IEEE INFOCOM Style */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-[#1a2332] border-b-[3px] border-[#ffd700]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">

                        {/* Logo / Brand */}
                        <Link to="/" className="flex items-center gap-2">
                            <span className="text-white font-bold text-lg tracking-wide">CODE-AI</span>
                            <span className="text-[#ffd700] font-bold text-lg">2026</span>
                        </Link>

                        {/* Desktop Navigation - Right Aligned */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <div key={link.name} className="relative group">
                                    {link.dropdown ? (
                                        <>
                                            <button
                                                onMouseEnter={() => setOpenDropdown(link.name)}
                                                className="text-white font-medium text-sm px-4 py-6 hover:text-[#ffd700] transition-colors duration-200 flex items-center gap-1"
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
                                                className={`absolute top-full left-0 mt-0 bg-white shadow-2xl min-w-[300px] rounded-b-lg overflow-hidden border-t-[3px] border-[#ffd700] transition-all duration-300 ease-out ${openDropdown === link.name
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
                                                            className="block px-6 py-3 text-gray-800 text-sm hover:bg-[#ffd700]/20 hover:pl-8 transition-all duration-200 border-l-4 border-transparent hover:border-[#ffd700]"
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
                                            className="text-white font-medium text-sm px-4 py-6 relative transition-colors duration-200 hover:text-[#ffd700] group"
                                        >
                                            {link.name}
                                            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#ffd700] group-hover:w-3/4 transition-all duration-300"></span>
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right Side Actions */}
                        <div className="flex items-center gap-4">
                            {/* Register Button */}
                            <Link
                                to="/registration"
                                className="hidden md:inline-flex items-center justify-center text-sm px-5 py-2 font-bold bg-[#ffd700] text-[#1a2332] hover:bg-[#ffb800] transition-all duration-300"
                            >
                                REGISTER NOW
                            </Link>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="md:hidden p-2 text-white hover:text-[#ffd700] transition-colors"
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
            <div className={`md:hidden fixed inset-0 top-16 z-40 bg-[#1a2332] transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col items-start px-6 pt-8 gap-4 overflow-y-auto max-h-[calc(100vh-4rem)]">
                    {navLinks.map((link) => (
                        <div key={link.name} className="w-full">
                            {link.dropdown ? (
                                <>
                                    <button
                                        onClick={() => handleDropdownToggle(link.name)}
                                        className="w-full text-left text-lg font-medium text-white hover:text-[#ffd700] transition-colors flex items-center justify-between"
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
                                                    className="block text-base text-gray-400 hover:text-[#ffd700] transition-colors py-2"
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
                                    className="text-lg font-medium text-white hover:text-[#ffd700] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                    <Link
                        to="/registration"
                        onClick={() => setIsOpen(false)}
                        className="bg-[#ffd700] text-[#1a2332] font-bold px-6 py-3 mt-4 w-full text-center"
                    >
                        REGISTER NOW
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
