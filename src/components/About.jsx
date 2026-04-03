// src/components/About.jsx
import "./About.css";

export default function About() {
  return (
    <div className="page-container">
      <div className="about-hero">
        <h1>About me</h1>
        <p>
          I am currently pursuing a <strong>Bachelor of Science in Information Technology</strong> at 
          <strong> Cordova Public College</strong>. My mission is to build intuitive, meaningful, and scalable digital solutions.
        </p>
      </div>

      <div className="about-grid">
        {/* Who I Am */}
        <div className="glass-card">
          <h2></h2>
          <p>
            I’m an IT student driven by a passion for building seamless and impactful digital experiences. My focus lies in creating intuitive user interfaces and developing full-stack applications that combine functionality with aesthetic appeal.
          </p>
          <p>
            "Life is a journey, not a destination—enjoy the ride, even when the road is tough."
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
            <a href="/resume.jpg" target="_blank" rel="noopener noreferrer" className="btn-view">
              View Resume
            </a>
            <a href="/resume.jpg" download="Cloyd-Inoc-resume.jpg" className="btn-download">
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