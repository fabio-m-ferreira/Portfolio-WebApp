"use client";
import React, { useRef } from "react";
import "./contact.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
//import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_b4403ka",
  //       "template_ph0wd2h",
  //       form.current,
  //       "23DIf_2hTb5TfNtdB"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         alert("Email was successfully sent!");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //         alert("Failed to send!");
  //       }
  //     );

  //   e.target.reset();
  // };

  return (
    <section id="contact">
      <h5 data-aos="fade-up">Get to Know Me</h5>
      <h6 data-aos="fade-up">Or</h6>
      <h2 className="contact-me" data-aos="fade-up">
        Contact Me
      </h2>

      <div className="container contact-container">
        <div className="contact-options" data-aos="fade-up">
          <article className="contact-option">
            <BsLinkedin className="contact-option-icon" />
            <h4>LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/fabio--ferreira/"
              target="_blank"
              rel="noreferrer"
            >
              See my Profile
            </a>
          </article>

          <article className="contact-option">
            <BsGithub className="contact-option-icon" />
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
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
        {/* End of Contact Form */}
      </div>
    </section>
  );
};

export default Contact;
