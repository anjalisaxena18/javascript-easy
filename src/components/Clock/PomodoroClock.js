import React, { useState, useEffect } from 'react';
import './PomodoroClock.css';

function PomodoroClock() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);


  const beep = (duration = 1000) => {
    const sound = new Audio('/beep.mp3');
    sound.play();
  

    setTimeout(() => {
      sound.pause();
      sound.currentTime = 0;
    }, duration); 
  };

  useEffect(() => {
    let timer = null;

    if (isActive) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }

    if (timeLeft === 0) {
      beep();
      if (isBreak) {
        setTimeLeft(25 * 60);
        setIsBreak(false);
      } else {
        setTimeLeft(5 * 60);
        setIsBreak(true);
      }
    }

    return () => clearInterval(timer);
  }, [isActive, timeLeft, isBreak]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleStartPause = () => {
    setIsActive(!isActive);
    beep();
  };

  const handleReset = () => {
    setIsActive(false);
    setTimeLeft(25 * 60);
    setIsBreak(false);
    beep();
  };

  return (
    <div className="pomodoro-container">
      <h1 className="pomodoro-heading">Pomodoro Clock</h1>
      <div className="pomodoro-box">
        <div className="status-label">
          {isBreak ? "Break Time" : "Work Time"}
        </div>
        <div className="timer-display">
          {formatTime(timeLeft)}
        </div>
        <div className="control-buttons">
          <button className="start-btn" onClick={handleStartPause}>
            {isActive ? "Pause" : "Start"}
          </button>
          <button className="reset-btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default PomodoroClock;
