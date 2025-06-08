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
            <img className='resume' src={resume} alt='text file'  onClick={()=> handleClick(5)}/>
            <p className='about_caption'>Resume.pdf <br />
              <span className="dwn">(click to download)</span>
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
          <p className='aaa'>This is the dev content asd asd asda asd asd asd asd asd  opened by clicking the image.</p>
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
              <p className='aabout_caption'>Adaptive Speed Limiter </p>
            </div>

            <div className='project2'>
              <img className='txtfile2' src={txtfile} alt='text file'  onClick={()=> handleClick(8)}/>
              <p className='aabout_caption'>Dynamic Honeytoken Monitoring System</p>
            </div>

            <div className='project3'>
              <img className='txtfile3' src={txtfile} alt='text file'  onClick={()=> handleClick(9)}/>
              <p className='aabout_caption'>Portable WiFi Network Testing Device</p>
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
            <p className='content-title'>Adaptive Speed Limiter.txt</p>

          </div>
          <p className='aaa'>This is the dev content asd asd asda asd asd asd asd asd  opened by clicking the image.</p>
        </div>
        )}

        {activeContent == 8 && (
        <div className="content-box">
          <div className='content-header'>
            <img className='bur_icon' src={bru_icon} alt="bur_icon" />
            <img className='open' src={open} alt="open" />
            <p className='back' onClick={() => handleClick(4)}>⬅ Back</p>
            <p className='content-title'>Dynamic Honeytoken Monitoring System.txt</p>

          </div>
          <p className='aaa'>This is the dev content asd asd asda asd asd asd asd asd  opened by clicking the image.</p>
        </div>
        )}

        {activeContent == 9 && (
        <div className="content-box">
          <div className='content-header'>
            <img className='bur_icon' src={bru_icon} alt="bur_icon" />
            <img className='open' src={open} alt="open" />
            <p className='back' onClick={() => handleClick(4)}>⬅ Back</p>
            <p className='content-title'>Portable WiFi Network Testing Device.txt</p>

          </div>
          <p className='aaa'>This is the dev content asd asd asda asd asd asd asd asd  opened by clicking the image.</p>
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
              <img className='exe' src={exe} alt='text file'  onClick={()=> handleClick(10)}/>
              <p className='aabout_caption'>Message Me</p>
            </div>
            
          </div>
        </div>
        )}

        {activeContent == 10 && (
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
            <img className='resume' src={resume} alt='text file'  onClick={()=> handleClick(5)}/>
            <p className='about_caption'>Resume.pdf <br />
              <span className="mdwn">(click to download)</span>
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
          <p className='aaa'>This is the dev content opened by clicking the image.</p>
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
          <p className='aaa'>This is the dev content asd asd asda asd asd asd asd asd  opened by clicking the image.</p>
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
            <p className='aabout_caption'>Adaptive Speed Limiter </p>
          </div>

          <div className='project2'>
            <img className='txtfile2' src={txtfile} alt='text file'  onClick={()=> handleClick(8)}/>
            <p className='aabout_caption'>Dynamic Honeytoken Monitoring System</p>
          </div>

          <div className='project3'>
            <img className='txtfile3' src={txtfile} alt='text file'  onClick={()=> handleClick(9)}/>
            <p className='aabout_caption'>Portable WiFi Network Testing Device</p>
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
            <p className='content-title'>Adaptive Speed Limiter.txt</p>

          </div>
          <p className='aaa'>This is the dev content asd asd asda asd asd asd asd asd  opened by clicking the image.</p>
        </div>
        )}

        {activeContent == 8 && (
        <div className="content-box">
          <div className='content-header'>
            <img className='bur_icon' src={bru_icon} alt="bur_icon" />
            <img className='open' src={open} alt="open" />
            <p className='back' onClick={() => handleClick(4)}>⬅ Back</p>
            <p className='content-title'>Dynamic Honeytoken Monitoring System.txt</p>

          </div>
          <p className='aaa'>This is the dev content asd asd asda asd asd asd asd asd  opened by clicking the image.</p>
        </div>
        )}

        {activeContent == 9 && (
        <div className="content-box">
          <div className='content-header'>
            <img className='bur_icon' src={bru_icon} alt="bur_icon" />
            <img className='open' src={open} alt="open" />
            <p className='back' onClick={() => handleClick(4)}>⬅ Back</p>
            <p className='content-title'>Portable WiFi Network Testing Device.txt</p>

          </div>
          <p className='aaa'>This is the dev content asd asd asda asd asd asd asd asd  opened by clicking the image.</p>
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
              <img className='exe' src={exe} alt='text file'  onClick={()=> handleClick(10)}/>
              <p className='aabout_caption'>Message Me</p>
            </div>
            
          </div>
        </div>
        )}

        {activeContent == 10 && (
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
