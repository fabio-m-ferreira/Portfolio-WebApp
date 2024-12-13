"use client";
import React, { useEffect, useState } from "react";
import styles from "./nav.module.css";
import Link from "next/link";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import Scrollspy from "@/utils/ScrollSpy";

const Nav = () => {
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
    { href: "/#home", icon: <AiOutlineHome />, id: "home", name: "Home" },
    { href: "/#about", icon: <AiOutlineUser />, id: "about", name: "About" },
    {
      href: "/#career",
      icon: <BiBook />,
      id: "career",
      name: "Career",
    },
  ];

  return (
    <nav
      id="menu"
      className={`${styles.nav} ${
        isNavVisible ? styles.menuVisible : styles.menuInvisible
      }`}
    >
      <Scrollspy
        items={navLinks.map((link) => link.id)}
        currentClassName={styles.active}
        className={styles.scrollspy}
        componentTag="div"
        offset={-100}
      >
        {navLinks.map(({ href, id, name }) => (
          <Link
            key={id}
            href={href}
            aria-label={name}
            className={styles.navItem}
          >
            {name}
          </Link>
        ))}
      </Scrollspy>
    </nav>
  );
};

export default Nav;
