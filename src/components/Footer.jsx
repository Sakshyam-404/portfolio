import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p className="footer-text">
          Designed & Built by Sakshyam Gyawali
        </p>
        <p className="footer-copy">
          © {new Date().getFullYear()} • All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
