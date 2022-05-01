import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import CTA from '../about/CTA.jsx'
import Experience from '../experience/Experience.jsx'

const About = () => {


  return (
    <section id="about">
      <h5 data-aos="fade-up">About Me</h5>
      <h2 data-aos="fade-up">My Experience</h2>

      <div className='container about-container'>
        <div className='about-content'>
          <div className='about-cards'>

            {/* Card 1 */}
            <div className='aos-wrapper' data-aos="fade-up">
              <div className='about-card'>
                <FaAward className='about-icon' />
                <h5>Experience</h5>
                <div className='about-experience'>
                  <small>1 Year working</small>
                  <small>3+ Years coding</small>
                </div>
              </div>
            </div>

            <div className='about-me' data-aos="fade-up" data-aos-delay="100">
              <p>I'm a Junior Full-stack Developer capable of developing responsive websites in a complete way, both on the Front-end and Back-end, with good design notions and always willing to learn more. Plus a one year of professional experience with HTML/CSS and Javascript.</p>
              <CTA />
            </div>

          </div>



        </div>
      </div>

      <Experience />
    </section>
  )
}

export default About