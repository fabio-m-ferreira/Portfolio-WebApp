"use client";
import React, { useEffect, useState } from "react";
import styles from "./nav.module.css";
import Link from "next/link";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Handle scroll visibility using React logic
  useEffect(() => {
    const handleScroll = () => {
      setIsNavVisible(window.scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "/#home", icon: <AiOutlineHome />, id: "#home" },
    { href: "/#about", icon: <AiOutlineUser />, id: "#about" },
    { href: "/#portfolio", icon: <BiBook />, id: "#portfolio" },
    { href: "/#contact", icon: <BiMessageSquareDetail />, id: "#contact" },
  ];

  return (
    <nav
      id="menu"
      className={`${styles.nav} ${
        isNavVisible ? "menu-visible" : "menu-invisible"
      }`}
    >
      {navLinks.map(({ href, icon, id }) => (
        <Link
          key={id}
          href={href}
          onClick={() => setActiveNav(id)}
          className={activeNav === id ? styles.active : ""}
        >
          {icon}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
