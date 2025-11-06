import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_pic from '../../assets/profile_pic.jpeg';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_pic} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a passionate and motivated MERN Stack Developer with a strong
              foundation in MongoDB, Express.js, React.js, and Node.js. As a
              fresher, I have built beginner-level projects that showcase my
              skills in developing responsive, user-friendly, and efficient web
              applications
            </p>
            <p>
              I have a good command of HTML, CSS, JavaScript, and modern
              frameworks, with a keen interest in writing clean, maintainable
              code. Eager to learn, adapt, and grow in a professional
              environment while contributing effectively to team projects.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML</p>
              <hr style={{ width: '70%' }} />
            </div>
            <div className="about-skill">
              <p>CSS</p>
              <hr style={{ width: '60%' }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: '60%' }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: '40%' }} />
            </div>
            <div className="about-skill">
              <p>Express JS</p>
              <hr style={{ width: '40%' }} />
            </div>
            <div className="about-skill">
              <p>Mongo DB</p>
              <hr style={{ width: '30%' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Basic Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>1</h1>
          <p>4 Months Internship</p>
        </div>
      </div>
    </div>
  );
};

export default About;