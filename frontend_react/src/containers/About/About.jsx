import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import { client, urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { FaWhatsapp } from "react-icons/fa";

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
              First, solve them <span>problem.</span>
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
                  <p className="p-text" //dangerouslySetInnerHTML={{ __html: aboutMe.description }} 
                  > Hi! I'm <span>Gopesh</span> - a Java virtuoso with a distinct <span>backend development</span> inclination. Beyond the conventional realm of developers, I embody an <span>result-focused</span> architect, meticulously constructing <span>efficient backend systems</span>, unraveling complicated problems reminiscent of enigmatic puzzles, and collaborating with <span>front-end collaborators</span>. From the meticulous calibration of <span>APIs</span> to the orchestration of intricate <span>database systems</span>, I am driven by the art of optimizing the intricate ballet of technology. In <span>pursuit of a role</span> that seamlessly blend my technical skills with a nuanced touch of whimsy, for I believe innovation and precision are inextricably intertwined. <span>Let's code, conquer, and giggle through the digital realm!</span></p>
            <div>
            <button className="portfolio-button" onClick={viewResumeHandler}><span>Resume</span></button>
            <a className="portfolio-button" href="https://www.linkedin.com/in/gopeshkumarpathak" target="_blank" rel="noopener noreferrer"><span>Linkedin</span></a>             
            <a className="portfolio-button" href="https://www.github.com/gopesh-code" target="_blank" rel="noopener noreferrer"><span>Github</span></a>
            <a className="portfolio-button" href="https://wa.me/919719951595" target="_blank" rel="noopener noreferrer"><span>Say Hi on <FaWhatsapp /></span></a>
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
