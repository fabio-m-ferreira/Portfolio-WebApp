import React from "react";
import styles from "./timelineItem.module.css";
import Button from "@/components/button/Button";
import { FaLocationDot } from "react-icons/fa6";

export interface TimelineItemProps {
  title: string;
  subtitle?: string;
  date: string;
  location?: string;
  bulletList?: string[];
  techList?: {
    name: string;
    icon?: React.ReactNode;
  }[];
  children?: React.ReactNode;
}

const TimelineItem = ({
  title,
  subtitle,
  date,
  location,
  bulletList,
  techList,
  children,
}: TimelineItemProps) => {
  const [expandOpen, setExpandOpen] = React.useState(false);

  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineHeader}>
        <div data-aos="fade-up" className={styles.date}>
          {date}
        </div>
        <div className={styles.timeline}></div>
      </div>

      <div className={styles.timelineContent}>
        <div data-aos="fade-up" className={styles.header}>
          <div className={styles.title}>
            <h4>{title}</h4>
            <p>{subtitle}</p>
            {location && (
              <p className={styles.location}>
                <FaLocationDot /> {location}
              </p>
            )}
          </div>
        </div>

        <div
          data-aos="fade-up"
          className={[styles.content, expandOpen && styles.expanded].join(" ")}
        >
          {children}

          {bulletList && (
            <ul className={styles.bulletList}>
              {bulletList.map((bullet, index) => (
                <li key={index} className={styles.bulletPoint}>
                  {bullet}
                </li>
              ))}
            </ul>
          )}

          <Button
            onClick={() => setExpandOpen(!expandOpen)}
            size="small"
            expandIcon
            expandOpen={expandOpen}
            variant="secondary"
            text={expandOpen ? "Show less" : "Show more"}
          />
          {techList && (
            <div className={styles.techList}>
              {techList.map((tech, index) => (
                <div key={index} className={styles.tech}>
                  {tech.icon}
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
