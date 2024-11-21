import React from "react";
import Link from "next/link";
import styles from "./footer.module.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="#home" className={styles.footerLogo}>
        Fábio Ferreira
      </a>

      <ul className={styles.permalinks}>
        <li>
          <Link href="/#home">Home</Link>
        </li>
        <li>
          <Link href="/#about">About</Link>
        </li>
        <li>
          <Link href="/#portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>

      <div className={styles.socials}>
        <a
          href="https://www.linkedin.com/in/fabio--ferreira/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/fabio-m-ferreira"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>

      <div className={styles.copyright}>
        <p>Website Developed by Fábio Ferreira.</p>
        <a href="https://www.freepik.com/aleksandr-samochernyi">
          {" "}
          Portfolio Section Websites mockups designed by aleksandr_samochernyi -
          Freepik
        </a>
      </div>
    </footer>
  );
};

export default Footer;
