import React from "react";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <p className="section-intro">💬 Let's Connect</p>
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-description">
        Ready to bring your ideas to life? Let's create something amazing together!
      </p>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            I'm always excited to discuss new opportunities, innovative projects, or just
            have a friendly chat about technology and development. Don't hesitate to reach out!
          </p>

          <a href="mailto:skumarreddy627@gmail.com" className="info-card" target="_blank" rel="noreferrer">
            <Mail size={24} />
            <div>
              <p className="info-title">Email</p>
              <p className="info-value">skumarreddy627@gmail.com</p>
            </div>
          </a>

          <a href="tel:+918341181874" className="info-card">
            <Phone size={24} />
            <div>
              <p className="info-title">Phone</p>
              <p className="info-value">+91 8341181874</p>
            </div>
          </a>

          <a href="https://linkedin.com/in/sunil-kumar-reddy-gajulapalli-348bb3272" className="info-card" target="_blank" rel="noreferrer">
            <Linkedin size={24} />
            <div>
              <p className="info-title">LinkedIn</p>
              <p className="info-value">Connect with me</p>
            </div>
          </a>

          <a href="https://github.com/Sunilukmar" className="info-card" target="_blank" rel="noreferrer">
            <Github size={24} />
            <div>
              <p className="info-title">GitHub</p>
              <p className="info-value">View my projects</p>
            </div>
          </a>

          <div className="info-card outline-glow">
            <MapPin size={24} />
            <div>
              <p className="info-title">Location</p>
              <p className="info-value">Madanapalle, Andhra Pradesh, India</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <h3><Send size={20} /> Send a Message</h3>
          <label>Name</label>
          <input type="text" placeholder="Your Name" required />
          <label>Email</label>
          <input type="email" placeholder="your.email@example.com" required />
          <label>Message</label>
          <textarea placeholder="Tell me about your project or just say hello!" required />
          <button type="submit">
            <Send size={16} /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
