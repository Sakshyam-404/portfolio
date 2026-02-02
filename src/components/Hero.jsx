import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <div className="badge">
                <span className="badge-dot"></span>
                Open to Opportunities
              </div>
            </div>
            
            <h1 className="hero-title">
              Building the Future
              <span className="hero-name">with Code</span>
            </h1>
            
            <p className="hero-subtitle">
              I'm Sakshyam Gyawali, a Java developer specializing in Spring Boot applications
            </p>
            
            <p className="hero-description">
              Expert in object-oriented programming, Spring Framework, and building scalable backend systems. 
              I transform complex business requirements into robust, production-ready applications.
            </p>
            
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Get In Touch
              </a>
            </div>
            
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-value">Java</span>
                <span className="stat-label">Primary</span>
              </div>
              <div className="stat">
                <span className="stat-value">OOP</span>
                <span className="stat-label">Expert</span>
              </div>
              <div className="stat">
                <span className="stat-value">DSA</span>
                <span className="stat-label">Strong</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="code-display">
              <div className="code-header">
                <div className="code-dots">
                  <span className="code-dot"></span>
                  <span className="code-dot"></span>
                  <span className="code-dot"></span>
                </div>
                <span className="code-title">Developer.java</span>
              </div>
              <div className="code-body">
                <pre><code>{`public class Developer {
    private final String name = "Sakshyam";
    private final String expertise = "Java";
    
    public void solve(Problem problem) {
        analyze(problem);
        design(solution);
        implement(cleanCode);
        optimize(performance);
    }
    
    public String approach() {
        return "Think deeply, "
             + "code cleanly, "
             + "build reliably";
    }
}`}</code></pre>
              </div>
            </div>
            
            <div className="tech-pills">
              <span className="tech-pill">Java</span>
              <span className="tech-pill">React</span>
              <span className="tech-pill">Spring</span>
              <span className="tech-pill">DSA</span>
              <span className="tech-pill">OOP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
