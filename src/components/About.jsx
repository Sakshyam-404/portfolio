import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Who I Am</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>
        
        <div className="about-grid">
          <div className="about-content">
            <p className="about-text">
              I'm <strong>Sakshyam Gyawali</strong>, a software developer who thinks in <strong>Java</strong>. 
              My approach to programming is rooted in deep understanding of <strong>Spring Framework</strong>, 
              object-oriented design, and building enterprise-grade applications.
            </p>
            
            <p className="about-text">
              I don't just write code that works; I architect solutions that are <strong>maintainable</strong>, 
              <strong> scalable</strong>, and built on solid software engineering principles. From <strong>Spring Boot</strong> 
              microservices to full-stack applications, I focus on clean code and robust architecture.
            </p>
            
            <p className="about-text">
              My learning philosophy is simple: <strong>build, debug, improve, repeat</strong>. I've developed 
              production applications like <strong>Samuha Connect</strong> (financial management) and a complete 
              <strong> e-commerce platform</strong>, gaining hands-on experience with real-world challenges.
            </p>
          </div>
          
          <div className="about-cards">
            <div className="card about-card">
              <div className="card-icon">🎯</div>
              <h3 className="card-title">Systems Thinker</h3>
              <p className="card-text">
                I connect the dots between theory and practice, understanding how code runs at every level.
              </p>
            </div>
            
            <div className="card about-card">
              <div className="card-icon">💡</div>
              <h3 className="card-title">Problem Solver</h3>
              <p className="card-text">
                From data structures to full-stack apps, I focus on elegant solutions to complex challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
