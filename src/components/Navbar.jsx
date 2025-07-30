import React, { useState } from 'react';
import '../App.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Certifications', 'Contact'];

  return (
    <header className="navbar">
      <h1 className="logo">Sunil Kumar Reddy</h1>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
