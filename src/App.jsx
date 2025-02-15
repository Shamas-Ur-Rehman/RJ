import { useState } from "react";
import "./App.css";
import HeroSection from "./Components/HeroSection";
import WhyRiyadhSection from "./Components/WhyRiyadhSection";
import EventHighlightsSlider from "./Components/EventHighlightsSlider";
import TicketPackages from "./Components/TicketPackages";
import TicketComparisonTable from "./Components/TicketComparisonTable";
import WhyAttendSection from "./Components/WhyAttendSection";
import PartnerPage from "./Components/PartnerPage";
import ContactSection from "./Components/ContactSection";

function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 60;
      const sectionPosition = section.offsetTop - offset;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }
  };
  return (
    <div className="!overflow-hidden">
      <HeroSection scrollToSection={scrollToSection} />
      <WhyRiyadhSection />
      <EventHighlightsSlider />
      <TicketPackages />
      <TicketComparisonTable />
      <WhyAttendSection />
      <PartnerPage />
    </div>
  );
}

export default App;
