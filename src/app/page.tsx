//import styles from "./page.module.css";
import React from "react";
import LandingPage from "@/sections/landingPage/LandingPage";
import About from "@sections/about/About";
import Portfolio from "@sections/portfolio/Portfolio";
import Contact from "@sections/contact/Contact";

export default function Home() {
  return (
    <>
      <LandingPage />

      <About />
      <Portfolio />
      <Contact />
    </>
  );
}
