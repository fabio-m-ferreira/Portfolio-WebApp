import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/gestix-portfolio.jpg'
import IMG2 from '../../assets/facepalm-portfolio.jpg'
import IMG3 from '../../assets/portfolio-template.jpg'
import IMG4 from '../../assets/project_js.jpg'

const data = [

  {
    id: 1,
    image: IMG1,
    title: 'Gestix Software | Professional Project',
    sourceButton: <span className="btn disabled-button">Private Source</span>,
    demoButton: <a href="https://www.gestixsoftware.com/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>,
  },
  {
    id: 2,
    image: IMG2,
    title: 'Social Media App - Android | Academic Project',
    sourceButton: <a href="https://github.com/voydd9/Facepalm" className="btn" target="_blank" rel="noreferrer">GitHub</a>,
    demoButton: <a href="/projects/facepalm" className="btn btn-primary" target="_blank" rel="noreferrer">See More</a>
  },
  {
    id: 3,
    image: IMG3,
    title: 'Portfolio Template',
    sourceButton: <a href="https://github.com/voydd9/React-Portfolio-WebApp" className="btn" target="_blank" rel="noreferrer">GitHub</a>,
    demoButton: <a href="https://ff-react-portfolio-template.vercel.app/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    sourceButton: <a href="https://github.com/voydd9/travel-agency" className="btn" target="_blank" rel="noreferrer">GitHub</a>,
    demoButton: <a href="projects/travel-agency/index.html" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
  },

]



var aosDelayIndex = -1

const Portfolio = () => {

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {
          data.map(({ id, image, title, sourceButton, demoButton }) => {

            aosDelayIndex++

            return (
              <div key={id} className="aos-wrapper" data-aos="fade-up" data-aos-delay={aosDelayIndex * 50}>
                <article className="portfolio-item">
                  <div className="portfolio-item-image">
                    <img src={image} alt={title} />
                  </div>
                  <div className="portfolio-item-content">
                    <h3>{title}</h3>
                    <div className="portfolio-item-cta">
                      {sourceButton}
                      {demoButton}
                    </div>
                  </div>
                </article>
              </div>
            )
          })
        }
      </div>

      <div className="details-wrapper">
        <div className="details-container">

        </div>
      </div>
    </section>
  )
}

export default Portfolio