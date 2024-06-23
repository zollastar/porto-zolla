import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Contact() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact-page');
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    hidden: {
      opacity: 0,
      y: 30,
    },
  };

  return (
    <section id="contact" className="home-contact-section py-16 bg-gray-100 w-full">
      <div className="contact-shadow-wrapper mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          className="contact-content-wrapper bg-white p-8 rounded-lg shadow-xl"
        >
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg text-gray-700 mb-6">
          Jangan ragu untuk menghubungi saya kapan saja. Saya akan segera merespons secepat mungkin!
          </p>
          <button
            onClick={handleContactClick}
            className="home-contact-button bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;