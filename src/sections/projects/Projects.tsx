import React from "react";
import styles from "./projects.module.css";
import Image from "next/image";
import projectsData from "@data/projectsData";

const Projects = () => {
  return (
    <section id="projects">
      <h5 data-aos="fade-up">My Recent Work</h5>
      <h2 data-aos="fade-up" data-aos-delay="50">
        My Projects
      </h2>

      <div className={[styles.projectsContainer, "container"].join(" ")}>
        {projectsData.map(
          (
            { id, image, title, subtitle, techStack, sourceButton, demoButton },
            index
          ) => (
            <div
              data-aos="fade-up"
              data-aos-delay={`${(index % 2) * 50}`}
              key={id}
              className={styles.projectsItem}
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

export default Projects;
