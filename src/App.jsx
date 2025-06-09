import React, { useState, useEffect } from 'react';
import './App.css';
import fig1 from './images/fig1.png';
import fig2 from './images/fig2.png';
import emailjs from '@emailjs/browser';
import { getFormattedDate } from './script.js';
import { getFormattedTime } from './script.js';
import { toggleContent } from './script';
import { sendMail } from './script.js';


import img1 from './images/icon/1.png';
import img2 from './images/icon/2.png';
import img3 from './images/icon/3.png';
import img4 from './images/icon/4.png';
import img5 from './images/icon/5.png';
import img6 from './images/icon/6.png';
import img7 from './images/icon/7.png';
import img8 from './images/icon/8.png';
import m1 from './images/icon/m1.png';
import m2 from './images/icon/m2.png';
import m3 from './images/icon/m3.png';
import m4 from './images/icon/m4.png';
import m5 from './images/icon/m5.png';
import bru_icon from './images/bru_icon.png';
import open from './images/open.png'; 
import txtfile from './images/txtfile.png';
import file from './images/file.png';
import resume from './images/Resume.jpg';
import exe from './images/exe.png';
import instagram from './images/instagram.png';
import github from './images/github.png';
import linkedin from './images/linkedin.png';
import c from './images/Skills/c.png';
import python from './images/Skills/python.png';
import mysql from './images/Skills/mysql.png';
import latex from './images/Skills/latex.png';
import makefile from './images/Skills/makefile.png';
import bash from './images/Skills/bash.png';
import nmap from './images/Skills/nmap.png';
import burp from './images/Skills/burp.png';
import bettercap from './images/Skills/bettercap.png';
import aircrack from './images/Skills/aircrack.png';
import john from './images/Skills/john.png';
import hydra from './images/Skills/hydra.png';
import sqlmap from './images/Skills/sqlmap.png';
import hashcat from './images/Skills/hashcat.png';
import splunk from './images/Skills/splunk.png';
import autopsy from './images/Skills/autopsy.png';
import canva from './images/Skills/canva.png';
import figma from './images/Skills/figma.png';
import css from './images/Skills/css.png';
import html from './images/Skills/html.png';
import js from './images/Skills/js.png';
import react from './images/Skills/react.png';
import et from './images/Skills/et.png';
import net from './images/Skills/net.png';
import linux from './images/Skills/linux.png';
import pen from './images/Skills/pen.png';
import me from './images/me.png';


