import React from "react";
import styles from "./about.module.css";
import Button from "@components/button/Button";
import { FaCode } from "react-icons/fa6";
import { BsBriefcaseFill } from "react-icons/bs";
import Skills from "@sections/skills/Skils";

const About = () => {
  return (
    <section id="about">
      <h5 data-aos="fade-up">About Me</h5>
      <h2 data-aos="fade-up">My Experience</h2>

      <div className="container">
        <div className={styles.content}>
          <div className={styles.cards}>
            <div className={styles.aosWrapper} data-aos="fade-up">
              <div className={styles.card}>
                <BsBriefcaseFill />
                <p>4+ years working</p>
                <div className={styles.separator}></div>
                <FaCode />
                <p>6+ years coding</p>
              </div>
            </div>

            <div
              className={styles.aboutMe}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p>
                I&apos;m a Fullstack Developer specializing in Frontend
                development. Guided by a foundation in <span>design</span> and a
                career in <span>cybersecurity</span>, I create web solutions
                that prioritize both aesthetics and security.
              </p>
              <div className={styles.buttonGroup}>
                <Button
                  text="Explore my Journey"
                  target="_blank"
                  href="/assets/Fabio-Ferreira_CV.pdf"
                />
                <Button
                  text="My Projects"
                  variant="secondary"
                  href="#contact"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h5 className={styles.technicalSkills} data-aos="fade-up">
        Technical Skills
      </h5>
      <Skills />
    </section>
  );
};

export default About;
