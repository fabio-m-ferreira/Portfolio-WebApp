import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/gestix-portfolio.jpg'
import IMG2 from '../../assets/gestix-portfolio4.jpg'
import IMG3 from '../../assets/portfolio-template.jpg'
import IMG4 from '../../assets/project_js.jpg'

const data = [

  {
    id: 1,
    image: IMG1,
    title: 'Gestix Software | Professional Project',
    github: 'https://github.com',
    demo: 'https://www.gestixsoftware.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma dasshboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
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
          data.map(({ id, image, title, github, demo }) => {

            aosDelayIndex++

            return (
              <div key={id} className='aos-wrapper' data-aos="fade-up" data-aos-delay={aosDelayIndex * 50}>
                <article className='portfolio-item'>
                  <div className="portfolio-item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio-item-cta">
                    <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                    <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                  </div>
                </article>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio