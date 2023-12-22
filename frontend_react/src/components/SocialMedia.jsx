import React from "react";

import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/gopeshkumarpathak"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://www.github.com/gopesh-code"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <FaGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/dontgopesh"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <BsInstagram />
        </a>
      </div>
      <div>
        <a
          href=" https://wa.me/919719951595"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
