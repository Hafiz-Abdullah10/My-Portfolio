import React from 'react';
import './Footer.css';
import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg';
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      viewport={{ once: true }}
    className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>Open to MERN Stack Developer opportunities — let's connect!</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Hafiz Abdullah — MERN Stack Developer. All rights reserved
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with Me</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
