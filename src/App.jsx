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
          <p className='aaa'>This is the dev content asd asd asda asd asd asd asd asd  opened by clicking the image.</p>
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

          <div className='file-files'>
            <div className='insta'>
              <img className='instagram' src={instagram} alt='text file'  onClick={()=> handleClick(7)}/>
              <p className='aabout_caption'>Instagram</p>
            </div>

            <div className='linked'>
              <img className='linkedin' src={linkedin} alt='text file'  onClick={()=> handleClick(7)}/>
              <p className='aabout_caption'>LinkedIn</p>
            </div>

            <div className='git'>
              <img className='github' src={github} alt='text file'  onClick={()=> handleClick(7)}/>
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
          <p className='aaa'>This is the dev content asd asd asda asd asd asd asd asd  opened by clicking the image.</p>
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

          <div className='files'>
            
          </div>
        </div>
        )}
        


      </div>
    </>
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
