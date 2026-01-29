import { Link } from 'react-router-dom'
import { Phone, Mail, FileText } from 'lucide-react'

function Footer() {
    return (
        <footer className="bg-gray-900 text-white border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Contact */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">Contact Us</h3>
                        <div className="space-y-4 text-gray-400">
                            <div>
                                <p className="font-semibold text-white">Dr. Shreyas J</p>
                                <p className="text-sm">Organizing Chair</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-yellow-500" />
                                <a href="tel:+918970768504" className="hover:text-yellow-400 transition-colors">+91 8970768504</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-yellow-500" />
                                <a href="mailto:codeai.mitblr@manipal.edu" className="hover:text-yellow-400 transition-colors">codeai.mitblr@manipal.edu</a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">Quick Links</h3>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-400">
                            <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link>
                            <Link to="/committees" className="hover:text-yellow-400 transition-colors">Committees</Link>
                            <Link to="/speakers" className="hover:text-yellow-400 transition-colors">Speakers</Link>
                            <Link to="/registration" className="hover:text-yellow-400 transition-colors">Registration</Link>
                            <Link to="/publications" className="hover:text-yellow-400 transition-colors">Publications</Link>
                            <Link to="/awards" className="hover:text-yellow-400 transition-colors">Awards</Link>
                            <Link to="/schedule" className="hover:text-yellow-400 transition-colors">Schedule</Link>
                            <Link to="/call-for-papers" className="hover:text-yellow-400 transition-colors">Call for Paper</Link>
                            <Link to="#" className="hover:text-yellow-400 transition-colors">PhD Colloquium</Link>
                            <Link to="#" className="hover:text-yellow-400 transition-colors">Call for Posters</Link>
                            <a href="#" className="col-span-2 mt-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/50 text-yellow-500 text-center rounded hover:bg-yellow-500 hover:text-black transition-all">Submit Paper</a>
                        </div>
                    </div>

                    {/* Resources & Previous Edition */}
                    <div className="space-y-8">
                        {/* Resources */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">Resources</h3>
                            <p className="text-gray-400 text-sm">Get more information about the conference</p>
                            <div className="flex flex-col gap-2 text-sm">
                                <a href="/file/CODE-AI 2025 Brochure.pdf" className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors" download>
                                    <FileText className="w-4 h-4" /> Download Brochure
                                </a>
                                <a href="/file/PHD COLLOQIUM.pdf" className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors" download>
                                    <FileText className="w-4 h-4" /> PhD Colloquium Brochure
                                </a>
                                <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors">
                                    <FileText className="w-4 h-4" /> Call for Poster Brochure
                                </a>
                            </div>
                        </div>

                        {/* Previous Edition */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">Previous Editions</h3>
                            <p className="text-gray-400 text-sm">Explore past conferences.</p>
                            <div className="flex flex-col gap-2">
                                <a href="https://conference.manipal.edu/CODE-AI2025/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 underline decoration-yellow-500/30 underline-offset-4 transition-all">CODE AI 2025 Website</a>
                                <a href="https://conference.manipal.edu/CODE-AI2024/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 underline decoration-yellow-500/30 underline-offset-4 transition-all">CODE AI 2024 Website</a>
                            </div>
                        </div>
                    </div>

                    {/* Follow Us */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">Follow Us</h3>
                        <p className="text-gray-400 text-sm">Stay connected with us on social media for the latest updates</p>
                        <div className="flex gap-4">
                            <a href="mailto:codeai.mitblr@manipal.edu" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/code.ai.mahe/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href="https://linkedin.com/company/code-ai-mitb/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} CODE-AI Conference. All rights reserved.</p>
                    <p className="mt-2 text-xs">School of Computer Engineering, MIT Bengaluru</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
