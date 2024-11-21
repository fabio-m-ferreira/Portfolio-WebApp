import React from "react";
import styles from "./portfolio.module.css";
import Image from "next/image";
import portfolioData from "./porfolioData";

let aosDelayIndex = -1;

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className={`container ${styles.portfolioContainer}`}>
        {portfolioData.map(({ id, image, title, sourceButton, demoButton }) => {
          aosDelayIndex++;

          return (
            <div
              key={id}
              className="aos-wrapper"
              data-aos="fade-up"
              data-aos-delay={aosDelayIndex * 50}
            >
              <article className={styles.portfolioItem}>
                <div className={styles.itemImage}>
                  <Image
                    src={image}
                    fill
                    alt={title}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className={styles.content}>
                  <h3>{title}</h3>
                  <div className={styles.buttonGroup}>
                    {sourceButton}
                    {demoButton}
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
