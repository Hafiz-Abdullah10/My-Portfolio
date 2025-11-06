import React from 'react';
import './Hero.css';
import profile_pic from '../../assets/profile_pic.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
import resume from '../../assets/resume.pdf'

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_pic} alt="" />
      <h1>
        <span>I am Hafiz Abdullah Jamil.</span> MERN Stack Developer
      </h1>
      <p>
        Hi, I'm Hafiz Abdullah, a MERN Stack developer focused on creating fast,
        interactive, and scalable web applications. I'm enthusiastic about
        learning modern technologies and contributing to innovative development
        teams.
      </p>
      <div className="hero-action">
      <div className="hero-connect">
        {/* ✅ WhatsApp link — replace number below */}
        <a
          href="https://wa.me/923070118330"
          target="_blank"
          rel="noopener noreferrer"
          className="anchor-link"
        >
          Connect with Me
        </a>
      </div>
    

      <div className="hero-resume">
        <a href={resume} download='Hafiz Abdullah CV-MERN Stack Developer'>Download CV</a>
      </div>
</div>
    </div>
  );
};

export default Hero;