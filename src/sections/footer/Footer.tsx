import React from "react";
import styles from "./footer.module.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="#home" className={styles.footerLogo}>
        Fábio Ferreira
      </a>

      <div className={styles.socials}>
        <a
          href="https://www.linkedin.com/in/fabio-m-ferreira/"
          target="_blank"
          rel="noreferrer"
          aria-label="linkedin"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/fabio-m-ferreira"
          target="_blank"
          rel="noreferrer"
          aria-label="github"
        >
          <BsGithub />
        </a>

        <a
          href="mailto:me@fabiof.dev"
          target="_blank"
          rel="noreferrer"
          aria-label="github"
        >
          <FaEnvelope />
        </a>
      </div>

      <div className={styles.copyright}>
        <a href="https://www.freepik.com/aleksandr-samochernyi" target="_blank">
          {" "}
          Mockups for some projects were designed by aleksandr_samochernyi -
          Freepik
        </a>
        <p>© 2024 | All rights reserved | Fábio Ferreira</p>
      </div>
    </footer>
  );
};

export default Footer;
