//import styles from "./page.module.css";
import React from "react";
import LandingPage from "@/sections/landingPage/LandingPage";
import Nav from "@sections/nav/Nav";
import About from "@sections/about/About";
import Portfolio from "@sections/portfolio/Portfolio";
import Contact from "@sections/contact/Contact";
import Footer from "@sections/footer/Footer";

export default function Home() {
  return (
    <>
      <LandingPage />
      <Nav />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
