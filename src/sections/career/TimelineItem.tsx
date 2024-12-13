import React from "react";
import styles from "./timelineItem.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

export interface TimelineItemProps {
  title: string;
  altTitle: string;
  subtitle: string;
  date: string;
  logo?: string;
  horizontalLogo?: string;
  children: React.ReactNode;
}

const TimelineItem = ({
  title,
  altTitle,
  subtitle,
  date,
  logo,
  horizontalLogo,
  children,
}: TimelineItemProps) => {
  const [expandOpen, setExpandOpen] = React.useState(false);

  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineHeader}>
        <div className={styles.date}>{date}</div>
        <div className={styles.timeline}></div>
      </div>

      <div className={styles.timelineContent}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h4>{title}</h4>
            <p>{subtitle}</p>
          </div>
          {logo && <Image src={logo} alt={altTitle} width={100} height={100} />}
          {horizontalLogo && (
            <Image
              src={horizontalLogo}
              alt={altTitle}
              width={100}
              height={50}
              className={styles.horizontalLogo}
            />
          )}
        </div>

        <div
          className={[styles.content, expandOpen && styles.expanded].join(" ")}
        >
          {children}

          <Button
            onClick={() => setExpandOpen(!expandOpen)}
            size="small"
            expandIcon
            expandOpen={expandOpen}
            variant="secondary"
            text="See more"
          />
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
