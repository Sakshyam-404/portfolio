import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Samuha Connect",
      tech: "Java • Spring Boot • Financial Management",
      description: "Full-stack application for maintaining financial logs and managing group finances with comprehensive tracking features.",
      highlights: [
        "Spring Boot backend with RESTful API design",
        "Financial transaction logging and reporting",
        "User authentication and authorization",
        "Real-time balance tracking and updates"
      ]
    },
    {
      title: "E-commerce Platform",
      tech: "Spring Boot • Spring MVC • Backend",
      description: "Complete e-commerce solution built with pure Spring Boot, demonstrating enterprise-level backend development.",
      highlights: [
        "Spring MVC architecture for web layer",
        "Product catalog and inventory management",
        "Order processing and payment integration",
        "Admin dashboard for business operations"
      ]
    },
    {
      title: "Library Management System",
      tech: "Java • OOP • Collections",
      description: "Comprehensive library system demonstrating advanced OOP principles and custom data structure implementations.",
      highlights: [
        "Class hierarchy with inheritance and polymorphism",
        "Custom HashMap implementation for O(1) book lookup",
        "Exception handling for edge cases",
        "File I/O for persistent storage"
      ]
    },
    {
      title: "Task Scheduler",
      tech: "Java • DSA • Algorithms",
      description: "Priority-based task scheduling using custom heap implementation for efficient task management.",
      highlights: [
        "Min-heap implementation from scratch",
        "Custom Comparator for multi-criteria sorting",
        "O(log n) insertion and removal",
        "CLI interface with real-time updates"
      ]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What I've Built</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="card project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-tech">{project.tech}</span>
              </div>
              
              <p className="project-desc">{project.description}</p>
              
              <ul className="project-highlights">
                {project.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
