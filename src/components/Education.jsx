import React from "react";
import { GraduationCap, BookOpen, Award, CalendarDays } from "lucide-react";


const educationData = [
  {
    id: 1,
    icon: <GraduationCap size={28} />,
    title: "B-Tech",
    institute: "Madanapalle Institute of Technology and Science",
    details: "Computer Science & Engineering with focus on Full-Stack Development",
    date: "2022 – present",
    highlight: "CGPA: 9.0",
  },
  {
    id: 2,
    icon: <BookOpen size={28} />,
    title: "Class XII",
    institute: "Sri Chaitanya Junior Kalasala",
    details: "Mathematics, Physics, Chemistry - Science Stream",
    date: "2021 – 2022",
    highlight: "Percentage: 93.6%",
  },
  {
    id: 3,
    icon: <Award size={28} />,
    title: "SSC",
    institute: "SRI Maharshi High School",
    details: "Outstanding academic performance with distinction",
    date: "2019 – 2020",
    highlight: "Percentage: 98%",
  },
];

export default function Education() {
  return (
    <section id="education" className="education-section">
      <p className="edu-subtitle">🏆 Academic Journey</p>
      <h2 className="edu-title">Education & Achievements</h2>
      <p className="edu-description">
        A consistent track record of academic excellence and continuous learning
      </p>

      <div className="edu-cards">
        {educationData.map((edu) => (
          <div className="edu-card" key={edu.id}>
            <div className="edu-card-header">
              <div className="edu-icon">{edu.icon}</div>
              <div>
                <h3 className="edu-degree">{edu.title}</h3>
                <p className="edu-institute">{edu.institute}</p>
              </div>
              <div className="edu-date">
                <CalendarDays size={16} /> {edu.date}
              </div>
            </div>
            <p className="edu-details">{edu.details}</p>
            <div className="edu-score-badge">
              🎓 <strong>{edu.highlight}</strong>
            </div>
          </div>
        ))}
      </div>

      <div className="edu-summary">
        <div className="edu-summary-card cgpa">
          <h3>9.0</h3>
          <p>Current CGPA</p>
        </div>
        <div className="edu-summary-card xii">
          <h3>93.6%</h3>
          <p>Class XII Score</p>
        </div>
        <div className="edu-summary-card ssc">
          <h3>98%</h3>
          <p>SSC Score</p>
        </div>
      </div>
    </section>
  );
}
