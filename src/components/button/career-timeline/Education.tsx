import React from "react";
import TimelineItem from "@components/button/career-timeline/TimelineItem";
import { CareerEducationData } from "@/data/CareerData";

const Education = () => {
  return (
    <>
      {CareerEducationData.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </>
  );
};

export default Education;
