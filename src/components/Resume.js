import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Resume = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
    <section id="resume" className="resume section py-10 bg-white" ref={ref}>
      <motion.div
        className="resume-container mx-auto px-7"
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <div className="section-title" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-7 relative after:content-[''] after:w-12 after:h-3px after:bg-blue-500 after:absolute after:left-0 after:-bottom-3">
            Resume
          </h2>
          <p className="text-base mb-10 text-gray-500">
            Saya adalah mahasiswa Teknologi Rekayasa Perangkat Lunak di IPB
            University dengan berbagai pengalaman dalam pengembangan perangkat
            lunak, desain, dan editing video. Melalui pendidikan dan berbagai
            pengalaman organisasi serta proyek profesional, saya telah mengasah
            keterampilan dan pengetahuan yang diperlukan untuk berhasil di
            bidang teknologi informasi.
          </p>
        </div>

        <div className="flex flex-wrap mt-8">
          <div className="w-full lg:w-1/2 px-4" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Education</h3>
            <div className="resume-item pb-0">
              <h4> Software Engineering </h4>
              <h5>2023 - sekarang</h5>
              <p>
                <em>Sekolah Vokasi IPB University</em>
              </p>
            </div>
            <div className="resume-item pb-0">
              <h4> Jurusan MIPA </h4>
              <h5>2020 - 2023</h5>
              <p>
                <em> SMA Negeri 35 Jakarta</em>
              </p>
            </div>
            <h3 className="resume-title">Organization Experience</h3>
            <div className="resume-item">
              <h4>Micro IT</h4>
              <h5>2023 - 2024</h5>
              <ul>
                <li>
                  Berperan aktif dalam mendukung berbagai kegiatan dan acara
                  Micro IT
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Ketua Divisi DDB (BEM SV - Biro Prestasi)</h4>
              <h5>2023 - 2024</h5>
              <ul>
                <li>Menjalankan semua program kerja sesuai yang disepakati </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>IT Fest</h4>
              <h5>2024</h5>
              <ul>
                <li>
                  Sebagai panitia IT Fest sekaligus Wakil Ketua Divisi Desain,
                  Humas, Promosi
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>OMI Divisi Multimedia</h4>
              <h5>2024</h5>
              <ul>
                <li>
                  Sebagai panitia Olimpiade Mahasiswa IPB
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Edudaytrich</h4>
              <h5>2024</h5>
              <ul>
                <li>
                  Menjadi panitia aktif dan kontributif dalam divisi danspor
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-4" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Project Membuat Website Company Profile</h4>
              <h5>2024</h5>
              <ul>
                <li>Sebagai Fullstack</li>
                <li>
                  Membuat frontend, backend, serta DBMS menggunakan HTML, JS,
                  Bootstrap, Java, PgAdmin, Spring Boot dan Thymleaf
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Project Membuat Aplikasi Sistem Antrian Rumah Sakit</h4>
              <h5>2024</h5>
              <ul>
                <li>
                  Sebagai Membuat GUI, dan logika system menggunakan Python
                </li>
                <li>Membuat sistem antrian rumah sakit agar lebih effisien</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4> Project Pembuatan Game RPG</h4>
              <h5>2023</h5>
              <ul>
                <li>Sebagai Produser</li>
                <li>
                  Membuat Map, Jalan Cerita, Desain, Pengkodean, Alur, dan
                  koordinasi Tim
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4> Project Multimedia “Motion Graphics” dan “ Powerpoint</h4>
              <h5>2023</h5>
              <ul>
                <li>Sebagai Creative Director</li>
                <li>
                  Mengembangkan ide kreatif, mengarahkan tim kreatif, mengelola
                  proyek
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
