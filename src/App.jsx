import React from 'react'
import AOS from 'aos'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'



window.addEventListener('load', AOS.init());

const App = () => {

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Contact />
      <Footer />

    </>
  )
}

export default App