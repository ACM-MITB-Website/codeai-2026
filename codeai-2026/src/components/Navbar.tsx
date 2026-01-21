'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Committees', href: '/committees' },
        { name: 'Speakers', href: '/speakers' },
        { name: 'Registration', href: '/registration' },
        { name: 'Publications', href: '/publications' },
        { name: 'Awards', href: '/awards' },
        { name: 'Sponsorship', href: '/sponsorship' },
        { name: 'Call for Papers', href: '/call-for-papers' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass soft-shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo & Branding */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                            <span className="text-white font-bold text-lg">MIT</span>
                        </div>
                        <div className="hidden sm:block">
                            <p className="font-semibold text-gray-800 text-sm leading-tight">
                                Manipal Institute of Technology
                            </p>
                            <p className="text-xs text-gray-500">Bengaluru</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-6">
                        {navLinks.slice(0, 6).map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        ))}
                        <Link href="/call-for-papers" className="btn-primary text-sm py-2 px-4">
                            Submit Paper
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-0 top-20 bg-white/95 backdrop-blur-lg mobile-menu ${isOpen ? 'open' : ''}`}>
                <div className="flex flex-col items-center pt-8 gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/call-for-papers" onClick={() => setIsOpen(false)} className="btn-primary mt-4">
                        Submit Paper
                    </Link>
                </div>
            </div>
        </nav>
    );
}
