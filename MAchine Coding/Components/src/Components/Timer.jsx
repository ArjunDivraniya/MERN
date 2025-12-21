import React, {useState, useRef } from 'react'

const Timer = () => {
  const [time, setTime] = useState(0);
  const timerIdRef = useRef(null);
  const handleStart = () => {
    timerIdRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000)
  }
  const handleStop = () => {
    clearInterval(timerIdRef.current);
  }
  const handleReset = () => {
    setTime(0);
    clearInterval(timerIdRef.current);
  }

  const formatTime = () => {
    const min =Math.floor(time / 60);
    const sec = time % 60;
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }
 

  return (
    <>
      <h1>Timer Components</h1>

      <div>
        Time : {formatTime()}
      </div>

      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>

    </>
  )
}

export default Timer