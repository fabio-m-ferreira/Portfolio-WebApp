import React from 'react'
import './experience.css'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { SiPhp } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'
import { SiFirebase } from 'react-icons/si'

const Experience = () => {
  return (
    <section id="experience">

      <div className="container experience-container">
        {/* Frontend Experience */}
        <div className='aos-wrapper' data-aos="fade-up">
          <div className="experience-frontend experience-details-container">
            <h3>Front-end Development</h3>
            <div className="experience-content">

              {/* Frontend Experience 1 */}
              <article className='experience-details'>
                <FaHtml5 className="experience-details-icons" />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              {/* Frontend Experience 2 */}
              <article className='experience-details'>
                <FaCss3Alt className="experience-details-icons" />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              {/* Frontend Experience 3 */}
              <article className='experience-details'>
                <IoLogoJavascript className="experience-details-icons" />
                <div>
                  <h4>Javascript</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              {/* Frontend Experience 4 */}
              <article className='experience-details'>
                <FaReact className="experience-details-icons" />
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

            </div>
          </div>
        </div>
        {/*End of Frontend Experience*/}
        {/* Backend Experience */}
        <div className='aos-wrapper' data-aos="fade-up" data-aos-delay="100">
          <div className="experience-backend experience-details-container" >
            <h3>Back-end Development</h3>
            <div className="experience-content">

              {/* Backend Experience 1 */}
              <article className='experience-details'>
                <FaNodeJs className="experience-details-icons" />
                <div>
                  <h4>Node Js</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              {/* Backend Experience 2 */}
              <article className='experience-details'>
                <SiPhp className="experience-details-icons" />
                <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              {/* Backend Experience 3 */}
              <article className='experience-details'>
                <SiMysql className="experience-details-icons" />
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              {/* Backend Experience 4 */}
              <article className='experience-details'>
                <SiFirebase className="experience-details-icons" />
                <div>
                  <h4>Firebase</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

            </div>
          </div>
        </div>
        {/*End of Backend Experience*/}

      </div>
    </section>
  )
}

export default Experience