function Background() {
 
  emailjs.init('4qZLuWaEjtRhE70RW');

  const [dateTime, setDateTime] = useState({
    date: getFormattedDate(),
    time: getFormattedTime()
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime({
        date: getFormattedDate(),
        time: getFormattedTime()
      });
    }, 60000);

    return () => clearInterval(interval); 
  }, []);

  const [activeContent, setActiveContent] = useState(null);

  const handleClick = (index) => {
    setActiveContent((prev) => toggleContent(prev, index));
  };

  const handleBack = () => {
    setActiveContent(null); 
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendMail(formData.name, formData.email, formData.message);
      alert("Message sent!");
    } 
    catch (err) {
      console.error("Send failed", err);
    }
  };


  return (
    <>
      <div className="pc">

        <div className="pc_bimg"></div>

        <div className="header">
          <img className="pc_img1" src={fig1} alt='figure 1' />
          <img className="pc_img2" src={fig2} alt='figure 2' />
          <a>Apps     Places</a>
          <div className='DT'>
            <span className='Date'> {dateTime.date} </span>
            <span className='Time'> {dateTime.time} </span>
          </div>
        </div>

        <div className='title'>
          <span className='wlc'>Welcome to my</span>
          <span className='portfolio'>Portfolio.</span>
          <span className='name'>JONES P</span>
          <span className='sub-txt'>"the quiter you become, the more you are able to hear"</span>
        </div>

        <div className='task-bar'>
          <img className='img1' src={img1} alt='terminal'/>
          <img className='img2' src={img2} alt='files' />
          <img className='img3' src={img3} alt='editor' />
          <img className='img4' src={img4} alt='chromium' />
          <img className='img5' src={img5} alt='metasploit' />
          <img className='img6' src={img6} alt='wireshark' />
          <img className='img7' src={img7} alt='cherrytree' />
          <img className='img8' src={img8} alt='apps' />
        </div>

        <div className='files'>
          <div className='About'>
            <img className='txtfile' src={txtfile} alt='text file'  onClick={()=> handleClick(1)}/>
            <p className='about_caption'>About Me.txt</p>
          </div>

          <div className='Skills'>
            <img className='txtfile' src={txtfile} alt='text file'  onClick={()=> handleClick(2)}/>
            <p className='about_caption'>Skills.txt</p>
          </div>

          <div className='Experience'>
            <img className='txtfile' src={txtfile} alt='text file'  onClick={()=> handleClick(3)}/>
            <p className='about_caption'>Experience.txt</p>
          </div>

          <div className='Projects'>
            <img className='file' src={file} alt='text file'  onClick={()=> handleClick(4)}/>
            <p className='about_caption'>Projects</p>
          </div>

          <div className='Resume'>
            <a href='/My_Resume.pdf' target="_blank" rel="noopener noreferrer">
              <img className='resume' src={resume} alt='text file'/>
            </a>
            <p className='about_caption'>Resume.pdf <br />
              <span className="dwn">(click to view)</span>
            </p>
          </div>

          <div className='Contact'>
            <img className='file' src={file} alt='text file'  onClick={()=> handleClick(6)}/>
            <p className='about_caption'>Contact</p>
          </div>

        </div>

        {activeContent == 1 && (
          <div className="content-box">
            <div className='content-header'>
              <img className='bur_icon' src={bru_icon} alt="bur_icon" />
              <img className='open' src={open} alt="open" />
              <p className='back' onClick={handleBack}>⬅ Back</p>
              <p className='content-title'>About Me.txt</p>

            </div>
            <div>
              <About />
            </div>
          </div>
        )}

        {activeContent == 2 && (
          <div className="content-box">
            <div className='content-header'>
              <img className='bur_icon' src={bru_icon} alt="bur_icon" />
              <img className='open' src={open} alt="open" />
              <p className='back' onClick={handleBack}>⬅ Back</p>
              <p className='content-title'>Skills.txt</p>

            </div>
            <Skill />
          </div>
        )}

        {activeContent == 3 && (
          <div className="content-box">
            <div className='content-header'>
              <img className='bur_icon' src={bru_icon} alt="bur_icon" />
              <img className='open' src={open} alt="open" />
              <p className='back' onClick={handleBack}>⬅ Back</p>
              <p className='content-title'>Experience.txt</p>

            </div>
              <Experience />
          </div>
        )}

        {activeContent == 4 && (
          <div className="filecontent-box">
            <div className='ccontent-header'>
              <div className='innerbox'>
                <p className='inner-content'>🏠︎ Home / Projects</p>
                <p className='threedot'>⋮</p>
              </div>
              <img className='bur_icon' src={bru_icon} alt="bur_icon" />
              <p className='back' onClick={handleBack}>⬅ Back</p>
            </div>
            
            <div className='file-files'>
              <div className='project1'>
                <img className='txtfile' src={txtfile} alt='text file'  onClick={()=> handleClick(7)}/>
                <p className='aabout_caption'>Project-1</p>
              </div>

              <div className='project2'>
                <img className='txtfile' src={txtfile} alt='text file'  onClick={()=> handleClick(8)}/>
                <p className='aabout_caption'>Project-2</p>
              </div>

              <div className='project3'>
                <img className='txtfile' src={txtfile} alt='text file'  onClick={()=> handleClick(9)}/>
                <p className='aabout_caption'>Project-3</p>
              </div>

              <div className='project4'>
                <img className='txtfile' src={txtfile} alt='text file'  onClick={()=> handleClick(10)}/>
                <p className='aabout_caption'>Project-4</p>
              </div>

            </div>
          </div>
        )}

        {activeContent == 7 && (
          <div className="content-box">
            <div className='content-header'>
              <img className='bur_icon' src={bru_icon} alt="bur_icon" />
              <img className='open' src={open} alt="open" />
              <p className='back' onClick={() => handleClick(4)}>⬅ Back</p>
              <p className='content-title'>Project-1.txt</p>

            </div>
            <div>
              <Pro1 />
            </div>
          </div>
        )}

        {activeContent == 8 && (
          <div className="content-box">
            <div className='content-header'>
              <img className='bur_icon' src={bru_icon} alt="bur_icon" />
              <img className='open' src={open} alt="open" />
              <p className='back' onClick={() => handleClick(4)}>⬅ Back</p>
              <p className='content-title'>Project-2.txt</p>

            </div>
            <div>
              <Pro2 />
            </div>
          </div>
        )}

        {activeContent == 9 && (
          <div className="content-box">
            <div className='content-header'>
              <img className='bur_icon' src={bru_icon} alt="bur_icon" />
              <img className='open' src={open} alt="open" />
              <p className='back' onClick={() => handleClick(4)}>⬅ Back</p>
              <p className='content-title'>Project-3.txt</p>

            </div>
            <div>
              <Pro3 />
            </div>
          </div>
        )}

        {activeContent == 10 && (
          <div className="content-box">
            <div className='content-header'>
              <img className='bur_icon' src={bru_icon} alt="bur_icon" />
              <img className='open' src={open} alt="open" />
              <p className='back' onClick={() => handleClick(4)}>⬅ Back</p>
              <p className='content-title'>Project-4.txt</p>

            </div>
            <div>
              <Pro4 />
            </div>
          </div>
        )}

        {activeContent == 6 && (
        <div className="filecontent-box">
          <div className='ccontent-header'>
            <div className='innerbox'>
              <p className='inner-content'>🏠︎ Home / Contact</p>
              <p className='threedot'>⋮</p>
            </div>
            <img className='bur_icon' src={bru_icon} alt="bur_icon" />
            <p className='back' onClick={handleBack}>⬅ Back</p>
          </div>

          <div className='ffile-files'>
            <div className='insta'>
              <img className='instagram' src={instagram} alt='instagram'  
              onClick={()=> window.open('https://www.instagram.com/wannabejnz._?igsh=N3gyamZvdWFvb2Vt','_blank')}/>
              <p className='aabout_caption'>Instagram</p>
            </div>

            <div className='linked'>
              <img className='linkedin' src={linkedin} alt='linkedin'  
              onClick={()=> window.open('https://www.linkedin.com/in/jones24','_blank')}/>
              <p className='aabout_caption'>LinkedIn</p>
            </div>

            <div className='git'>
              <img className='github' src={github} alt='github'  
              onClick={()=> window.open('https://github.com/Alzoro','_blank')}/>
              <p className='aabout_caption'>GitHub</p>
            </div>

            <div className='messageme'>
              <img className='exe' src={exe} alt='text file'  onClick={()=> handleClick(11)}/>
              <p className='aabout_caption'>Message Me</p>
            </div>
            
          </div>
        </div>
        )}

        {activeContent == 11 && (
        <div className="filecontent-box">
          <div className='ccontent-header'>
            <img className='bur_icon' src={bru_icon} alt="bur_icon" />
            <p className='back' onClick={() => handleClick(6)}>⬅ Back</p>

          </div>
          
          <div className='contact'>
            <h1>Contact Me</h1>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="name">Name:</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="form-row">
                <label htmlFor="email">Email:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="form-row">
                <label htmlFor="message">Message:</label>
                <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange} 
                required
                >

                </textarea>
              </div>

              <button type="submit">Send</button>
            </form>

          </div>
          
        </div>
        )}


      </div>





      <div className="mobile">

        <div className="mobile_bimg"></div>

        <div className='title'>
          <span className='mname'>JONES P</span>
          <span className='msub-txt'>"the quiter you become, the more you are able to hear"</span>
        </div>

        <div className='Tim'>
            <span className='Time'> {dateTime.time} </span>
        </div>

        <div className='Dat'>
          <span className='Date'> {dateTime.date} </span>
        </div>

        <div className='mtask-bar'>
          <img className='m1' src={m1} alt='app1'/>
          <img className='m2' src={m2} alt='app2'/>
          <img className='m3' src={m3} alt='app3'/>
          <img className='m4' src={m4} alt='app4'/>
          <img className='m5' src={m5} alt='app5'/>
        </div>

       <div className='mfiles1'>
          <div className='mAbout'>
            <img className='txtfile' src={txtfile} alt='text file'  onClick={()=> handleClick(1)}/>
            <p className='about_caption'>About Me.txt</p>
          </div>

          <div className='Skills'>
            <img className='txtfile' src={txtfile} alt='text file'  onClick={()=> handleClick(2)}/>
            <p className='about_caption'>Skills.txt</p>
          </div>

          <div className='Experience'>
            <img className='txtfile' src={txtfile} alt='text file'  onClick={()=> handleClick(3)}/>
            <p className='about_caption'>Experience.txt</p>
          </div>

        </div>

        <div className='mfiles2'>
          <div className='Projects'>
            <img className='file' src={file} alt='text file'  onClick={()=> handleClick(4)}/>
            <p className='about_caption'>Projects</p>
          </div>

          <div className='Resume'>
            <a href='/My_Resume.pdf' target="_blank" rel="noopener noreferrer">
              <img className='resume' src={resume} alt='text file'/>
            </a>
            <p className='about_caption'>Resume.pdf <br />
              <span className="mdwn">(click to view)</span>
            </p>
          </div>

          <div className='Contact'>
            <img className='file' src={file} alt='text file'  onClick={()=> handleClick(6)}/>
            <p className='about_caption'>Contact</p>
          </div>
        </div>

        {activeContent == 1 && (
        <div className="content-box">
          <div className='content-header'>
            <img className='bur_icon' src={bru_icon} alt="bur_icon" />
            <p className='back' onClick={handleBack}>⬅ Back</p>
            <p className='content-title'>About Me.txt</p>

          </div>
          <div>
              <About />
            </div>
        </div>
        )}

        {activeContent == 2 && (
        <div className="content-box">
          <div className='content-header'>
            <img className='bur_icon' src={bru_icon} alt="bur_icon" />
            
            <p className='back' onClick={handleBack}>⬅ Back</p>
            <p className='content-title'>Skills.txt</p>

          </div>
          <div>
            <Skill />
          </div>
        </div>
        )}

        {activeContent == 3 && (
        <div className="content-box">
          <div className='content-header'>
            <img className='bur_icon' src={bru_icon} alt="bur_icon" />
            
            <p className='back' onClick={handleBack}>⬅ Back</p>
            <p className='content-title'>Experience.txt</p>

          </div>
          <div>
            <Experience />
          </div>
        </div>
        )}

        {activeContent == 4 && (
        <div className="filecontent-box">
          <div className='ccontent-header'>
            <div className='innerbox'>
              <p className='inner-content'>🏠︎ Home / Projects</p>
              <p className='threedot'>⋮</p>
            </div>
            <img className='bur_icon' src={bru_icon} alt="bur_icon" />
            <p className='back' onClick={handleBack}>⬅ Back</p>
          </div>
          
          <div className='file-files'>
            <div className='project1'>
              <img className='txtfile' src={txtfile} alt='text file'  onClick={()=> handleClick(7)}/>
              <p className='aabout_caption'>Project-1</p>
            </div>

            <div className='project2'>
              <img className='txtfile' src={txtfile} alt='text file'  onClick={()=> handleClick(8)}/>
              <p className='aabout_caption'>Project-2</p>
            </div>

            <div className='project3'>
              <img className='txtfile' src={txtfile} alt='text file'  onClick={()=> handleClick(9)}/>
              <p className='aabout_caption'>Project-3</p>
            </div>

            <div className='project4'>
              <img className='txtfile' src={txtfile} alt='text file'  onClick={()=> handleClick(10)}/>
              <p className='aabout_caption'>Project-4</p>
            </div>

          </div>
        </div>
        )}

        {activeContent == 7 && (
        <div className="content-box">
          <div className='content-header'>
            <img className='bur_icon' src={bru_icon} alt="bur_icon" />
            
            <p className='back' onClick={() => handleClick(4)}>⬅ Back</p>
            <p className='content-title'>Project-1.txt</p>

          </div>
          <div>
            <Pro1 />
          </div>
        </div>
        )}

        {activeContent == 8 && (
        <div className="content-box">
          <div className='content-header'>
            <img className='bur_icon' src={bru_icon} alt="bur_icon" />
            
            <p className='back' onClick={() => handleClick(4)}>⬅ Back</p>
            <p className='content-title'>Project-2.txt</p>

          </div>
          <div>
            <Pro2 />
          </div>
        </div>
        )}

        {activeContent == 9 && (
        <div className="content-box">
          <div className='content-header'>
            <img className='bur_icon' src={bru_icon} alt="bur_icon" />
      
            <p className='back' onClick={() => handleClick(4)}>⬅ Back</p>
            <p className='content-title'>Project-3.txt</p>

          </div>
          <div>
            <Pro3 />
          </div>
        </div>
        )}

        {activeContent == 10 && (
        <div className="content-box">
          <div className='content-header'>
            <img className='bur_icon' src={bru_icon} alt="bur_icon" />
      
            <p className='back' onClick={() => handleClick(4)}>⬅ Back</p>
            <p className='content-title'>Project-4.txt</p>

          </div>
          <div>
            <Pro4 />
          </div>
        </div>
        )}

        {activeContent == 6 && (
        <div className="filecontent-box">
          <div className='ccontent-header'>
            <div className='innerbox'>
              <p className='inner-content'>🏠︎ Home / Contact</p>
              <p className='threedot'>⋮</p>
            </div>
            <img className='bur_icon' src={bru_icon} alt="bur_icon" />
            <p className='back' onClick={handleBack}>⬅ Back</p>
          </div>

          <div className='mffile-files'>
            <div className='insta'>
              <img className='instagram' src={instagram} alt='text file'  
              onClick={()=> window.open('https://www.instagram.com/wannabejnz._?igsh=N3gyamZvdWFvb2Vt','_blank')}/>
              <p className='aabout_caption'>Instagram</p>
            </div>

            <div className='linked'>
              <img className='linkedin' src={linkedin} alt='text file'  
              onClick={()=> window.open('https://www.linkedin.com/in/jones24','_blank')}/>
              <p className='aabout_caption'>LinkedIn</p>
            </div>

            <div className='git'>
              <img className='github' src={github} alt='text file'  
              onClick={()=> window.open('https://github.com/Alzoro','_blank')}/>
              <p className='aabout_caption'>GitHub</p>
            </div>

            <div className='messageme'>
              <img className='exe' src={exe} alt='text file'  onClick={()=> handleClick(11)}/>
              <p className='aabout_caption'>Message Me</p>
            </div>
            
          </div>
        </div>
        )}

        {activeContent == 11 && (
        <div className="filecontent-box">
          <div className='ccontent-header'>
            <img className='bur_icon' src={bru_icon} alt="bur_icon" />
            <p className='back' onClick={() => handleClick(6)}>⬅ Back</p>

          </div>
          
          <div className='contact'>
            <h1>Contact Me</h1>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="name">Name:</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="form-row">
                <label htmlFor="email">Email:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="form-row">
                <label htmlFor="message">Message:</label>
                <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange} 
                required
                >

                </textarea>
              </div>

              <button type="submit">Send</button>
            </form>

          </div>
          
        </div>
        )}
        


      </div>
    </>
  );
}


