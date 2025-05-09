import React, { useState, useEffect } from 'react';
import './App.css';
import bg from './images/background.png';
import fig1 from './images/fig1.png';
import fig2 from './images/fig2.png';
import { getFormattedDate } from './script.js';
import { getFormattedTime } from './script.js';


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
    <div className="homme">

      <div className="background">
        <img className="pc_bimg" src={bg} alt='backgroung image' />
      </div>

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

      <div className='task-bar'></div>

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
