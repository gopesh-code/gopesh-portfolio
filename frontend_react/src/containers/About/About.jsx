// about.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

import { images } from "../../constants";
import { client, urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { CoolMode } from "./cool-mode";

export function CoolModeDemo() {
  return (
    <div className="portfolio-button">
      <CoolMode>
          <a
              className="portfolio-button"
              href="https://www.github.com/gopesh-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Github</span>
            </a>
      </CoolMode>
    </div>
  );
}

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [aboutMe, setAboutMe] = useState({});

  useEffect(() => {
    const aboutsQuery = '*[_type == "abouts"]';
    const aboutMeQuery = `*[_type == "aboutme"][0]{
      profileImg,
      description,
      "resumeUrl": resume.asset -> url 
    }`;
    client.fetch(aboutsQuery).then((data) => {
      setAbouts(data);
    });
    client.fetch(aboutMeQuery).then((data) => {
      setAboutMe(data);
    });
  }, []);

  const viewResumeHandler = () => {
    window.open(aboutMe.resumeUrl, "_blank");
  };

  return (
    <>
      <h2 className="head-text">
        First, solve the <span>problem.</span>
        <br />
        Then write the <span>code.</span>
      </h2>

      <div className="app__about-context app__flex">
        <div className="app__about-img app__flex">
          <div className="app__flex">
            <img
              src={
                aboutMe.profileImg
                  ? urlFor(aboutMe.profileImg)
                  : images.aboutmine
              }
              alt="Profile"
            />
          </div>
        </div>
        <div className="app__about-data app__flex">
          <h2 className="head-text">About Me</h2>
          <div><p className="p-text">
          Hi! I'm <span>Gopesh</span> – a passionate <span>Java backend developer</span> with a knack for building <span>efficient, scalable systems</span>. I specialize in architecting robust <span>APIs</span> and orchestrating seamless <span>database integrations</span>, tackling complex problems with precision and creativity.
          With a strong foundation in <span>backend development</span>, I thrive on <span>collaboration</span>, ensuring my systems integrate flawlessly with <span>front-end teams</span>. Whether it’s optimizing performance, debugging intricate workflows, or crafting solutions that drive results, I bring a blend of technical expertise and problem-solving finesse.
          I’m on the lookout for a role that challenges me to innovate and deliver impactful solutions. <span>Let’s build, optimize, and transform ideas into reality!</span>
          </p></div>
          <div>
            <button className="portfolio-button" onClick={viewResumeHandler}>
              <span>Resume</span>
            </button>
            <a
              className="portfolio-button"
              href="https://gopesh-code.github.io/Beyond-the-Byte/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Blog</span>
            </a>
            <a
              className="portfolio-button"
              href="https://www.linkedin.com/in/gopeshkumarpathak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Linkedin</span>
            </a>
            <a
              className="portfolio-button"
              href="https://www.github.com/gopesh-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Github</span>
            </a>
            <a
              className="portfolio-button"
              href="https://wa.me/919719951595"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Say Hi on <FaWhatsapp /></span>
            </a>
          </div>
        </div>
      </div>

      

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.2, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: "20px" }}>
              {about.title}
            </h2>
            <h2 className="p-text" style={{ marginTop: "10px" }}>
              {about.description}
            </h2>
          </motion.div>
        ))}
      </div>
    </>
  );
};


export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
