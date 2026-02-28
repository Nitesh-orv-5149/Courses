import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Curriculum from './components/sections/Curriculum'
import Instructor from './components/sections/Instructor'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a]">
        <Navbar />
        <Hero />
        <Features />
        <Curriculum />
        <Instructor />
        <Footer />
      </div>
    </Router>
  )
}

export default App
