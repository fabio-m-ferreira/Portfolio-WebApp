import React from "react";
import styles from "./about.module.css";
import Button from "@components/button/Button";
import { FaCode } from "react-icons/fa6";
import { BsBriefcaseFill } from "react-icons/bs";
import Skills from "@sections/skills/Skills";

const About = () => {
  return (
    <section id="about">
      <h5 data-aos="fade-up">About Me</h5>
      <h2 data-aos="fade-up" data-aos-delay="50">
        My Skillset
      </h2>

      <div className="container">
        <div className={styles.aboutMeContainer}>
          <div className={styles.aosWrapper} data-aos="fade-up">
            <div className={styles.card}>
              <div className={styles.experience}>
                <BsBriefcaseFill />
                <p>4+ years working</p>
              </div>
              <div className={styles.separator}></div>
              <div className={styles.experience}>
                <FaCode />
                <p>6+ years coding</p>
              </div>
            </div>
          </div>

          <div
            className={styles.aboutMe}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p>
              I&apos;m a <span>Frontend Developer</span> with over 4 years of
              professional experience and 6+ years of coding expertise, skilled
              in both <span>UX/UI design</span> and{" "}
              <span>Fullstack development</span>. With a foundation in design
              and a career in cybersecurity, I deliver web solutions that
              combine aesthetics, functionality, and resilience.
            </p>
            <div className={styles.buttonGroup}>
              <Button text="Explore my Journey" href="/#career" />
              <Button
                text="Let's Talk"
                variant="tertiary"
                href="mailto:me@fabiof.dev"
              />
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
