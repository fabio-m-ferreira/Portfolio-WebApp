import React from "react";
import styles from "./about.module.css";
import { FaAward } from "react-icons/fa";
import Button from "@components/button/Button";
import Experience from "../experience/Experience";

const About = () => {
  console.log(styles);
  return (
    <section id="about">
      <h5 data-aos="fade-up">About Me</h5>
      <h2 data-aos="fade-up">My Experience</h2>

      <div className="container">
        <div className={styles.content}>
          <div className={styles.cards}>
            <div className="aos-wrapper" data-aos="fade-up">
              <div className={styles.card}>
                <FaAward className={styles.expIcon} />
                <h5>Experience</h5>
                <div className={styles.experience}>
                  <small>1 Year working</small>
                  <small>3+ Years coding</small>
                </div>
              </div>
            </div>

            <div
              className={styles.aboutMe}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p>
                I&apos;m a Junior Full-stack Developer capable of developing
                responsive websites in a complete way, both on the Front-end and
                Back-end, with good design notions and always willing to learn
                more. Plus a one year of professional experience with HTML/CSS
                and Javascript.
              </p>
              <div className={styles.buttonGroup}>
                <Button
                  text="Download CV"
                  href="/assets/Fabio_Ferreira_CV.pdf"
                />
                <Button text="Let's Talk" variant="secondary" href="#contact" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Experience />
    </section>
  );
};

export default About;