function Skill(){
  return(
    <div className='skills-con'>
            <p>
              I not only work with these technologies but excellent in using them with best practices to 
              deliver highh-quality results, I have veen working with all these skills to build my 
              portfolio projects
            </p>
            <p className='p1'>Programming	Languages</p>
            <div className='skills1'>
              <div className='s1'>
                <img className='c' src={c} alt='c'/>
                <p className='aabout_caption'>C</p>
              </div>

              <div className='s2'>
                <img className='python' src={python} alt='python'/>
                <p className='aabout_caption'>Python</p>
              </div>

              <div className='s3'>
                <img className='bash' src={bash} alt='bash'/>
                <p className='aabout_caption'>Bash Script</p>
              </div>

              <div className='s4'>
                <img className='sql' src={mysql} alt='sql'/>
                <p className='aabout_caption'>My SQL</p>
              </div>

              <div className='s5'>
                <img className='makefile' src={makefile} alt='makefile'/>
                <p className='aabout_caption'>MakeFile</p>
              </div>

              <div className='s6'>
                <img className='latex' src={latex} alt='latex'/>
                <p className='aabout_caption'>LaTeX</p>
              </div>
            </div>
            <p className='p2'>Tools	and	Technologies</p>
            
            <div className='skills2'>
              <div className='s7'>
                <img className='nmap' src={nmap} alt='nmap'/>
                <p className='aabout_caption'>Nmap</p>
              </div>

              <div className='s8'>
                <img className='burp' src={burp} alt='burp'/>
                <p className='aabout_caption'>Burp Suite</p>
              </div>

              <div className='s9'>
                <img className='meta' src={img5} alt='metasploit'/>
                <p className='aabout_caption'>Metasploit</p>
              </div>

              <div className='s10'>
                <img className='wireshark' src={img6} alt='wireshark'/>
                <p className='aabout_caption'>Wireshark</p>
              </div>

              <div className='s11'>
                <img className='bettercap' src={bettercap} alt='bettercap'/>
                <p className='aabout_caption'>Bettercap</p>
              </div>

              <div className='s12'>
                <img className='air' src={aircrack} alt='air'/>
                <p className='aabout_caption'>Aircrack-ng</p>
              </div>

              <div className='s13'>
                <img className='john' src={john} alt='john'/>
                <p className='aabout_caption'>John the Ripper</p>
              </div>

              <div className='s14'>
                <img className='hydra' src={hydra} alt='hydra'/>
                <p className='aabout_caption'>Hydra</p>
              </div>

              <div className='s15'>
                <img className='sqlmap' src={sqlmap} alt='sqlmap'/>
                <p className='aabout_caption'>sqlmap</p>
              </div>

              <div className='s16'>
                <img className='hashcat' src={hashcat} alt='hashcat'/>
                <p className='aabout_caption'>Hashcat</p>
              </div>

              <div className='s17'>
                <img className='splunk' src={splunk} alt='splunk'/>
                <p className='aabout_caption'>Splunk</p>
              </div>

              <div className='s18'>
                <img className='autopsy' src={autopsy} alt='autopsy'/>
                <p className='aabout_caption'>Autopsy</p>
              </div>

              <div className='s19'>
                <img className='canva' src={canva} alt='canva'/>
                <p className='aabout_caption'>Canva</p>
              </div>

              <div className='s20'>
                <img className='figma' src={figma} alt='figma'/>
                <p className='aabout_caption'>Figma</p>
              </div>

              <div className='s21'>
                <img className='git' src={github} alt='git'/>
                <p className='aabout_caption'>GitHub</p>
              </div>
            </div>
            <p className='p3'>Web Development</p>
            <div className='skills3'>
              <div className='s22'>
                <img className='css' src={css} alt='css'/>
                <p className='aabout_caption'>CSS</p>
              </div>

              <div className='s23'>
                <img className='html' src={html} alt='html'/>
                <p className='aabout_caption'>HTML</p>
              </div>

              <div className='s24'>
                <img className='js' src={js} alt='js'/>
                <p className='aabout_caption'>JavaScript</p>
              </div>

              <div className='s25'>
                <img className='react' src={react} alt='react'/>
                <p className='aabout_caption'>React</p>
              </div>
            </div>
            <p className='p4'>Technical</p>
            <div className='skills4'>
              <div className='s26'>
                <img className='et' src={et} alt='et'/>
                <p className='aabout_caption'>Ethical Hacking</p>
              </div>

              <div className='s27'>
                <img className='net' src={net} alt='net'/>
                <p className='aabout_caption'>Networking</p>
              </div>

              <div className='s28'>
                <img className='linux' src={linux} alt='linux'/>
                <p className='aabout_caption'>Linux</p>
              </div>

              <div className='s29'>
                <img className='pen' src={pen} alt='pen'/>
                <p className='aabout_caption'>Penetration Testing</p>
              </div>
            </div>
            <p className='bottom'>&nbsp;</p>

            
          </div>
  );
}

