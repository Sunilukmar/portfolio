
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import './App.css';
import About from './components/About';
import Skills from './components/SkillCard';
import Projects from './components/ProjectCard';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/ContactForm';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Skills/>
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
