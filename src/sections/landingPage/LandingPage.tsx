import React from "react";
import styles from "./landingPage.module.css";

const LandingPage = () => {
  return (
    <div id="home" className={styles.landingPage}>
      <div className={`container ${styles.landingPageContainer}`}>
        <h5 data-aos="fade-up">Hello I&apos;m</h5>
        <h1 data-aos="fade-up" data-aos-delay="100">
          Fábio Ferreira
        </h1>
        <h5 data-aos="fade-up" data-aos-delay="200" className={styles.subTitle}>
          Fullstack Developer
        </h5>

        <div className={styles.scrollDown}>
          <span className={styles.mouse} data-aos="fade-up">
            <span className={styles.move}></span>
          </span>
          <h5
            data-aos="fade-up"
            data-aos-delay="100"
            className={styles.scrollDownText}
          >
            Scroll down
          </h5>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
