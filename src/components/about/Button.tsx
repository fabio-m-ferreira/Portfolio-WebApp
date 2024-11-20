import React from "react";

const Button = () => {
  return (
    <div className="button">
      <a
        href="/assets/Fabio_Ferreira_CV.pdf<"
        className="btn"
        target="_blank"
        rel="noreferrer"
      >
        Resume/CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let&apos;s Talk
      </a>
    </div>
  );
};

export default Button;
