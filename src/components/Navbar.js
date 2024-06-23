import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = ({ activeSection }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // Menyimpan status apakah navbar terbuka atau tertutup

  // Fungsi untuk mengecek apakah link aktif berdasarkan pathname dan activeSection
  const isActive = (link) => {
    if (location.pathname === '/') {
      return activeSection === link ? 'active' : '';
    } else if (location.pathname === '/contact' && link === 'contact') {
      return 'active';
    }
    return '';
  };

  // Fungsi untuk toggle (buka/tutup) navbar
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Tombol burger untuk membuka/menutup navbar */}
      <div className="navbar-burger" onClick={toggleNavbar}>
        <i className="bi bi-list"></i>
      </div>

      {/* Menu navbar */}
      <nav className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <div className="navbar-profile">
          <img src={`${process.env.PUBLIC_URL}/img/profile.png`} alt="Profile" className="navbar-profile-img" />
          <h2 className="navbar-profile-name">Zolla Harahap</h2>
          <div className="navbar-social-icons">
            <a href="https://www.facebook.com/zolla.p.harahap"><i className="bi bi-facebook"></i></a>
            <a href="https://instagram.com/zollahrp"><i className="bi bi-instagram"></i></a>
            <a href="https://x.com/zollahrp"><i className="bi bi-twitter"></i></a>
            <a href="https://github.com/zollahrp"><i className="bi bi-github"></i></a>
            <a href="https://www.youtube.com/channel/UCOoUuSZMbO--sa15mrE5GNA"><i className="bi bi-youtube"></i></a>
          </div>
        </div>

        <ul>
          <li><Link to="/" className={`navbar-link ${isActive('home')}`}><i className="bi bi-house-door"></i> Home</Link></li>
          <li><ScrollLink to="about" className={`navbar-link ${isActive('about')}`} spy={true} smooth={true} duration={500}><i className="bi bi-person"></i> About</ScrollLink></li>
          <li><ScrollLink to="resume" className="navbar-link" spy={true} smooth={true} duration={500}><i className="bi bi-file-earmark-text"></i> Resume</ScrollLink></li>
          <li><ScrollLink to="portfolio" className="navbar-link" spy={true} smooth={true} duration={500}><i className="bi bi-images"></i> Portfolio</ScrollLink></li>
          <li><ScrollLink to="articles" className="navbar-link" spy={true} smooth={true} duration={500}><i className="bi bi-journal-text"></i> Articles</ScrollLink></li>
          <li><ScrollLink to="contact" className={`navbar-link ${isActive('contact')}`} spy={true} smooth={true} duration={500}><i className="bi bi-envelope"></i> Contact</ScrollLink></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;