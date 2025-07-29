import React from "react"
import { motion } from "framer-motion"
import { Zap, Code2, Brain, Palette, Users } from "lucide-react"
import "../App.css"

export default function About() {
  return (
    <section id="about" className="about-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span role="img" aria-label="heart">💗</span> Get to know me
      </motion.h2>

      <motion.h3
        className="about-heading"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        About <span>Me</span>
      </motion.h3>

      <div className="about-container">
        {/* Left Side */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h4><Zap size={20} className="icon-flash" /> My Story</h4>
          <p>
            I am a passionate Frontend Developer currently pursuing <strong>B-Tech</strong> at <span className="highlight-blue">Madanapalle Institute of Technology and Science</span> with an outstanding <span className="highlight-purple">CGPA of 8.98</span>.
          </p>
          <p>
            My journey in technology is fueled by curiosity and creativity. I specialize in transforming complex ideas into beautiful, interactive web experiences that users love and remember.
          </p>
          <div className="language-tags">
            <span>Telugu Native</span>
            <span>English Fluent</span>
            <span className="japanese">Japanese N5 🏅</span>
          </div>
        </motion.div>

        {/* Right Side Cards */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="skill-card">
            <Code2 className="card-icon" />
            <h4>Frontend Development</h4>
            <p>Expert in React.js, JavaScript, HTML5 & CSS3 with modern frameworks</p>
          </div>

          <div className="skill-card">
            <Brain className="card-icon" />
            <h4>Problem Solving</h4>
            <p>Strong analytical thinking with Python & Java programming skills</p>
          </div>

          <div className="skill-card">
            <Palette className="card-icon" />
            <h4>UI/UX Design</h4>
            <p>Creative design thinking with Figma and modern design principles</p>
          </div>

          <div className="skill-card">
            <Users className="card-icon" />
            <h4>Team Leader</h4>
            <p>Excellent communication and collaborative project management</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
