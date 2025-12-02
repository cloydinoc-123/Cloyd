// src/components/Projects.jsx
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Profile Page UI",
      category: "Profile Page",
      description: "A clean and modern user profile interface with smooth animations.",
      image: "/projects/profile-ui.jpg",
      link: "#",
    },
    {
      title: "Sample Marketplace",
      category: "E-market",
      description: "A vibrant Roblox companion shop with garden-themed pet marketplace.",
      image: "/projects/marketplace.jpg",
      link: "#",
      featured: true,
    },
    {
      title: "TaskFlow Dashboard",
      category: "Productivity App",
      description: "A minimal task management dashboard with drag & drop functionality.",
      image: "/projects/taskflow.jpg",
      link: "#",
    },
  ];

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1 className="projects-title">My Works</h1>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${project.featured ? "featured" : ""}`}
          >
            {/* Project Image */}
            <div className="project-image">
              <img
                src={project.image || "/placeholder-project.jpg"}
                alt={project.title}
                className="project-img"
              />
              <div className="project-overlay">
                <a href={project.link} className="view-project">
                  View Project →
                </a>
              </div>
            </div>

            {/* Project Info */}
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-category">{project.category}</p>
              <a href={project.link} className="view-project-mobile">
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}