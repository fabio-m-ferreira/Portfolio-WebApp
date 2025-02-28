import React from "react";
import styles from "./landingPage.module.css";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { BsGithub, BsLinkedin, BsMedium } from "react-icons/bs";
import Link from "next/link";
import Button from "@/components/button/Button";
import Logo from "./Logo";

const LandingPage = () => {
  return (
    <div id="home" className={styles.landingPage}>
      <div className={`container ${styles.landingPageContainer}`}>
        <Logo />
        <div className={styles.title}>
          <h1 data-aos="fade-up" data-aos-delay="2000">
            Fábio Ferreira
          </h1>
          <h3
            data-aos="fade-up"
            data-aos-delay="2100"
            className={styles.subTitle}
          >
            Frontend Developer
          </h3>
        </div>
        <div className={styles.personalInfo}>
          <div
            className={styles.location}
            data-aos="fade-up"
            data-aos-delay="2200"
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
              data-aos-delay="2300"
            >
              <BsLinkedin />
            </Link>
            <Link
              href="https://github.com/fabio-m-ferreira"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
              data-aos="fade-up"
              data-aos-delay="2350"
            >
              <BsGithub />
            </Link>
             <Link
              href="https://medium.com/@fabio.f.dev"
              target="_blank"
              rel="noreferrer"
              aria-label="Medium"
              data-aos="fade-up"
              data-aos-delay="2350"
            >
              <BsMedium />
            </Link>
            <a
              aria-label="Email"
              data-aos="fade-up"
              data-aos-delay="2400"
              href="mailto:me@fabiof.dev"
              rel="noreferrer"
            >
              <FaEnvelope />
            </a>
          </div>
          <div data-aos="fade-up" data-aos-delay="2400">
            <Button
              text="Download CV"
              target="_blank"
              variant="tertiary"
              href="/assets/Fabio-Ferreira_CV.pdf"
            />
          </div>
        </div>

        <div className="scroll-down-animation">
          <span className="mouse" data-aos="fade-up" data-aos-delay="2450">
            <span className="move"></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
