import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Committees from './pages/Committees'
import Speakers from './pages/Speakers'
import Registration from './pages/Registration'
import CallForPapers from './pages/CallForPapers'

import Awards from './pages/Awards'

import Publications from './pages/Publications'


import Schedule from './pages/Schedule'



function App() {
    const location = useLocation()
    const observerRef = useRef(null)

    useEffect(() => {
        // Force cleanup of any scroll locks that might have gotten stuck
        document.body.style.overflow = ''
        document.body.classList.remove('antigravity-scroll-lock') // Remove the problematic class

        // Reset scroll position on route change
        window.scrollTo(0, 0)

        // Cleanup previous observer
        if (observerRef.current) {
            observerRef.current.disconnect()
        }

        // Small timeout to ensure DOM is ready
        const timeoutId = setTimeout(() => {
            observerRef.current = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active')
                    }
                })
            }, {
                threshold: 0.1
            })

            const elements = document.querySelectorAll('.reveal')
            elements.forEach((el) => observerRef.current.observe(el))
        }, 100)

        // Fallback: Ensure elements are revealed if observer fails (safety net for blank screen)
        const fallbackTimeout = setTimeout(() => {
            document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'))
        }, 500)

        return () => {
            clearTimeout(timeoutId)
            clearTimeout(fallbackTimeout)
            if (observerRef.current) {
                observerRef.current.disconnect()
            }
        }
    }, [location.pathname]) // Re-run when route changes

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/committees" element={<Committees />} />
                <Route path="/speakers" element={<Speakers />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/call-for-papers" element={<CallForPapers />} />
                <Route path="/awards" element={<Awards />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/schedule" element={<Schedule />} />

            </Routes>
            <Footer />
        </div>
    )
}

export default App
