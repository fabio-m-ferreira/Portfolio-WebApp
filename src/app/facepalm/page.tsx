//import styles from "./page.module.css";
import React from "react";
import styles from "./facepalm.module.css";
import FacepalmLogo from "@static/assets/facepalm_logo.png";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import facepalmPageData from "@data/facepalmPageData";
import Button from "@/components/button/Button";

const FacepalmApp = () => {
  return (
    <section className={styles.facepalmProject}>
      <div className={styles.header}>
        <Image
          src={FacepalmLogo}
          alt="Facepalm Logo"
          data-aos="fade-up"
          width={160}
          height={160}
        />
        <h3 data-aos="fade-up" data-aos-delay="100">
          Academic Project - Facepalm
        </h3>
        <h2 data-aos="fade-up" data-aos-delay="200">
          Social Media App
        </h2>
        <div className={styles.projectIconsContainer}>
          <FaReact
            className={styles.projectIcon}
            data-aos="fade-up"
            data-aos-delay="300"
          />
          <SiFirebase
            className={styles.projectIcon}
            data-aos="fade-up"
            data-aos-delay="350"
          />
        </div>
        <h3 data-aos="fade-up" data-aos-delay="400">
          Built for Android
        </h3>
        <Button
          data-aos="fade-up"
          data-aos-delay="550"
          text="Github"
          href="https://github.com/fabio-m-ferreira/Facepalm"
          target="_blank"
        />

        <div className="scroll-down-animation">
          <span className="mouse" data-aos="fade-up">
            <span className="move"></span>
          </span>
          <h5
            data-aos="fade-up"
            data-aos-delay="100"
            className="scroll-down-text"
          >
            Scroll down
          </h5>
        </div>
      </div>

      <div>
        {facepalmPageData.map(({ id, image, title, description }) => {
          return (
            <div key={id} className={styles.projectItem}>
              <div className={styles.projectDescription} data-aos="fade-up">
                <div>
                  <h2>{title}</h2>
                  {description}
                </div>
              </div>
              <div className={styles.projectImage} data-aos="fade-up">
                <Image src={image} alt={title} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FacepalmApp;
