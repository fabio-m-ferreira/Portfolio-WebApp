//import styles from "./page.module.css";
import React from "react";
import LandingPage from "@/sections/landingPage/LandingPage";
import About from "@sections/about/About";
import Projects from "@sections/projects/Projects";
import Career from "@/sections/career/Career";

export default function Home() {
  return (
    <main>
      <LandingPage />
      <About />
      <Career />
      <Projects />
    </main>
  );
}
