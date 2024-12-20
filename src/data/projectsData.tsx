import Button from "@/components/button/Button";
import styles from "@sections/projects/projects.module.css";
import React from "react";
import {
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaJs,
  FaPhp,
  FaReact,
  FaWordpress,
} from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";

interface dataProps {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  techStack: React.ReactNode[];
  sourceButton: React.ReactNode;
  demoButton: React.ReactNode;
}

const projectsData: dataProps[] = [
  {
    id: 1,
    image: "/assets/portfolio-template.jpg",
    title: "Resultado de Mestre",
    subtitle: "Professional Project",
    techStack: [
      <>
        <FaWordpress /> Wordpress
      </>,
      <>
        <FaPhp /> PHP
      </>,
      <>
        <FaHtml5 /> HTML
      </>,
      <>
        <FaCss3Alt /> CSS
      </>,
      <>
        <FaJs /> Javascript
      </>,
      <>
        <FaFigma /> Figma
      </>,
    ],
    sourceButton: (
      <Button className={styles.btn} text="Private Source" variant="disabled" />
    ),
    demoButton: (
      <Button
        className={styles.btn}
        text="Live Demo"
        href="https://ff-react-portfolio-template.vercel.app/"
        target="_blank"
        variant="tertiary"
      />
    ),
  },
  {
    id: 2,
    image: "/assets/project_js.jpg",
    title: "Personal Portfolio",
    subtitle: "Showcase of My Work",
    techStack: [
      <>
        <SiNextdotjs /> NextJS
      </>,
      <>
        <FaCss3Alt /> CSS
      </>,
      <>
        <FaJs /> Javascript
      </>,
      <>
        <FaFigma /> Figma
      </>,
    ],
    sourceButton: (
      <Button
        className={styles.btn}
        text="GitHub"
        href="https://github.com/fabio-m-ferreira/travel-agency"
        target="_blank"
        variant="primary"
      />
    ),
    demoButton: (
      <Button
        className={styles.btn}
        text="Live Demo"
        href="#"
        target="_blank"
        variant="tertiary"
      />
    ),
  },
  {
    id: 3,
    image: "/assets/gestix-portfolio.jpg",
    title: "Gestix Software",
    subtitle: "Professional Project",
    techStack: [
      <>
        <FaHtml5 /> HTML
      </>,
      <>
        <FaCss3Alt /> CSS
      </>,
      <>
        <FaJs /> Javascript
      </>,
    ],
    sourceButton: (
      <Button className={styles.btn} text="Private Source" variant="disabled" />
    ),
    demoButton: (
      <Button
        className={styles.btn}
        text="Live Demo"
        href="https://www.gestixsoftware.com/"
        target="_blank"
        variant="tertiary"
      />
    ),
  },
  {
    id: 4,
    image: "/assets/facepalm-portfolio.jpg",
    title: "Facepalm",
    subtitle: "Social Media App - Academic Project",
    techStack: [
      <>
        <FaReact /> React Native
      </>,
      <>
        <FaCss3Alt /> CSS
      </>,
      <>
        <IoLogoFirebase />
        FireBase
      </>,
    ],
    sourceButton: (
      <Button
        className={styles.btn}
        text="GitHub"
        href="https://github.com/fabio-m-ferreira/Facepalm"
        target="_blank"
        variant="primary"
      />
    ),
    demoButton: (
      <Button
        className={styles.btn}
        text="See More"
        href="/facepalm"
        target="_blank"
        variant="tertiary"
      />
    ),
  },
];

export default projectsData;
