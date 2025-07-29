import React from 'react';
import '../App.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <h1>Sunil Kumar Reddy</h1>
      <ul className="nav-links">
        {['Home', 'About', 'Skills', 'Projects', 'Education','Certifications', 'Contact'].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
