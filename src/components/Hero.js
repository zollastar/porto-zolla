import React, { useState, useEffect } from 'react';

const Hero = () => {
  const texts = [' Software Engineer', ' Web Developer', ' Content Creator'];
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let typingTimeout;

    if (isDeleting) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(texts[loopNum].substring(0, displayedText.length - 1));
        setTypingSpeed(50);
      }, typingSpeed);
    } else {
      typingTimeout = setTimeout(() => {
        setDisplayedText(texts[loopNum].substring(0, displayedText.length + 1));
        setTypingSpeed(150);
      }, typingSpeed);
    }

    if (!isDeleting && displayedText === texts[loopNum]) {
      setTypingSpeed(500);
      setIsDeleting(true);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setLoopNum((loopNum + 1) % texts.length);
      setTypingSpeed(150);
    }

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, loopNum, texts, typingSpeed]);

  return (
    <section className="hero" id="home">
      <img
        src={`${process.env.PUBLIC_URL}/img/hero-bg.png`}
        alt="Hero Background"
      />
      <div className="container">
        <h2>Zolla Perdana Putra Harahap</h2>
        <p>I'm<span className="typed-container">{displayedText}</span>
          <span className="blinking-cursor">|</span></p>
        <div className="social-links">

        </div>
      </div>
    </section>
  );
};

export default Hero;
