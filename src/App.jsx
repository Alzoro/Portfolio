import React, { useState, useEffect } from 'react';
import './App.css';
import fig1 from './images/fig1.png';
import fig2 from './images/fig2.png';
import { getFormattedDate } from './script.js';
import { getFormattedTime } from './script.js';
import img1 from './images/icon/1.png';
import img2 from './images/icon/2.png';
import img3 from './images/icon/3.png';
import img4 from './images/icon/4.png';
import img5 from './images/icon/5.png';
import img6 from './images/icon/6.png';
import img7 from './images/icon/7.png';
import img8 from './images/icon/8.png';


function Background() {

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
    }, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

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

      </div>

      <div className="mobile">
        
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
