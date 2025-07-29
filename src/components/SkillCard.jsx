"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Palette } from "lucide-react";
import "../App.css";

const skillsData = [
  {
    title: "Frontend Technologies",
    icon: <Code2 size={24} />,
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
    ],
  },
  {
    title: "Programming Languages",
    icon: <Database size={24} />,
    skills: [
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
      { name: "SQL", level: 70 },
    ],
  },
  {
    title: "Design & Tools",
    icon: <Palette size={24} />,
    skills: [
      { name: "UI/UX Design", level: 85 },
      { name: "Figma", level: 80 },
      { name: "Responsive Design", level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="skills-header-wrapper"
      >
        <h3 className="section-subtitle">💡 My Expertise</h3>
        <h2 className="section-title">Skills & Technologies</h2>
      </motion.div>

      <div className="skills-container">
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            className="skills-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="skills-header">
              <div className="skills-icon">{category.icon}</div>
              <h3>{category.title}</h3>
            </div>

            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="skill-bar-wrapper"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="skill-title">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
