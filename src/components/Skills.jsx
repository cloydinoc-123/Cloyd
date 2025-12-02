// src/components/Skills.jsx
import "./Skills.css";

export default function Skills() {
  const skills = [
    { name: "Figma", percent: 40, icon: "figma" },
    { name: "UI/UX Design", percent: 45, icon: "ux" },
    { name: "Tailwind CSS", percent: 40, icon: "tw" },
    { name: "JavaScript", percent: 50, icon: "js" },
    { name: "Next.js", percent: 60, icon: "next" },
    { name: "Express", percent: 30, icon: "ex" },
    { name: "PHP", percent: 30, icon: "php" },
    { name: "React", percent: 70, icon: "react" },
  ];

  return (
    <div className="skills-page">
      <div className="skills-header">
        <h1 className="skills-title">My Skills</h1>
        <p className="skills-subtitle">Tools & technologies I use every day</p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">
              <div className={`icon-bg ${skill.icon}`}>{skill.icon.toUpperCase().slice(0, 2)}</div>
            </div>
            <h3 className="skill-name">{skill.name}</h3>
            <div className="progress-container">
              <div 
                className="progress-bar" 
                style={{ width: `${skill.percent}%` }}
              >
                <span className="progress-glow"></span>
              </div>
            </div>
            <span className="skill-percent">{skill.percent}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}