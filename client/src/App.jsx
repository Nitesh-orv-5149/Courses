/*
  Design rationale: keep page rhythm, remove heavy gradient canvas, and use neutral base surfaces.
  Token usage: primary interactions now come from shared royal-purple button tokens.
*/
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import CoursesSection from './components/sections/CoursesSection'
import Curriculum from './components/sections/Curriculum'
import Instructor from './components/sections/Instructor'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0b1020]">
        <Navbar />
        <Hero />
        <Features />
        <CoursesSection />
        <Curriculum />
        <Instructor />
        <Footer />
      </div>
    </Router>
  )
}

export default App
