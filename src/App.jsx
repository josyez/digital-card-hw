import { useState } from 'react'
import reactLogo from './assets/react.svg'

import linkedinLogo from './social-icons/linkedin_icon.png'
import githubLogo from './social-icons/github_icon.png'
import instagramLogo from './social-icons/instagram_icon.png'

import './App.css'


function Info (){

  return(
  <div className='info'>
    <img className="image" src='https://www.kindpng.com/picc/m/199-1995905_transparent-doe-clipart-hd-png-download.png' />
    <h1>Joselyn Cuzco</h1>
    <h2>Wed Development student</h2>
    <h3>cuzco.joselyn@gmail.com</h3>

    <div className='button'>
      <button className="btn-email">Email</button>

    </div>




  </div>
  )
  
}

function About(){
  return (
    <div className='about'>
      <h2>About</h2>
      <p>I am a Web Development fellow at The Knowledge House. So far i have learned HTML, CSS and JavaScript, currently im learning React. </p>
    </div>
  )
}

function Interests() {
  return (
    <div className='interests'>
      <h2>Interests</h2>
      <p> I enjoy wood carving, film photography and making trees from aluminum wire.</p>
    </div>
  )
}

function Footer() {
  return(
    <div className='footer'>
      <img src={linkedinLogo}/>
      <img src={githubLogo}/>
      <img src={instagramLogo}/>

    </div>
  )
}

function App() {
  return(
  <div className='app'>
  <Info/>
  <About/>
  <Interests/>
  <Footer/>
  </div>
  )
}

export default App
