import React from "react";
import { BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

import "./Footer.scss";
const Footer = () => {
  const parentVariant = {
    view: {
      opacity: [0, 1],
      transition: {
        duration: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const childSocialVariant = {
    view: {
      y: [-300, 0],
      opacity: [0, 1],
      transition: {
        opacity: {
          duration: 0.6,
        },
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  const childCopyVariant = {
    view: {
      y: [-100, 0],
      opacity: [0, 1],
      transition: {
        opacity: {
          duration: 0.6,
        },
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="app__flex app__footer">
      <motion.div
        className="app__footer-contacts app__flex"
        variants={parentVariant}
        whileInView="view"
      >
        <motion.div
          className="app__flex"
          variants={childSocialVariant}
          whileInView="view"
        >
          <a
            href="https://www.linkedin.com/in/gopeshkumarpathak"
            target="_blank"
            rel="noreferrer"
            className="app__flex"
          >
            <GrLinkedinOption />
          </a>
        </motion.div>
        <motion.div
          className="app__flex"
          variants={childSocialVariant}
          whileInView="view"
        >
          <a
            href="https://www.github.com/gopesh-code"
            target="_blank"
            rel="noreferrer"
            className="app__flex"
          >
            <FaGithub />
          </a>
        </motion.div>
        <motion.div
          className="app__flex"
          variants={childSocialVariant}
          whileInView="view"
        >
          <a
            href="https://www.instagram.com/dontgopesh"
            target="_blank"
            rel="noreferrer"
            className="app__flex"
          >
            <BsInstagram />
          </a>
        </motion.div>
        <motion.div
            className="app__flex"
            variants={childSocialVariant}
            whileInView="view"
        >
           <a
             href="https://wa.me/919719951595"
             target="_blank"
             rel="noreferrer"
             className="app__flex"
           >
             <FaWhatsapp />
           </a>
        </motion.div>
      </motion.div>
      <motion.div
        className="app__footer-copyrights"
        variants={parentVariant}
        whileInView="view"
      >
        <motion.p
          className="p-text"
          variants={childCopyVariant}
          whileInView="view"
        >
          &copy; 2024 - 2025 Gopesh
        </motion.p>
        <motion.p
          className="p-text"
          variants={childCopyVariant}
          whileInView="view"
        >
          ALL RIGHTS RESERVED
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Footer;
