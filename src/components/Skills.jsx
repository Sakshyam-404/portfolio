import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: "Languages",
      icon: "💻",
      skills: [
        { name: "Java", level: "Expert", desc: "OOP, Collections, Multithreading, Spring Framework" },
        { name: "C/C++", level: "Intermediate", desc: "Systems Programming, Logic Design" },
        { name: "Python", level: "Intermediate", desc: "Scripting, Automation, Problem Solving" }
      ]
    },
    {
      category: "Core CS",
      icon: "🧠",
      skills: [
        { name: "Data Structures", desc: "Arrays, Trees, Graphs, Hash Tables" },
        { name: "Algorithms", desc: "Sorting, Searching, Dynamic Programming" },
        { name: "OOP Design", desc: "SOLID, Design Patterns, Architecture" },
        { name: "Problem Solving", desc: "Algorithmic Thinking, Edge Cases" }
      ]
    },
    {
      category: "Frameworks",
      icon: "🌐",
      skills: [
        { name: "Spring Boot", desc: "REST APIs, Backend Development" },
        { name: "Spring Core", desc: "Dependency Injection, IoC Container" },
        { name: "Spring MVC", desc: "Web Applications, Controllers" },
        { name: "React", desc: "Component Architecture, Hooks, State Management" }
      ]
    },
    {
      category: "Tools",
      icon: "🛠️",
      skills: [
        { name: "Git", desc: "Version Control, Collaboration" },
        { name: "Debugging", desc: "Systematic Problem Solving" },
        { name: "Testing", desc: "Unit Tests, Edge Cases" },
        { name: "Linux", desc: "Command Line, Shell Scripts" }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What I Know</span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
        </div>
        
        <div className="skills-grid">
          {skillsData.map((category, idx) => (
            <div key={idx} className="card skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-name">{category.category}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      {skill.level && <span className="skill-badge">{skill.level}</span>}
                    </div>
                    <p className="skill-desc">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
