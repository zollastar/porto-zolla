import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import RecentProject from './components/RecentProject';
import Contact from './components/Contact';
import Articles from './components/Articles';
import ContactPage from './pages/ContactPage';
import ProjectDetail from './pages/ProjectDetail';
import ArticlePage from './pages/ArticlePage';
import Footer from './components/Footer';
import './App.css';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Resume />
      <RecentProject />
      <Articles />
      <Contact />
    </>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <Navbar activeSection={activeSection} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-page" element={<ContactPage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;