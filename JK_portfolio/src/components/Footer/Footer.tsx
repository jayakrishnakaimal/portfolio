import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {year} JK. Designed &amp; built by Jayakrishna Kaimal.</p>
    </footer>
  );
};

export default Footer;
