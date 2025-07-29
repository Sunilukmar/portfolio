"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Users,
  Shield,
  ShoppingCart,
  Bike,
  ExternalLink,
  Github,
} from "lucide-react";
import "../App.css";

const projects = [
  {
    id: 1,
    icon: <Shield size={28} />,
    title: "MargRakshak - Path Protector",
    teamSize: "5",
    description:
      "Revolutionary map-based safety app with real-time accident alerts. Features AI-powered route optimization and community-driven safety reporting system.",
    tags: ["React", "Maps API", "Real-time Data", "AI/ML", "Mobile App"],
    demo: "#",
    code: "#",
  },
  {
    id: 2,
    icon: <Bike size={28} />,
    title: "Bike Buddy",
    teamSize: "5",
    description:
      "Smart bike rental platform with IoT integration. Secure booking system with real-time tracking, payment gateway, and user rating system.",
    tags: ["React", "Node.js", "Payment Gateway", "IoT", "Real-time Tracking"],
    demo: "#",
    code: "#",
  },
  {
    id: 3,
    icon: <ShoppingCart size={28} />,
    title: "E-Mart - E-commerce Platform",
    teamSize: "1",
    description:
      "Full-featured e-commerce app with filtering, wishlist, cart management, and responsive design across all devices.",
    tags: [
      "React JS",
      "React Router",
      "Redux",
      "Responsive Design",
    ],
    demo: "https://github.com/Sunilukmar/E-Mart",
    code: "https://github.com/Sunilukmar/E-Mart",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <p className="projects-subtitle">
        🚀 <span className="highlighted">My Work</span>
      </p>
      <h2 className="projects-title">Featured Projects</h2>
      <p className="projects-description">
        Innovative solutions that blend creativity with cutting-edge technology
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            onClick={() => setActiveProject(project)}
          >
            <div className="project-header">
              <div className="project-icon">{project.icon}</div>
              <div className="featured-tag">
                <Star size={16} className="mr-1" />
                Featured
              </div>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-team">
              <Users size={16} /> Team Size: {project.teamSize}
            </p>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                <Github size={16} /> Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Box */}
      <motion.div
        className="view-more-box"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="view-more-title">Want to see more?</h3>
        <p className="view-more-description">
          Check out my GitHub for more exciting projects and contributions!
        </p>
        <a
          href="https://github.com/Sunilukmar"
          target="_blank"
          rel="noopener noreferrer"
          className="view-more-btn"
        >
          <Github size={18} />
          View All Projects
        </a>
      </motion.div>

      {activeProject && (
        <div className="modal-backdrop" onClick={() => setActiveProject(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{activeProject.title}</h3>
            <p>{activeProject.description}</p>
            <div className="project-tags modal-tags">
              {activeProject.tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="modal-buttons">
              <a
                href={activeProject.demo}
                className="project-btn"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
              <a
                href={activeProject.code}
                className="project-btn code-btn"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
