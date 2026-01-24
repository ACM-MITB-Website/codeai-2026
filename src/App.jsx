import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Committees from './pages/Committees'
import Speakers from './pages/Speakers'
import Registration from './pages/Registration'
import CallForPapers from './pages/CallForPapers'

import Awards from './pages/Awards'

import Publications from './pages/Publications'

import ConferenceSouvenir from './pages/ConferenceSouvenir'
import Schedule from './pages/Schedule'

import { useEffect } from 'react'

function App() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active')
                }
            })
        }, {
            threshold: 0.1
        })

        const elements = document.querySelectorAll('.reveal')
        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }) // running on every render to catch new elements (simple approach for this app)

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
                <Route path="/conference-souvenir" element={<ConferenceSouvenir />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