function Experience() {
  return (

  <div class="exp-con">
    <div className='space0'></div>
    <div class="experience-row">
      <div class="experience-label">Company:</div>
      <div>NTC	Logistics	India	[P]	Limited</div>
    </div>
    <div class="experience-row">
      <div class="experience-label">Duration:</div>
      <div>October 2024 - October 2024</div>
    </div>
    <div class="experience-row">
      <div class="experience-label">Role:</div>
      <div>Security Auditor Intern</div>
    </div>
    <div class="experience-row">
      <div class="experience-label">Experience:</div>
      <div className='list'>
        <ul>
          <li>Contributed to securing NTC's systems by identifying and patching vulnerabilities during a Security Auditor internship.</li>
          <li>Analyzed firewall technologies and rules, improving network security understanding.</li>
          <li>Strengthened threat mitigation strategies by applying practical cybersecurity principles.</li>
        </ul>
      </div>
    </div>

    <hr className='line1'/>

    <div className='space1'></div>

    <div class="experience-row">
      <div class="experience-label">Company:</div>
      <div> Internship	Studio</div>
    </div>
    <div class="experience-row">
      <div class="experience-label">Duration:</div>
      <div>August 2024 - September 2024</div>
    </div>
    <div class="experience-row">
      <div class="experience-label">Role:</div>
      <div>Intern</div>
    </div>
    <div class="experience-row">
      <div class="experience-label">Experience:</div>
      <div className='list'>
        <ul>
          <li> Worked with advanced cybersecurity tools, enhancing skills in identifying and mitigating system
            vulnerabilities.</li>
          <li>Collaborated with a supportive team, receiving mentorship to refine technical expertise and practical
            application of cybersecurity concepts.</li>
        </ul>
      </div>
    </div>

    <hr className='line2'/>

     <div className='space2'></div>

    <div class="experience-row">
      <div class="experience-label">Company:</div>
      <div> Tata	Cybersecurity	Security	Analyst	Job	Simulation	on	Forage</div>
    </div>
    <div class="experience-row">
      <div class="experience-label">Duration:</div>
      <div>January 2025 </div>
    </div>
    <div class="experience-row">
      <div class="experience-label">Role:</div>
      <div>Intern</div>
    </div>
    <div class="experience-row">
      <div class="experience-label">Experience:</div>
      <div className='list'>
        <ul>
          <li>  Completed a job simulation involving identity and access management (IAM) for Tata Consultancy Services,
            collaborating with a Cybersecurity Consulting team.</li>
          <li> Acquired expertise in IAM principles, cybersecurity best practices, and strategic alignment with business
            objectives.</li>
            <li>Delivered comprehensive documentation and presentations, showcasing the ability to communicate
              complex technical concepts effectively.</li>
        </ul>
      </div>
    </div>
    <div className='space3'></div>

  </div>
  );
}

