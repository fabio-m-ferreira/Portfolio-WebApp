import React from "react";
import TimelineItem from "@components/career-timeline/TimelineItem";
import { CareerWorkData } from "@/data/CareerData";

const Work = () => {
  return (
    <>
      {CareerWorkData.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </>
  );
};

export default Work;
