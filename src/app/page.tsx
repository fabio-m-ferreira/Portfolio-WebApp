//import styles from "./page.module.css";
import React from "react";
import LandingPage from "@/sections/landingPage/LandingPage";
import About from "@sections/about/About";
import Portfolio from "@sections/portfolio/Portfolio";
import Career from "@/sections/career/Career";

export default function Home() {
  return (
    <main>
      <LandingPage />
      <About />
      <Career />
      <Portfolio />
    </main>
  );
}
