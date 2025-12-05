import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

// import Header from "./components/Header.jsx";
import Header from "./components/header.jsx";

import HomePage from "./Pages/HomePage/Home.jsx";
import OurStory from "./Pages/OurStoryPage/OurStory.jsx";
import FAQ from "./Pages/FAQPage/FAQ.jsx";
import TravelAndVenue from './Pages/TravelAndVenuePage/TravelAndVenue.jsx';
import RSVP from './Pages/RSVPPage/RSVP.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Router>
        <p className="paragraph-64-times">Mia and Mike</p>
        <p className="date-paragraph">June 26th, 2027</p>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/travel-venue" element={<TravelAndVenue />} />
          <Route path="/rsvp" element={<RSVP />} />
        </Routes>
       </Router>
    </>
  )
}

export default App
