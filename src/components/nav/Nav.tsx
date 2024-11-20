"use client";
import React, { useEffect, useState } from "react";
import "./nav.css";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;

      if (currentScroll < 50) {
        document.querySelector("#menu")!.classList.add("menu-invisible");
        document.querySelector("#menu")!.classList.remove("menu-visible");
      } else {
        document.querySelector("#menu")!.classList.add("menu-visible");
        document.querySelector("#menu")!.classList.remove("menu-invisible");
      }
    });
  }, []);

  return (
    <nav id="menu" className="menu-invisible">
      <Link
        href="/#home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </Link>
      <Link
        href="/#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </Link>
      <Link
        href="/#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <BiBook />
      </Link>
      <Link
        href="/#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </Link>
    </nav>
  );
};

export default Nav;
