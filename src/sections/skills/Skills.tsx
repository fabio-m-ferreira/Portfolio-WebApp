import styles from "./skills.module.css";
import Image from "next/image";
import skillsData from "@data/skillsData";

const Skills = () => {
  return (
    <section id="skills" className="container">
      <div className={styles.skillsContainer}>
        {skillsData.map(({ icon, title, subTitle }, index) => {
          return (
            <div
              key={title}
              data-aos="fade-up"
              data-aos-delay={`${(index % 4) * 50}`}
              className={styles.aosWrapper}
            >
              <div className={styles.tech}>
                <Image
                  className={styles.icon}
                  src={icon}
                  alt={title}
                  width={300}
                  height={300}
                />

                <div className={styles.techName}>
                  <h4>{title}</h4>
                  <p>{subTitle}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
