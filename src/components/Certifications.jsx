import React from "react";
import { Award, BadgeCheck, Star, Trophy } from "lucide-react";
import "../App.css";

export default function Certifications() {
  return (
    <section  id="certifications" className="certifications-section">
      <p className="certifications-subtitle">🏆 <span className="highlighted">Achievements</span></p>
      <h2 className="certifications-title">Certifications & Awards</h2>
      <p className="certifications-description">
        Continuous learning and professional development milestones
      </p>

      <div className="certifications-grid">
        {/* Left Box - Certifications */}
        <div className="cert-box">
          <div className="cert-header">
            <BadgeCheck size={24} />
            <h3>Professional Certifications</h3>
          </div>

          <ul className="cert-list">
            {[
              {
                title: "Basics of Python Programming",
                org: "Infosys Springboard",
                link: "https://drive.google.com/file/d/1nwEnFanjsubs8N6xx2wuE-U3q02oVP6t/view"
              },
              {
                title: "Basics of Java Programming",
                org: "EdX",
                link: "https://example.com/jhttps://courses.edx.org/certificates/0bec79b9f75c4c5d9fd8e948169d1682?_gl=1*dizak2*_gcl_au*MTA2MzIwODExNS4xNzQ3MjMyMjkz*_ga*MTU2Mzg1ODcyMi4xNzQ3MjMyMjg3*_ga_D3KS4KMDT0*czE3NTM3MjE2NzkkbzMkZzEkdDE3NTM3MjE3MTQkajI1JGwwJGgwava-certificate"
              },
              {
                title: "Learn SQL from Scratch",
                org: "Udemy",
                link: "https://udemy-certificate.s3.amazonaws.com/image/UC-cbc0364f-2ce9-42de-91fa-f396998b1548.jpg"
              },
              {
                title: "Learn HTML from Scratch",
                org: "Udemy",
                link: "https://udemy-certificate.s3.amazonaws.com/image/UC-8af46c71-e628-467c-a3c7-b243ecb569e0.jpg"
              },
              {
                title: "Certificate of UI/UX Design",
                org: "Design Institute",
                link: "https://example.com/uiux-certificate"
              },
              {
                title: "Japanese Language Proficiency Test (Level N5)",
                org: "JLPT",
                badge: "Special Achievement",
                link: "https://drive.google.com/file/d/1bVFqcjHFMBMNIoebT6aVrwA-X66bVAWO/view"
              }
            ].map((cert, index) => (
              <li className={`cert-card ${cert.badge ? "highlight-cert" : ""}`} key={index}>
                <div className="cert-icon">
                  <Award size={20} />
                </div>
                <div className="cert-text">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    <strong>{cert.title}</strong>
                  </a>
                  <p>{cert.org}</p>
                </div>
                {cert.badge && <span className="cert-badge gold">{cert.badge}</span>}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Box - Special Recognition */}
        <div className="recognition-box">
          <div className="cert-header">
            <Trophy size={24} />
            <h3>Special Recognition</h3>
          </div>

          <div className="recognition-card">
            <div className="recognition-title">
              <Trophy size={20} />
              <h4>Language Proficiency Award</h4>
            </div>
            <p className="cash-winner">🎁 <strong>Cash Prize Winner</strong></p>
            <p>
              Received a <span className="highlight-cash">₹1800 cash prize</span> for clearing JLPT N5 as the <span className="highlight-tag">first-batch student</span> from my college to achieve this prestigious certification.
            </p>
            <div className="badge-row">
              <span className="tag yellow">JP JLPT N5</span>
              <span className="tag blue">🥇 First Batch</span>
              <span className="tag green">💰 Cash Prize</span>
            </div>
          </div>

          <div className="recognition-card">
  <div className="recognition-title">
    <Star size={20} />
    <h4>
      <a href="https://www.geeksforgeeks.org/user/skumarreddy/?_gl=1*bnm2y7*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwv5zEBhBwEiwAOg2YKJZ2fxqh6ZcK4DzZ_7Gz6TWUtAyIuYmVNhwzwtkyRYA6zkfNR5tFERoCKmgQAvD_BwE&gbraid=0AAAAAC9yBkDD4d8KuXFo1A4Ppsa_OE3Lk" target="_blank" rel="noopener noreferrer">
        GeeksforGeeks Achievement
      </a>
    </h4>
  </div>
  <p>
    Secured a rank under <span className="highlight-tag">Top 50</span> in problem solving on GeeksforGeeks platform.
  </p>
  <div className="badge-row">
    <span className="tag green">💻 Problem Solving</span>
    <span className="tag purple">🏅 GFG Top 50</span>
  </div>
</div>


          <div className="recognition-stats">
            <div className="stat-box">
              <h4 className="stat-value blue">6+</h4>
              <p>Certifications</p>
            </div>
            <div className="stat-box">
              <h4 className="stat-value cyan">1st</h4>
              <p>In College</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
