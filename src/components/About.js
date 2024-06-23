import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
    },
  };

  return (
    <section className="about" id="about" ref={ref}>
      <motion.div
        className="w-full"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
      >
        <h2>About Me Zolla Tampan</h2>
        <p>
          Halo, nama saya Zolla Perdana Putra Harahap. Saya adalah mahasiswa di
          IPB University, jurusan Teknologi Rekayasa Perangkat Lunak. Dengan
          latar belakang yang kuat dalam pengembangan web dan editing video,
          saya telah mengasah keterampilan saya dalam menciptakan solusi
          perangkat lunak yang inovatif dan produksi video berkualitas tinggi.
        </p>
        <div className="about-content">
          <motion.img
            src={`${process.env.PUBLIC_URL}/img/profile.png`}
            alt="Profile"
            className="about-profile-img"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeInOut", delay: 0.2 },
              },
              hidden: {
                opacity: 0,
                y: 50,
              },
            }}
          />
          <motion.div
            className="about-details"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeInOut", delay: 0.4 },
              },
              hidden: {
                opacity: 0,
                y: 50,
              },
            }}
          >
            <h3>Web Developer & Editing Video</h3>
            <p>
              Saya memiliki pengalaman yang luas dalam pengembangan web
              menggunakan berbagai teknologi modern serta keahlian dalam
              mengedit video untuk berbagai keperluan. Saya sangat teliti,
              kreatif, dan selalu berusaha untuk memberikan hasil yang melebihi
              ekspektasi. Saya percaya bahwa kombinasi antara keterampilan
              teknis dan estetika visual adalah kunci untuk menghasilkan karya
              yang luar biasa.
            </p>
            <div className="info">
              <div>
                <strong>Phone:</strong> +62 813 1234 3829
              </div>
              <div>
                <strong>Email:</strong> zollaperdana29@gmail.com
              </div>
              <div>
                <strong>City:</strong> Jakarta, Indonesia
              </div>
            </div>
            <p>
              Di waktu luang, saya melakukan memikirkan ide ngoding ataupun
              editing video lalu membuatnya sebagai mini project. Saya selalu
              bersemangat untuk belajar hal baru dan mengembangkan kemampuan
              saya lebih jauh. Saya percaya bahwa semangat untuk terus belajar
              dan beradaptasi adalah kunci kesuksesan dalam dunia teknologi yang
              terus berkembang.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