function Pro1() {
  return(
    <div className="pro1-con">
      <div className="ttitle">Adaptive Speed Limiter</div>

      <div className="pro-con">
        <div className="pexperience-row">
          <div className="pexperience-label">Domain:</div>
          <div>Automotive Safety Systems</div>
        </div>

        <div className="pexperience-row">
          <div className="pexperience-label">Technology Used:</div>
          <div className="plist">
            <ul>
              <li>Arduino UNO – for controlling system logic and sensor integration</li>
              <li>RF Transmitter & Receiver – for wireless communication between zones and the vehicle</li>
              <li>Motor Driver Module (L298N) – to control motor speed based on limit rules</li>
              <li>Embedded C – for programming the microcontroller logic</li>
              <li>Speed Sensors / DC Motor Simulation – for vehicle speed control simulation</li>
            </ul>
          </div>
        </div>

        <div className="pexperience-row">
          <div className="pexperience-label">Knowledge Gained:</div>
          <div className="plist">
            <ul>
              <li>Embedded C programming for real-time systems</li>
              <li>Interfacing Arduino with RF modules and motor drivers</li>
              <li>Wireless communication using RF technology</li>
              <li>Implementing logic to simulate speed control based on external signals</li>
              <li>Working with control systems and actuators</li>
              <li>Debugging and testing embedded hardware prototypes</li>
            </ul>
          </div>
        </div>

        <div className="pexperience-row">
          <div className="pexperience-label">Project Description:</div>
          <div className="plist">
            <ul>
              <li>The Adaptive Speed Limiter is a prototype system developed to simulate and enforce 
                intelligent speed control in vehicles, particularly in critical zones like schools, 
                hospitals, or accident-prone areas.</li>

              <li>Each restricted zone is equipped with an RF transmitter that broadcasts a predefined 
                speed limit. When the vehicle enters the zone, the RF receiver picks up the signal, and the
                 system adjusts the motor speed accordingly via a motor driver module.</li>

              <li>This project focuses on demonstrating how wireless communication can be used to enforce 
                road safety without relying on human intervention.</li>

            </ul>
          </div>
        </div>

        <div className="pexperience-row">
          <div className="pexperience-label">Key Features:</div>
          <div className="plist">
            <ul>
              <li>RF-Based Zone Detection – detects special zones wirelessly</li>
              <li>Automatic Speed Control – adjusts speed based on received zone signal</li>
              <li>Embedded Logic – programmed in Embedded C for real-time processing</li>
              <li>Emergency Override – allows safe manual control when needed</li>
              <li>Modular Design – easy to scale or integrate with real vehicles</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='pspace'></div>


    </div>
  );
}

