import React from "react";
import styles from "./experience.module.css";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiPhp, SiMysql, SiFirebase } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={`container ${styles.expContainer}`}>
        {/* Frontend Experience */}
        <div className="aos-wrapper" data-aos="fade-up">
          <div className={styles.techContainer}>
            <h3>Front-end Development</h3>
            <div className={styles.content}>
              {/* Frontend Experience 1 */}
              <article className={styles.tech}>
                <FaHtml5 className={styles.techIcons} />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              {/* Frontend Experience 2 */}
              <article className={styles.tech}>
                <FaCss3Alt className={styles.techIcons} />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              {/* Frontend Experience 3 */}
              <article className={styles.tech}>
                <IoLogoJavascript className={styles.techIcons} />
                <div>
                  <h4>Javascript</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              {/* Frontend Experience 4 */}
              <article className={styles.tech}>
                <FaReact className={styles.techIcons} />
                <div>
                  <h4>React</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>
        </div>
        {/*End of Frontend Experience*/}
        {/* Backend Experience */}
        <div className="aos-wrapper" data-aos="fade-up" data-aos-delay="100">
          <div className={styles.techContainer}>
            <h3>Back-end Development</h3>
            <div className={styles.content}>
              {/* Backend Experience 1 */}
              <article className={styles.tech}>
                <FaNodeJs className={styles.techIcons} />
                <div>
                  <h4>Node Js</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              {/* Backend Experience 2 */}
              <article className={styles.tech}>
                <SiPhp className={styles.techIcons} />
                <div>
                  <h4>PHP</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              {/* Backend Experience 3 */}
              <article className={styles.tech}>
                <SiMysql className={styles.techIcons} />
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              {/* Backend Experience 4 */}
              <article className={styles.tech}>
                <SiFirebase className={styles.techIcons} />
                <div>
                  <h4>Firebase</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
          </div>
        </div>
        {/*End of Backend Experience*/}
      </div>
    </section>
  );
};

export default Experience;
