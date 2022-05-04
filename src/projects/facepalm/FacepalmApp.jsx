import React from 'react'
import AOS from 'aos'
import './facepalm.css'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'
import FacepalmLogo from '../../assets/facepalm_logo.png'
import IMG1 from '../../assets/facepalm-login.jpg'
import IMG2 from '../../assets/facepalm-sign-up.jpg'
import IMG3 from '../../assets/facepalm-feed.jpg'
import IMG4 from '../../assets/facepalm-post-detail.jpg'
import IMG5 from '../../assets/facepalm-new-post.jpg'
import IMG6 from '../../assets/facepalm-users.jpg'
import IMG7 from '../../assets/facepalm-user-profile.jpg'
import IMG8 from '../../assets/facepalm-profile.jpg'
import IMG9 from '../../assets/facepalm-chat.jpg'
import IMG10 from '../../assets/facepalm-chat-messages.jpg'

import { FaReact } from 'react-icons/fa'
import { SiFirebase } from 'react-icons/si'

const data = [

  {
    id: 1,
    image: IMG1,
    title: 'Login Section',
    description: <h3 className='text-light'>Here you can Login with Email and Password <br /> Login based on Firebase Authentication. </h3>,
  },
  {
    id: 2,
    image: IMG2,
    title: 'Sign-Up Section',
    description: <h3 className='text-light'>Here you can create a new account. A Username, Email, and Password are required. Background and Profile Image are optional. In case there's no image chosen, a default image takes place.</h3>,
  },
  {
    id: 3,
    image: IMG3,
    title: 'Main Tab - App Feed',
    description: <h3 className='text-light'>Here in the App Feed, you can see the most recent Posts.</h3>,
  },
  {
    id: 4,
    image: IMG4,
    title: 'Post Details | Post Comments',
    description: <h3 className='text-light'>Here you can see the Post in more detail and other users' comments. You can also add your own comment.</h3>,
  },
  {
    id: 5,
    image: IMG5,
    title: 'New Post Tab',
    description: <h3 className='text-light'>Here you can create a new post with an image and a description. Both are optional, but at least one field is required.</h3>,
  },
  {
    id: 6,
    image: IMG6,
    title: 'Users Tab',
    description: <h3 className='text-light'>Here you can see all the users. You can also Add/Remove a Friend and Accept/Decline a Friend Request.</h3>,
  },
  {
    id: 7,
    image: IMG7,
    title: 'User Profile',
    description: <h3 className='text-light'>Here you can see a User Profile in more detail, which includes personal info, posts and friends. You can also Add/Remove a Friend and Accept/Decline a Friend Request.</h3>,
  },
  {
    id: 8,
    image: IMG8,
    title: 'Profile Tab',
    description: <h3 className='text-light'>Here you can see your own Profile, which includes personal info, posts and friends. You also can change your Background and Profile Images.</h3>,
  },
  {
    id: 9,
    image: IMG9,
    title: 'Chat Tab',
    description: <h3 className='text-light'>Here you can see your available Chats. You can only chat with friends</h3>,
  },
  {
    id: 10,
    image: IMG10,
    title: 'Chat Messages',
    description: <h3 className='text-light'>Here you can have Real-Time conversations with your friends.</h3>,
  },

]

const FacepalmApp = () => {

  AOS.init();

  return (
    <section id='projects'>
      <div className='project-header'>
        <img src={FacepalmLogo} alt="Facepalm Logo" data-aos="fade-up" />
        <h3 data-aos="fade-up" data-aos-delay="100">Academic Project - Facepalm</h3>
        <h2 data-aos="fade-up" data-aos-delay="200">Social Media App</h2>
        <div className='project-icons-container'>
          <FaReact className='project-icon' data-aos="fade-up" data-aos-delay="300" />
          <SiFirebase className='project-icon' data-aos="fade-up" data-aos-delay="350" />
        </div>
        <h3 data-aos="fade-up" data-aos-delay="400" className='text-light-alt'>Built for Android</h3>
        <a data-aos="fade-up" data-aos-delay="500" href="https://github.com" className="btn" target="_blank" rel="noreferrer">GitHub</a>

        <div id="scroll-down-animation" data-aos="fade-up" data-aos-delay="600">
          <span className='mouse' >
            <span className='move'></span>
          </span>
          <h5 className='scroll-down-text'>Scroll down</h5>
        </div>
      </div>

      <div className="projects-container">

        {
          data.map(({ id, image, title, description }) => {
            return (
              <div key={id} className='project-item'>
                <div className='project-description'>
                  <div className='project-description-content'>
                    <h2>{title}</h2>
                    {description}
                  </div>
                </div>
                <div className='project-image'>
                  <img src={image} alt={title} />
                </div>
              </div>
            )
          })
        }
      </div>
      <Nav />
      <Footer />
    </section>
  )
}

export default FacepalmApp