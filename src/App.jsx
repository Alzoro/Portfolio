import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import me from "./images/me.png";
import logo from "./images/logo.png";
import bg from "./images/bg.png";
import uhd from "./images/uhd.png";
import cir from "./images/uhd-c.png";

function Header() {
  const [showAbout, setShowAbout] = useState(false);
  return (
    <div className="App-header">
      <nav>
        <ul className='nav-links'>
          <li>
            <a href="#">About Me</a></li>
          <li><a href="#projects">Skills</a></li>
          <li><a href="#contact">Experience</a></li>
          <li>
          <a href=''><img src={logo} className='logo' alt="logo" /></a>
          </li>
          <li><a href="#contact">Projects</a></li>
          <li><a href="#contact">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

function Intro() {
  return (
    <div className='intro'>

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

      <img 
      src={me} 
      alt="Profile" 
      className='profile-pic' 
      />

      <img src={bg} alt='Background' className='bg'/> 

      <img src={uhd} alt='Arc' className='arc'/> 

      <img src={cir} alt='Arc-circle' className='cir'/> 

      

    </div>
  );
}

function About(){
  return(
    <div className='about'>
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

  )
}

function Skills(){
  return(
    <div className='skills'>
      <h2>Skills</h2>
      <p>Python, C, HTML, CSS, JavaScript, React</p>
      <p>Burp Suite, Nmap, Bettercap, Metasploit</p>
      <p>Figma, Canva</p>
    </div>
  )
}

function App() {
  return (
    <div className='container'>
      <Header />
      <Intro />
      <div className='box'></div>
      <Skills />
    </div>
  );
}

export default App;