function Pro2(){
  return (

    <div className='pro2-con'>
    <div className='ttitle'>Dynamic Honeytoken Monitoring System</div>
    <div className='pro-con'>
      
      <div class="pexperience-row">
        <div class="pexperience-label">GitHub Link:</div>
        <div>
           <a href="https://github.com/Alzoro/HoneyToken-for-file_system.git" target="_blank" rel="noopener noreferrer">
              Click Here
            </a>
        </div>
      </div>
      
      <div class="pexperience-row">
        <div class="pexperience-label">Domain:</div>
        <div>File System Security</div>
      </div>

      <div class="pexperience-row">
        <div class="pexperience-label">Technology Used:</div>
        <div className='plist'>
          <ul>
            <li>Python – for implementing monitoring, logging, and automation logic</li>
            <li>Linux (Debian-based) – used for file system monitoring and process backgrounding</li>
            <li>Telegram Bot API – to deliver real-time alerts to security personnel</li>
            <li>Watchdog module – for efficient real-time file system event tracking</li>
            <li>Shell scripting – for managing background execution and startup services</li>
          </ul>
        </div>
      </div>

      <div class="pexperience-row">
        <div class="pexperience-label">Knowledge Gained:</div>
        <div className='plist'>
          <ul>
            <li>Implementation of deception-based security using honeytokens</li>
            <li>Real-time file system monitoring using Linux-native tools and Python libraries</li>
            <li>Automation of alerting mechanisms using Telegram bots</li>
            <li>Designing persistent background daemons for continuous monitoring</li>
            <li>Managing access logs and handling unauthorized access analytics</li>
          </ul>
        </div>
      </div>

      <div class="pexperience-row">
        <div class="pexperience-label">Project Description:</div>
        <div className='plist'>
          <ul>
            <li>The Dynamic Honeytoken Monitoring System is a cybersecurity solution designed to detect and 
              respond to unauthorized access attempts within sensitive file environments. The system deploys 
              honeytokens (decoy files that appear valuable but serve no real function) strategically 
              placed in monitored directories. Any interaction with these files (read, write, delete) 
              indicates a potential insider threat or system compromise.</li>

            <li>Once a honeytoken is triggered, the system logs the activity and immediately sends a 
              real-time alert via a Telegram bot, allowing system administrators to take swift action. 
              The system operates as a background process on Linux, ensuring continuous and stealthy 
              monitoring without impacting performance.</li>

            <li>By combining deception with automated monitoring and alerting, this project demonstrates 
              a modern approach to insider threat detection and system defense.</li>

          </ul>
        </div>
      </div>

      <div class="pexperience-row">
        <div class="pexperience-label">Key Features:</div>
        <div className='plist'>
          <ul>
            <li>Honeytoken Deployment – strategically placed decoy files to lure unauthorized access</li>
            <li>Background Monitoring – runs silently as a daemon for real-time detection</li>
            <li>Instant Telegram Alerts – notifies admins of suspicious activity immediately</li>
            <li>Detailed Log Management – maintains logs for forensic analysis and audit trails</li>
            <li>Lightweight & Scalable – minimal system resource usage, adaptable to multiple systems</li>
          </ul>
        </div>
      </div>
    </div>
    <div className='pspace'></div>

</div>

  );
}


