import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header id="home">
      <div className="container header-container">
        <h5 data-aos="fade-up">Hello I&apos;m</h5>
        <h1 data-aos="fade-up" data-aos-delay="100">
          Fábio Ferreira
        </h1>
        <h5 data-aos="fade-up" data-aos-delay="200" className="text-light-alt">
          Fullstack Developer
        </h5>

        <div id="scroll-down-animation">
          <span className="mouse" data-aos="fade-up">
            <span className="move"></span>
          </span>
          <h5
            data-aos="fade-up"
            data-aos-delay="100"
            className="scroll-down-text"
          >
            Scroll down
          </h5>
        </div>
      </div>
    </header>
  );
};

export default Header;
