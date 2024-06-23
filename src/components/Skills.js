import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useCountTo from "../hooks/useCountTo";

const skills = {
  "Frontend Development": [
    { name: "HTML", percentage: 97 },
    { name: "CSS", percentage: 94 },
    { name: "JavaScript", percentage: 86 },
    { name: "React", percentage: 85 },
  ],
  "Backend Development": [
    { name: "Java", percentage: 93 },
    { name: "PostgreSQL", percentage: 96 },
    { name: "MySQL", percentage: 86 },
    { name: "Python", percentage: 87 },
  ],
  Multimedia: [
    { name: "Premiere Pro", percentage: 95 },
    { name: "After Effects", percentage: 92 },
    { name: "Davinci Resolve", percentage: 87 },
    { name: "Photoshop", percentage: 80 },
    { name: "Figma", percentage: 70 },
  ],
  "Game Development": [
    { name: "Scratch", percentage: 89 },
    { name: "RPG Maker", percentage: 96 },
  ],
};

const Skill = ({ name, percentage, isVisible }) => {
  const count = useCountTo(isVisible ? percentage : 0);
  return (
    <div className="skill">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{count}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-progress"
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${percentage}%` : 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        ></motion.div>
      </div>
    </div>
  );
};

const Skills = () => {
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
    <section className="skills-section" id="skills" ref={ref}>
      <motion.div
        className="skills-container"
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <h2>Skills</h2>
        <p>
          Saya memiliki berbagai keterampilan dalam bidang pengembangan web,
          manajemen basis data, editing video, dan desain grafis. Berikut adalah
          beberapa keterampilan utama saya:
        </p>
        <div className="skills-grid">
          {Object.keys(skills).map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              initial="hidden"
              animate={controls}
              variants={variants}
            >
              <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              {skills[category].map((skill, index) => (
                <Skill key={index} name={skill.name} percentage={skill.percentage} isVisible={inView} />
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;