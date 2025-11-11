import React from 'react';
import './Hero.css';
import profile_pic from '../../assets/profile_pic.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
import resume from '../../assets/resume.pdf';
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div
      id="home" className="hero">
      <motion.img
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: true }}
        src={profile_pic} alt="" />
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}>
        <span>I am Hafiz Abdullah Jamil.</span> MERN Stack Developer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}>
        Hi, I'm Hafiz Abdullah, a MERN Stack developer focused on creating fast,
        interactive, and scalable web applications. I'm enthusiastic about
        learning modern technologies and contributing to innovative development
        teams.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 1.5 }}
        viewport={{ once: true }}
        className="hero-action">
        <div className="hero-connect">
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
      </motion.div>
    </div>
  );
};

export default Hero;