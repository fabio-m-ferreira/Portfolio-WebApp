import React from "react";
import styles from "./portfolio.module.css";
import Image from "next/image";
import portfolioData from "@data/portfolioData";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 data-aos="fade-up">My Recent Work</h5>
      <h2 data-aos="fade-up" data-aos-delay="50">
        My Projects
      </h2>

      <div className={[styles.portfolioContainer, "container"].join(" ")}>
        {portfolioData.map(
          (
            { id, image, title, subtitle, techStack, sourceButton, demoButton },
            index
          ) => (
            <div
              data-aos="fade-up"
              data-aos-delay={`${(index % 2) * 50}`}
              key={id}
              className={styles.portfolioItem}
            >
              <div className={styles.projectImage}>
                <Image
                  src={image}
                  alt={title}
                  style={{ width: "100%", height: "auto" }}
                  sizes="100vw"
                  width={500}
                  height={300}
                />
              </div>
              <div className={styles.projectInfo}>
                <div className={styles.projectContent}>
                  <div className={styles.projectDescription}>
                    <div>
                      <h4>{title}</h4>
                      <p>{subtitle}</p>
                    </div>
                    <div className={styles.techStack}>
                      {techStack.map((tech, index) => {
                        return (
                          <div className={styles.tech} key={index}>
                            {tech}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className={styles.projectButtons}>
                    {sourceButton}
                    {demoButton}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Portfolio;
