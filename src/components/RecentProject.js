import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  { id: 1, category: 'website', image: '/img/project 1.png', year: 2024, title: 'Website Denias Cafe', description: 'Situs web ini dirancang untuk memberikan kemudahan bagi pengunjung dalam memesan meja, memberikan review, dan mengakses informasi terkait kafe. Selain itu,...' },
  { id: 2, category: 'aplikasi', image: '/img/project 2.png', year: 2023, title: 'Detektif Zayn Orlando', description: 'Detektif Zayn Orlando adalah sebuah game bertema detektif yang menantang pemain untuk memecahkan kasus penggelapan dana sebesar 2,5 miliar rupiah. Dalam game ini...' },
  { id: 3, category: 'video', image: '/img/project 3.png', year: 2023, title: 'Motion Graphics UI UX Pada Dunia Digital', description: 'Motion Graphics UI/UX ini dirancang untuk memperkenalkan konsep antarmuka pengguna yang dinamis dan menarik melalui animasi yang halus dan estetis. Motion graphics ini...' },
  { id: 4, category: 'aplikasi', image: '/img/project 4.png', year: 2024, title: 'Sistem Antrian Rumah Sakit', description: 'Sistem Antrian Rumah Sakit adalah aplikasi yang dirancang untuk mengelola antrian pasien secara efisien. Fitur utamanya mencakup...' },
  { id: 5, category: 'aplikasi', image: '/img/project 5.png', year: 2023, title: 'Makanan Khas Daerah Indonesia', description: 'Makanan Khas Daerah Indonesia adalah aplikasi yang dirancang untuk memperkenalkan dan mengeksplorasi kekayaan kuliner dari berbagai daerah di Indonesia. User journey dalam aplikasi ini dimulai dengan...' },
  { id: 6, category: 'website', image: '/img/project 6.png', year: 2023, title: 'PowerPoint UI & UX', description: 'Proyek ini melibatkan pembuatan presentasi PowerPoint profesional dengan tema UI & UX yang terinspirasi dari beberapa platform populer: Google Chrome, Facebook (Pesbuk), X (W), dan YouTube (Yusup)...' },
  { id: 7, category: 'video', image: '/img/project 7.png', year: 2024, title: 'Logo Reveal It Fest', description: 'Pembuatan video logo reveal yang memukau menggunakan Adobe After Effects dengan efek Particular. Efek Particular digunakan untuk menciptakan partikel dinamis yang memberikan...' },
  { id: 8, category: 'video', image: '/img/project 8.png', year: 2023, title: 'Zolla vs Mosquito', description: 'Video ini merupakan parodi dari adegan terkenal dalam anime One Punch Man, yaitu Saitama vs Mosquito. Dalam video ini, saya menggunakan berbagai efek, termasuk...' },
  { id: 9, category: 'video', image: '/img/project 9.png', year: 2024, title: 'Trailer OMI', description: 'Pembuatan video trailer untuk Olimpiade Mahasiswa IPB (OMI), sebuah acara tahunan yang penuh semangat dan kompetisi. Video trailer ini dirancang untuk menggambarkan energi dan...' },
];

const RecentProject = () => {
  const [filter, setFilter] = useState('recent');
  const navigate = useNavigate();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const filteredProjects = filter === 'recent'
    ? projects.sort((a, b) => b.year - a.year)
    : projects.filter(project => project.category === filter);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleProjectClick = (id) => {
    navigate(`/project/${id}`);
  };

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    },
    hidden: {
      opacity: 0,
      y: 50
    }
  };

  return (
    <section id="portfolio" className="recent-project-section py-10">
      <div className="recent-project-container mx-auto px-4">
        <motion.div
          className="section-title text-left"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
        >
          <h2 className="text-3xl font-bold mb-7 relative after:content-[''] after:w-12 after:h-[3px] after:bg-blue-500 after:absolute after:left-0 after:-bottom-3">Portfolio</h2>
          <p className="text-base mb-10 text-gray-500">Saya selalu berusaha untuk memberikan solusi yang efektif dan kreatif dalam setiap proyek yang saya tangani. Berikut adalah beberapa proyek unggulan yang telah saya selesaikan:</p>
        </motion.div>
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <ul className="portfolio-filters" data-aos="fade-up" data-aos-delay="100">
            <li onClick={() => handleFilterChange('recent')} className={filter === 'recent' ? 'filter-active' : 'filter-button'}>Recent Project</li>
            <li onClick={() => handleFilterChange('website')} className={filter === 'website' ? 'filter-active' : 'filter-button'}>Website</li>
            <li onClick={() => handleFilterChange('aplikasi')} className={filter === 'aplikasi' ? 'filter-active' : 'filter-button'}>Aplikasi</li>
            <li onClick={() => handleFilterChange('video')} className={filter === 'video' ? 'filter-active' : 'filter-button'}>Video</li>
          </ul>
          <motion.div
            className="project-grid"
            data-aos="fade-up"
            data-aos-delay="200"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
          >
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                className="project-tile"
                onClick={() => handleProjectClick(project.id)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
              >
                <img src={project.image} className="project-image" alt={`Project ${project.id}`} />
                <div className="project-overlay">
                  <div className="project-info">
                    <h4 className="project-title">{project.title}</h4>
                    <p className="project-description">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RecentProject;