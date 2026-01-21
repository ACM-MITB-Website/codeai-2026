'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Committees', href: '/committees' },
        { name: 'Speakers', href: '/speakers' },
        { name: 'Registration', href: '/registration' },
        { name: 'Call for Papers', href: '/call-for-papers' },
    ];

    return (
        <>
            {/* Centered Floating Navbar */}
            <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
                <div className="bg-black/80 backdrop-blur-xl border border-yellow-500/20 rounded-full px-2 py-1.5 shadow-lg shadow-yellow-500/10">
                    <div className="flex items-center gap-1">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-yellow-500/10 transition-colors">
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                                <span className="text-black font-bold text-xs">C</span>
                            </div>
                            <span className="text-white font-semibold text-sm hidden sm:block">CODE AI</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-yellow-400 font-medium text-sm px-3 py-1.5 relative group transition-colors"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-yellow-400 group-hover:w-3/4 transition-all duration-300"></span>
                                </Link>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <Link
                            href="/registration"
                            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold text-sm px-4 py-1.5 rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all ml-1"
                        >
                            Register
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors ml-1"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed inset-0 top-16 z-40 bg-black/95 backdrop-blur-xl transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col items-center pt-12 gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-xl font-medium text-gray-200 hover:text-yellow-400 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/registration"
                        onClick={() => setIsOpen(false)}
                        className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-6 py-2.5 rounded-full mt-4"
                    >
                        Register Now
                    </Link>
                </div>
            </div>
        </>
    );
}
