import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </div>
        
        <div className="contact-content">
          <div className="contact-cta">
            <h3 className="cta-title">Ready to build something amazing?</h3>
            <p className="cta-text">
              I'm actively seeking <strong>Java / Software Engineering opportunities</strong> where I can 
              contribute immediately and grow long-term. Whether it's an internship, junior role, or 
              collaborative project—let's talk.
            </p>
            
            <div className="contact-buttons">
              <a href="https://github.com/Sakshyam-404" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <span>📂</span> GitHub
              </a>
              <a href="mailto:gyawalisakshyam4@gmail.com" className="btn btn-outline">
                <span>✉️</span> Email
              </a>
            </div>
          </div>
          
          <div className="why-grid">
            <div className="card why-card">
              <div className="why-icon">🎯</div>
              <h4 className="why-title">Java-First</h4>
              <p className="why-text">Strong OOP foundations that shape how I approach any problem</p>
            </div>
            
            <div className="card why-card">
              <div className="why-icon">🧠</div>
              <h4 className="why-title">CS Fundamentals</h4>
              <p className="why-text">Deep understanding from microprocessors to modern applications</p>
            </div>
            
            <div className="card why-card">
              <div className="why-icon">🔧</div>
              <h4 className="why-title">Problem Solver</h4>
              <p className="why-text">I debug, optimize, and handle edge cases systematically</p>
            </div>
            
            <div className="card why-card">
              <div className="why-icon">🚀</div>
              <h4 className="why-title">Fast Learner</h4>
              <p className="why-text">Ready to adapt to Spring Boot and enterprise stacks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
