import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import '../styles/components/socialnetwork.sass';

function SocialNetworks() {
  return (
    <section id="social-networks">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/eucindyn/"
        className="social-btn"
        id="linkedin"
        key="linkedin"
      >
        <FaLinkedinIn />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/eucindyn"
        className="social-btn"
        id="github"
        key="github"
      >
        <FaGithub />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/mcindyn_"
        className="social-btn"
        id="instagram"
        key="instagram"
      >
        <FaInstagram />
      </a>
    </section>
  );
}

export default SocialNetworks;