import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          <span className="logo-bracket">{'<'}</span>
          <span className="logo-text">SG</span>
          <span className="logo-bracket">{'/>'}</span>
        </a>
        
        <ul className="navbar-menu">
          <li><a href="#about" className="navbar-link">About</a></li>
          <li><a href="#skills" className="navbar-link">Skills</a></li>
          <li><a href="#projects" className="navbar-link">Projects</a></li>
          <li><a href="#contact" className="navbar-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
