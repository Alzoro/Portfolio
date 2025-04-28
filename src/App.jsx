import React from 'react';
import './App.css';
import { toggleMenu } from './script.js';
import { useState } from 'react';
import me from "./images/me.png";
import logo from "./images/logo.png";
import bg from "./images/bg.png";
import uhd from "./images/uhd.png";
import cir from "./images/uhd-c.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const handleToggle = () => {
    setIsMenuOpen((prevState) => !prevState); 
  };

  return (
    <>
      <div className="App-header">
        <nav className='nav'>
          <ul className='nav-links'>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Skills</a></li>
            <li><a href="#contact">Experience</a></li>
            <li><a href="#home"><img src={logo} className='logo' alt="logo" /></a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>

      <div className="mob-header">
        <div className="mob-logo" onClick={handleToggle}> 
          <img src={logo} alt="logo" id='mob-logo' />
        </div>
        <span className="mob-name">Jones P</span>
        <nav className={`mob-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className='mob-nav-links'>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
}


function Intro(){
  return (
    <div className='intro' id='home'>

        <div className="hello" >
          HELLO I'M
        </div>

        <div className="jones">
          JONES P
        </div>

        <div className="tester">
          PENETRATION TESTER | WEB DEVELOPER
        </div>

        <div >
          <button className='ab_button'>
            About Me
            </button>
        </div>

        <img src={me} alt="Profile" className='profile-pic'/>

        <img src={bg} alt='Background' className='bg'/> 

        <img src={uhd} alt='Arc' className='arc'/> 

        <img src={cir} alt='Arc-circle' className='cir'/> 

      </div>

  );
}

function box(){
  return(
    <div className='box'>
        <nav>
          <ul className='ul'>
            <li><a >Creative Thinker</a></li>
            <li><a >Tech Savvy</a></li>
            <li><a >Calm Under Pressure</a></li>
            <li><a >Fast Learner</a></li>
          </ul>
        </nav>
      </div>

  );
}

function about(){
  return(
    <div className='about' id='about'>
        <h2>About Me</h2>
        <p>
        I am Jones P, a B.Tech Computer Science Engineering student specializing in Cybersecurity at Vel Tech Rangarajan Dr. 
        Sagunthala R&D Institute of Science and Technology, Chennai. Passionate about ethical hacking and penetration testing, 
        I actively work with tools like Burp Suite, Nmap, Bettercap, and Metasploit to explore vulnerabilities and enhance system security. 
        I am proficient in Python, C, HTML, CSS, JavaScript, and React, and I also have hands-on experience in building responsive websites. 
        Additionally, I have a strong interest in UI/UX design and work with tools like Figma and Canva to visualize and plan digital interfaces. 
        My key projects include an Adaptive Speed Limiter using Arduino for dynamic vehicle speed control and a Dynamic Honeytoken Monitoring System 
        that detects unauthorized file access and alerts users in real-time via Telegram. I am constantly exploring new attack vectors, security 
        mechanisms, and real-world vulnerabilities to sharpen my offensive and defensive cybersecurity skills.
        </p>
        
      </div>

  );
}

function skills(){
  return(
    <div className='skills'>
        <h2>Skills</h2>
        <p>Python, C, HTML, CSS, JavaScript, React</p>
        <p>Burp Suite, Nmap, Bettercap, Metasploit</p>
        <p>Figma, Canva</p>
    </div>

  );
}

function App() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
    </>
  );
}

export default App;