function Pro3() {
  return (
    <div className='pro3-con'>
    <div className='ttitle'>IoT-Enabled WiFi Network Testing Tool (NT.Watchdog)</div>
    <div className='pro-con'>

      <div class="pexperience-row">
        <div class="pexperience-label">GitHub Link:</div>
        <div>
           <a href="https://github.com/Alzoro/IoT-Enabled-Portable-Cybersecurity-Device-for-WiFi-Network-Testing.git" target="_blank" rel="noopener noreferrer">
              Click Here
            </a>
        </div>
      </div>
      
      <div class="pexperience-row">
        <div class="pexperience-label">Domain:</div>
        <div>Cybersecurity</div>
      </div>

      <div class="pexperience-row">
        <div class="pexperience-label">Technology Used:</div>
        <div className='plist'>
          <ul>

            <li>ESP32 Dev Module – core microcontroller for Wi-Fi attacks and web hosting</li>
            <li>SPIFFS (Serial Peripheral Interface Flash File System) – to store and serve static web content</li>
            <li>Embedded C / Arduino IDE – for firmware development</li>
            <li>HTML, CSS, JavaScript – for building the mobile-friendly Web UI</li>

          </ul>
        </div>
      </div>

      <div class="pexperience-row">
        <div class="pexperience-label">Knowledge Gained:</div>
        <div className='plist'>
          <ul>

            <li>Development of embedded Wi-Fi tools using ESP32</li>
            <li>Simulating real-world attacks like deauthentication and Evil Twin in a lab-safe environment</li>
            <li>Web-based interface design for resource-constrained microcontrollers</li>
            <li>Using SPIFFS to host static websites directly from the ESP32</li>
            <li>RSSI analysis and scanning of wireless networks</li>

          </ul>
        </div>
      </div>

      <div class="pexperience-row">
        <div class="pexperience-label">Project Description:</div>
        <div className='plist'>
          <ul>
            <li>NT.Watchdog is an IoT-based Wi-Fi network testing tool built using the ESP32 microcontroller
              , designed for ethical hacking, educational demonstrations, and network defense research.
               It allows users to simulate wireless attacks such as deauthentication and Evil Twin in a 
               controlled and responsible environment.</li>

            <li>The system features a built-in web interface, accessible via a smartphone or laptop, that 
              enables the user to scan nearby networks, analyze signal strength, and deploy testing modules.
               The Deauthentication Module helps test how resilient networks are to disconnection attacks,
                particularly under WPA2/WPA3 with PMF. The Evil Twin Module creates a fake access point with 
                a captive portal to assess the client-side resilience against phishing and HTTPS-related
                 weaknesses like HSTS and certificate pinning.</li>

            <li>The entire interface and firmware run independently from the ESP32, with web assets stored
               in SPIFFS, making this a truly portable and self-contained penetration testing toolkit.</li>

          </ul>
        </div>
      </div>

      <div class="pexperience-row">
        <div class="pexperience-label">Key Features:</div>
        <div className='plist'>
          <ul>
            <li>Wi-Fi Network Scanner – lists nearby SSIDs with real-time RSSI levels</li>
            <li>Signal Strength Analyzer – target-specific RSSI monitoring</li>
            <li>Deauthentication Module – simulates disconnection attacks to test PMF</li>
            <li>Evil Twin Access Point – generates fake APs with phishing portals</li>
            <li>Responsive Web UI – accessible from any device, no internet needed</li>
            <li>SPIFFS Hosting – serves static content directly from microcontroller flash</li>
          </ul>
        </div>
      </div>
    </div>
    <div className='pspace'></div>

</div>
    
  );
}

