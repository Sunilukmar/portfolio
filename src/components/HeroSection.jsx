import React, { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../App.css';

const generateStars = (count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const style = {
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
    };
    stars.push(<div key={i} className="star" style={style}></div>);
  }
  return stars;
};

const HeroSection = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      container.style.setProperty('--x', `${x}px`);
      container.style.setProperty('--y', `${y}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} id="home" className="hero parallax-container">
      {generateStars(60)}
      <div className="moving-star left"></div>
      <div className="moving-star right"></div>
      <div className="layer layer-1"></div>
      <div className="layer layer-2"></div>
      <div className="planet"></div>
      <div className="comet"></div>

      


      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm <span>Sunil Kumar Reddy</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        A Frontend Developer passionate about building beautiful, responsive UIs with React and
        crafting seamless user experiences.
      </motion.p>

      <motion.div
        className="buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <a href="https://github.com/Sunilukmar" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          GitHub
        </a>
        <a href="https://linkedin.com/in/sunil-kumar-reddy-gajulapalli-348bb3272" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
