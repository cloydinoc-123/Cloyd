// Projects.jsx - COMPLETE REPLACE
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Operating System portfolio",
      category: "Profile Page",
      description: "A clean and modern user profile interface with smooth animations.",
      image: "/operatingsystem.jpg",
      link: "https://github.com/cloydinoc-123/Cloyd",
    },
    {
      title: "capstone figma partial",
      category: "figma partial",
      description: "A vibrant Roblox companion shop with garden-themed pet marketplace.",
      image: "/capstone.jpg",
      link: "https://www.figma.com/proto/hF6nQ0LC8wmg1l7SapYzrJ/Untitled?node-id=1-160&t=dxVoQZYZHMgnSzFu-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1", // Add your link here
      featured: true,
    },
    {
      title: "Profile Project",
      category: "Productivity App",
      description: "A minimal task management dashboard with drag & drop functionality.",
      image: "/jovinebayot.jpg",
      link: "https://github.com/cloydinoc-123/project", // Add your link here
    },
  ];

  return (
    <div className="page-container">
      <div className="projects-header">
        <h1 className="projects-title">My Works</h1>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${project.featured ? "featured" : ""}`}
          >
            {/* Project Image - NOW CLICKABLE */}
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              <div className="project-image">
                <img
                  src={project.image || "/placeholder-project.jpg"}
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-overlay">
                  <span className="view-project">View Project →</span>
                </div>
              </div>
            </a>

            {/* Project Info - ALSO CLICKABLE */}
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <span className="view-project-mobile">View Project →</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}