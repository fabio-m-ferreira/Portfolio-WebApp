import React from "react";
import styles from "./timelineItem.module.css";
import TimelineItem from "./TimelineItem";

const Career = () => {
  return (
    <>
      <TimelineItem
        title="Fullstack developer | Security consultant"
        altTitle="Layer8"
        subtitle="Lisbon, Portugal"
        date="Aug 2022 - Present"
        horizontalLogo="/assets/career/layer8_logo.png"
      >
        <>
          <h5>As a Front-End Developer:</h5>

          <ul className={styles.bulletList}>
            <li className={styles.bulletPoint}>
              Lead developer for the company’s component library, ensuring
              consistency and scalability across all projects.
            </li>
            <li className={styles.bulletPoint}>
              Lead developer for a cloud management project that centralizes the
              company’s services, integrating features like user management and
              service management.
            </li>
            <li className={styles.bulletPoint}>
              Contributed significantly to redesigning and restructuring
              projects to align with the new design guidelines and component
              library, enabling better adoption across all platforms.
            </li>
            <li className={styles.bulletPoint}>
              Contributed to diverse initiatives, including developing a Windows
              application with Electron and building the company’s documentation
              wiki for internal and public knowledge sharing.
            </li>
          </ul>
          <div className={styles.tech}></div>
        </>
      </TimelineItem>

      <TimelineItem
        title="Freelancer"
        altTitle="Gestix"
        subtitle="Santarém, Portugal"
        date="Dez 2021 - Present"
      >
        <>
          <ul className={styles.bulletList}>
            <li className={styles.bulletPoint}>Lead developer</li>

            <li className={styles.bulletPoint}>
              Redesigned existing websites to improve usability, aesthetics, and
              performance, creating a stronger online presence for clients.
            </li>
            <li className={styles.bulletPoint}>
              Created unique, professional logos that reflected clients&apos;
              branding and identity.
            </li>

            <li className={styles.bulletPoint}>
              Delivered various creative solutions, including graphic design and
              multimedia projects, ensuring a cohesive and polished result for
              every task.
            </li>
          </ul>
          <div className={styles.tech}></div>
        </>
      </TimelineItem>

      <TimelineItem
        title="Frontend developer | Progammer assistant"
        altTitle="Gestix"
        subtitle="Santarém, Portugal"
        date="Jan 2021 - Nov 2021"
        horizontalLogo="/assets/career/gestix-white.png"
      >
        <>
          <h5>As a Front-End Developer:</h5>

          <ul className={styles.bulletList}>
            <li className={styles.bulletPoint}>
              Rebuilt and redesigned the main company website with the newest
              technology available.
            </li>
            <li className={styles.bulletPoint}>
              Created a UI/UX-friendly editable website template for clients to
              customize their own website.
            </li>
            <li className={styles.bulletPoint}>
              Redesigned a more UI/UX-friendly Backoffice.
            </li>
            <li className={styles.bulletPoint}>
              All of these practically and aesthetically changes massively
              increased customer satisfaction.{" "}
            </li>
            <h5>As a Programmer Assistant:</h5>
            <li className={styles.bulletPoint}>
              Created a mobile version for POS devices so that our services
              could be used in physical stores (Kotlin).
            </li>
            <li className={styles.bulletPoint}>
              Helped developing an electronic signature feature to our services
              (PHP, C++).{" "}
            </li>
          </ul>
          <div className={styles.tech}></div>
        </>
      </TimelineItem>
    </>
  );
};

export default Career;