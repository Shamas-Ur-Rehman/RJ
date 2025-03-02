import { useState } from 'react'
import './App.css'
import HeroSection from './Components/HeroSection'
import WhyRiyadhSection from './Components/WhyRiyadhSection'
import EventHighlightsSlider from './Components/EventHighlightsSlider'
import TicketPackages from './Components/TicketPackages'
import TicketComparisonTable from './Components/TicketComparisonTable'
import WhyAttendSection from './Components/WhyAttendSection'
import PartnerPage from './Components/PartnerPage'
import ContactSection from './Components/ContactSection'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RegistrationForm from './Components/RegistrationForm'
import BuyPage from './Components/BuyPage'

function App () {
  const scrollToSection = id => {
    const section = document.getElementById(id)
    if (section) {
      const offset = 60
      const sectionPosition = section.offsetTop - offset
      window.scrollTo({ top: sectionPosition, behavior: 'smooth' })
    }
  }

  return (
    <Router>
      <div className='!overflow-hidden'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <HeroSection scrollToSection={scrollToSection} />
                <WhyRiyadhSection />
                <EventHighlightsSlider />
                <TicketPackages />
                <TicketComparisonTable />
                <WhyAttendSection />
                <PartnerPage scrollToSection={scrollToSection} />
              </>
            }
          />
          <Route path='/registration-now' element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
