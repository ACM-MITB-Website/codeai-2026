import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Committees from './pages/Committees'
import Speakers from './pages/Speakers'
import Registration from './pages/Registration'
import CallForPapers from './pages/CallForPapers'

function App() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/committees" element={<Committees />} />
                <Route path="/speakers" element={<Speakers />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/call-for-papers" element={<CallForPapers />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
