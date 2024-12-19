"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import styles from "./landingPage.module.css";

const Logo = () => (
  <div className={styles.logo}>
    <DotLottieReact src="/icons/logo.lottie" autoplay />
  </div>
);

export default Logo;
