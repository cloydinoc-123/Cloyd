// src/components/About.jsx
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>Get to Know Me</h1>
        <p>
          I am currently pursuing a <strong>Bachelor of Science in Information Technology</strong> at 
          <strong> Cordova Public College</strong>. My mission is to build intuitive, meaningful, and scalable digital solutions.
        </p>
      </div>

      <div className="about-grid">
        {/* Who I Am */}
        <div className="glass-card">
          <h2>Who I Am</h2>
          <p>
            I’m an IT student driven by a passion for building seamless and impactful digital experiences. My focus lies in creating intuitive user interfaces and developing full-stack applications that combine functionality with aesthetic appeal.
          </p>
          <p>
            Every day, I strive to improve my craft, learn new trends, and push myself to become a better developer 
            with an eye for detail and functionality.
          </p>
        </div>

        {/* My Resume */}
        <div className="glass-card">
          <h2>My Resume</h2>
          <p>
            If you would like to explore my background, education, and professional profile, 
            feel free to view or download my resume below.
          </p>

          <div className="resume-buttons">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-view">
              View Resume
            </a>
            <a href="/resume.pdf" download="Arjay-Decio-Resume.pdf" className="btn-download">
              Download Resume
            </a>
          </div>

          <div className="resume-note">
            Updated • November 2025 • PDF
          </div>
        </div>
      </div>
    </div>
  );
}