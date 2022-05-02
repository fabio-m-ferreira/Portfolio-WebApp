import React from 'react'
import './footer.css'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {

  return (
    <footer>
      <a href='#home' className='footer-logo'>Fábio Ferreira</a>

      <ul className='permalinks'>
        <li><a href="/#home">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#portfolio">Portfolio</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href='https://www.linkedin.com/in/fabio--ferreira/' target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/Voydd9' target="_blank" rel="noreferrer"><BsGithub /></a>
      </div>

      <div className="footer-copyright">
        <p>Website Developed by Fábio Ferreira.</p>
        <a href="https://www.freepik.com/aleksandr-samochernyi"> Portfolio Section Websites mockups designed by aleksandr_samochernyi - Freepik</a>
      </div>
    </footer>
  )
}

export default Footer