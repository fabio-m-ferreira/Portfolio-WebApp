import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import Scrollspy from 'react-scrollspy'

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll < 50) {
    document.querySelector('#menu').classList.add('menu-invisible');
    document.querySelector('#menu').classList.remove('menu-visible');
  } else {
    document.querySelector('#menu').classList.add('menu-visible');
    document.querySelector('#menu').classList.remove('menu-invisible');
  }
});

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (

    <nav id='menu'>
      <Scrollspy items={['home', 'about', 'portfolio', 'contact']} className="scroll-nav" currentClassName="active" offset={-100}>
        <a href='#home' onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
        <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
        <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BiBook /></a>
        <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
      </Scrollspy>
    </nav>
  )
}

export default Nav