"use client";
import React, { useState } from "react";
import styles from "./career.module.css";

import Work from "./Work";

const Career = () => {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");

  const handleTabClick = (tab: "work" | "education") => {
    setActiveTab(tab);
  };

  return (
    <section id="career">
      <h5 data-aos="fade-up">My Path</h5>
      <h2 data-aos="fade-up" data-aos-delay="50">
        My Experience
      </h2>

      <div data-aos="fade-up" className={`container   ${styles.career} `}>
        <div className={styles.careerTabs}>
          <div
            className={`${styles.tab} ${
              activeTab === "work" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabClick("work")}
          >
            Work
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === "education" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabClick("education")}
          >
            Education
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className={`container ${styles.tabContent}`}>
        {activeTab === "work" && <Work />}

        {activeTab === "education" && <></>}
      </div>
    </section>
  );
};

export default Career;
