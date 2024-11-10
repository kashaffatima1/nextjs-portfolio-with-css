import React from 'react';
import '../Component/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-follow">
          <h1 className="footer-title">Follow us</h1>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="https://facebook.com" className="footer-list-link">Facebook</a>
            </li>
            <li className="footer-list-item">
              <a href="https://twitter.com" className="footer-list-link">Twitter</a>
            </li>
            <li className="footer-list-item">
              <a href="https://instagram.com" className="footer-list-link">Instagram</a>
            </li>
            <li className="footer-list-item">
              <a href="https://linkedin.com" className="footer-list-link">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-credits">
        <h1 className="footer-credits-title">
          Created by <span className="footer-credits-name">Kashaf</span>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
