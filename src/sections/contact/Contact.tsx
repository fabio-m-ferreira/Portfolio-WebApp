"use client";
import React, { useRef } from "react";
import styles from "./contact.module.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Button from "@/components/button/Button";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  return (
    <section id="contact">
      <h5 data-aos="fade-up">Get to Know Me</h5>
      <h6 data-aos="fade-up">Or</h6>
      <h2 className={styles.contactTitle} data-aos="fade-up">
        Contact Me
      </h2>

      <div className={`container ${styles.contactContainer}`}>
        <div className={styles.contactOptions} data-aos="fade-up">
          <article className={styles.contactOption}>
            <BsLinkedin className={styles.contactOptionIcon} />
            <h4>LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/fabio--ferreira/"
              target="_blank"
              rel="noreferrer"
            >
              See my Profile
            </a>
          </article>

          <article className={styles.contactOption}>
            <BsGithub className={styles.contactOptionIcon} />
            <h4>GitHub</h4>
            <a
              href="https://github.com/fabio-m-ferreira"
              target="_blank"
              rel="noreferrer"
            >
              See my Projects
            </a>
          </article>
        </div>

        {/*Contact Form*/}
        <form
          ref={form}
          //onSubmit={sendEmail}
          data-aos="fade-up"
          data-aos-delay="100"
          className={styles.form}
        >
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className={styles.textarea}
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <Button text="Send Message" variant="primary" type="submit" />
        </form>
        {/* End of Contact Form */}
      </div>
    </section>
  );
};

export default Contact;
