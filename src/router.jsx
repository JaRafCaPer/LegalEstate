import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import About from './pages/about/About.jsx';
import Services from './pages/services/Services.jsx';
import Team from './pages/Team/Team.jsx';
import Contact from './pages/Contact.jsx';

const AppRouter = () => {
  console.log('Rendering Router component');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
