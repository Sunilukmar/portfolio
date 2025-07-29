import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text">© 2025 G Venkata Sunil Kumar Reddy. All rights reserved.</p>

        <div className="footer-icons">
          <a
            href="mailto:skumarreddy627@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="footer-icon"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/Sunilukmar"
            target="_blank"
            rel="noreferrer"
            className="footer-icon"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/sunil-kumar-reddy-gajulapalli-348bb3272"
            target="_blank"
            rel="noreferrer"
            className="footer-icon"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