function Pro4() {
  return (
    <div className='pro4-con'>
    <div className='ttitle'>Cyber Incident Response Simulation Platform (CyberSim)</div>
    <div className='pro-con'>

      <div class="pexperience-row">
        <div class="pexperience-label">GitHub Link:</div>
        <div>
           <a href="https://github.com/Alzoro/Cyber-Incident-Response-Simulation-Platform.git" target="_blank" rel="noopener noreferrer">
              Click Here
            </a>
        </div>
      </div>
      
      <div class="pexperience-row">
        <div class="pexperience-label">Domain:</div>
        <div>Cybersecurity, Simulation & Training</div>
      </div>

      <div class="pexperience-row">
        <div class="pexperience-label">Technology Used:</div>
        <div className='plist'>
          <ul>

            <li>Languages: JavaScript (ES6+), HTML5, CSS3</li>
            <li>Framework: Node.js, Express.js</li>
            <li>Templating Engine: EJS</li>
            <li>Libraries: Anime.js, Font Awesome</li>
            <li>Middleware: Helmet, Compression, Morgan</li>
            <li>APIs: NewsAPI.org</li>
            <li>Version Control: Git</li>

          </ul>
        </div>
      </div>

      <div class="pexperience-row">
        <div class="pexperience-label">Knowledge Gained:</div>
        <div className='plist'>
          <ul>

            <li>Developed in-depth understanding of incident response workflows and SIEM log analysis</li>
            <li>Strengthened skills in Express.js and front-end animations with Anime.js</li>
            <li>Gained practical experience in API integration and middleware security practices</li>
            <li>Explored gamification and user engagement techniques for technical learning platforms</li>

          </ul>
        </div>
      </div>

      <div class="pexperience-row">
        <div class="pexperience-label">Project Description:</div>
        <div className='plist'>
          <ul>
            <li>CyberSim is an advanced web-based incident response simulation platform designed to train 
              cybersecurity teams and students through interactive, real-world scenarios. It offers a
               hands-on approach to threat detection, response strategies, and log investigation by 
               simulating cyber-attacks like phishing, malware infiltration, and data breaches.</li>

            <li>Upon selecting a scenario, users are guided through an Attack Overview and Defensive 
              Strategy, followed by an animated Simulation Console with real-time progress indicators. 
              A live Threat Intelligence Feed provides contextual news, while the SIEM Log Analysis tool 
              enables anomaly detection in synthetic logs. The Incident Response Playbook details stepwise 
              handling strategies, complemented by a Risk Assessment Module using an interactive matrix. A 
              Virtual Security Mentor chatbot offers real-time support, while Gamified Metrics and 
              leaderboards encourage learning. Finally, users generate detailed Incident Reports to conclude
               their session.</li>

            <li>Ideal for classrooms, training labs, and cybersecurity workshops, CyberSim bridges theory 
              and practice in an engaging, immersive format.</li>

          </ul>
        </div>
      </div>

      <div class="pexperience-row">
        <div class="pexperience-label">Key Features:</div>
        <div className='plist'>
          <ul>
            <li>Scenario-Based Training: Select from multiple simulated attack cases for guided learning</li>
            <li>Simulation Console: Step-by-step, animated incident walkthrough with interactive controls</li>
            <li>Threat Intelligence Feed: Real-time cyber news to correlate with scenario context</li>
            <li>SIEM Log Analysis: Investigate synthetic logs to trace suspicious activity</li>
            <li>Incident Response Playbook: Interactive timeline of actions for each scenario</li>
            <li>Risk Assessment Matrix: Evaluate and visualize risk impact vs. likelihood</li>
            <li>Virtual Security Mentor: Built-in chatbot for hints, guidance, and feedback</li>
            <li>Incident Report Generator: Auto-generate detailed reports based on user inputs</li>
          </ul>
        </div>
      </div>
    </div>
    <div className='pspace'></div>

</div>
    
  );
}


function About(){
  return (
    <div className='about-con'>

      <div className='atitle'>
        I'm JONES P<br />
        <span className='sub-tit'>Penetration tester. Ethical hacker.</span>
      </div>

      <div className='meimg'>
        <img src={me} className='me' alt="me" />
      </div>
      
      <div className='con-about'>
        <div className='mspace'></div>
        <p>
        I am Jones P, a B.Tech Computer Science Engineering student specializing in Cybersecurity at Vel Tech Rangarajan Dr. 
        Sagunthala R&D Institute of Science and Technology, Chennai. Passionate about ethical hacking and penetration testing, 
        I actively work with tools like Burp Suite, Nmap, Bettercap, and Metasploit to explore vulnerabilities and enhance system security. 
        I am proficient in Python, C, HTML, CSS, JavaScript, and React, and I also have hands-on experience in building responsive websites. 
        Additionally, I have a strong interest in UI/UX design and work with tools like Figma and Canva to visualize and plan digital interfaces. 
        My key projects include an Adaptive Speed Limiter using Arduino for dynamic vehicle speed control and a Dynamic Honeytoken Monitoring System 
        that detects unauthorized file access and alerts users in real-time via Telegram. I am constantly exploring new attack vectors, security 
        mechanisms, and real-world vulnerabilities to sharpen my offensive and defensive cybersecurity skills.
        </p><br/>
        <p>
          Tech enthusiast.
          Fast Learner.
          Team Work.
          Time Management.
          Details Master.
          Event Management.
          Adaptability.
          Positivity.
          Active Listening.
          Problem Solving.
        </p>
        <div className='mspace'></div>
      </div>
     

    </div>
  );
}


function App() {
  return (
    <>
      <div className="container">
        <Background/>
      </div>
    </>
  );
}

export default App;
