import React, { useState, useRef } from 'react';

export default function Stopwatch() {

  const [time, setTime] = useState(0);
  const [castTime, setcastime] = useState([]);
  const intervalRef = useRef(null);


  const startTimer = () => {

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  };


  const stopTimer = () => {

    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {

    setTime(0);
    setcastime([]);
  };

  const cast = () => {

    setcastime((prev) => [...prev,time]);
  };

  const Time = (time) => {

    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:
    ${seconds.toString().padStart(2, '0')}: ${milliseconds.toString().padStart(3, '0')}`
  }

  return (
    
    <div className='container'>
      <h1>{Time(time)}</h1>
      <button className='start' onClick={startTimer}>Start</button>
      <button className='pause' onClick={stopTimer}>Pause</button>
      <button className='reset' onClick={resetTimer}>Reset</button>
      <button className='cast' onClick={cast}>Cast</button>
      <div>
        <h3>Cast</h3>
      {castTime.length > 0 && (
        <ul>
          {castTime.map((lapTime, index) => (
            <li key={index}>{Time(lapTime)}</li>
          ))}
        </ul>
      )}
      </div>
    </div>
  );
}
