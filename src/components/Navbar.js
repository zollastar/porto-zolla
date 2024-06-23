import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = ({ activeSection }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const isActive = (link) => {
    if (location.pathname === '/') {
      return activeSection === link ? 'active' : '';
    } else if (location.pathname === '/contact' && link === 'contact') {
      return 'active';
    }
    return '';
  };

  const handleLinkClick = (section) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { section } });
    }
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode class to body element
  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  // Check screen size on component mount
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsOpen(true);
    }
  }, []);

  return (
    <>
      <div className="navbar-burger" onClick={toggleNavbar}>
        <i className="bi bi-list"></i>
      </div>
      <nav className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <div className="navbar-profile">
          <img src={`${process.env.PUBLIC_URL}/img/profile.png`} alt="Profile" className="navbar-profile-img" />
          <h2 className="navbar-profile-name">Zolla Harahap</h2>
          <div className="navbar-social-icons">
            <a href="https://www.facebook.com/zolla.p.harahap"><i className="bi bi-facebook"></i></a>
            <a href="https://instagram.com/zollahrp"><i className="bi bi-instagram"></i></a>
            <a href="https://x.com/zollahrp"><i className="bi bi-twitter"></i></a>
            <a href="https://github.com/zollahrp"><i className="bi bi-github"></i></a>
            <a href="https://www.linkedin.com/in/zolla/"><i className="bi bi-linkedin"></i></a>
            <a href="https://www.youtube.com/channel/UCOoUuSZMbO--sa15mrE5GNA"><i className="bi bi-youtube"></i></a>
          </div>
        </div>
        <ul>
          <li key="home">
            {location.pathname === '/' ? (
              <ScrollLink to="hero" className={`navbar-link ${isActive('home')}`} spy={true} smooth={true} duration={500}>
                <i className="bi bi-house-door"></i> Home
              </ScrollLink>
            ) : (
              <div onClick={() => handleLinkClick('hero')} className={`navbar-link ${isActive('home')}`}>
                <i className="bi bi-house-door"></i> Home
              </div>
            )}
          </li>
          <li key="about">
            {location.pathname === '/' ? (
              <ScrollLink to="about" className={`navbar-link ${isActive('about')}`} spy={true} smooth={true} duration={500}>
                <i className="bi bi-person"></i> About
              </ScrollLink>
            ) : (
              <div onClick={() => handleLinkClick('about')} className={`navbar-link ${isActive('about')}`}>
                <i className="bi bi-person"></i> About
              </div>
            )}
          </li>
          <li key="resume">
            {location.pathname === '/' ? (
              <ScrollLink to="resume" className="navbar-link" spy={true} smooth={true} duration={500}>
                <i className="bi bi-file-earmark-text"></i> Resume
              </ScrollLink>
            ) : (
              <div onClick={() => handleLinkClick('resume')} className="navbar-link">
                <i className="bi bi-file-earmark-text"></i> Resume
              </div>
            )}
          </li>
          <li key="portfolio">
            {location.pathname === '/' ? (
              <ScrollLink to="portfolio" className="navbar-link" spy={true} smooth={true} duration={500}>
                <i className="bi bi-images"></i> Portfolio
              </ScrollLink>
            ) : (
              <div onClick={() => handleLinkClick('portfolio')} className="navbar-link">
                <i className="bi bi-images"></i> Portfolio
              </div>
            )}
          </li>
          <li key="articles">
            {location.pathname === '/' ? (
              <ScrollLink to="articles" className="navbar-link" spy={true} smooth={true} duration={500}>
                <i className="bi bi-journal-text"></i> Articles
              </ScrollLink>
            ) : (
              <div onClick={() => handleLinkClick('articles')} className="navbar-link">
                <i className="bi bi-journal-text"></i> Articles
              </div>
            )}
          </li>
          <li key="contact">
            {location.pathname === '/' ? (
              <ScrollLink to="contact" className={`navbar-link ${isActive('contact')}`} spy={true} smooth={true} duration={500}>
                <i className="bi bi-envelope"></i> Contact
              </ScrollLink>
            ) : (
              <div onClick={() => handleLinkClick('contact')} className={`navbar-link ${isActive('contact')}`}>
                <i className="bi bi-envelope"></i> Contact
              </div>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;