import React from "react";
import styles from "./landingPage.module.css";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import Button from "@/components/button/Button";

const LandingPage = () => {
  return (
    <div id="home" className={styles.landingPage}>
      <div className={`container ${styles.landingPageContainer}`}>
        <div className={styles.title}>
          <h1 data-aos="fade-up">Fábio Ferreira</h1>
          <h3
            data-aos="fade-up"
            data-aos-delay="100"
            className={styles.subTitle}
          >
            Frontend Developer
          </h3>
        </div>
        <div className={styles.personalInfo}>
          <div
            className={styles.location}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaLocationDot /> <h5>Santarém, Portugal</h5>
          </div>

          <div className={styles.socials}>
            <Link
              href="https://www.linkedin.com/in/fabio-m-ferreira/"
              target="_blank"
              rel="noreferrer"
              aria-label="Linkedin"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <BsLinkedin />
            </Link>
            <Link
              href="https://github.com/fabio-m-ferreira"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              <BsGithub />
            </Link>

            <a
              aria-label="Email"
              data-aos="fade-up"
              data-aos-delay="400"
              href="mailto:me@fabio-ferreira.dev"
              rel="noreferrer"
            >
              <FaEnvelope />
            </a>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <Button
              text="Download CV"
              target="_blank"
              variant="tertiary"
              href="/assets/Fabio-Ferreira_CV.pdf"
            />
          </div>
        </div>

        <div className="scroll-down-animation">
          <span className="mouse" data-aos="fade-up">
            <span className="move"></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
