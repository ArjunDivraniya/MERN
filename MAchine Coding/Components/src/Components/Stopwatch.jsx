import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [customMin, setCustomMin] = useState("");

  // Timer logic
  useEffect(() => {
    let timer;

    if (isRunning && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }

    if (seconds === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, seconds]);

  // Convert seconds to MM:SS
  const formatTime = () => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  // Preset timer
  const setPreset = (min) => {
    setSeconds(min * 60);
    setIsRunning(false);
  };

  // Custom timer
  const setCustomTimer = () => {
    if (!customMin || customMin <= 0) return;
    setSeconds(customMin * 60);
    setIsRunning(false);
    setCustomMin("");
  };

  return (
    <div style={styles.container}>
      <h2>⏱️ Countdown Stopwatch</h2>

      <h1 style={styles.time}>{formatTime()}</h1>

      {/* Preset Buttons */}
      <div style={styles.row}>
        <button onClick={() => setPreset(1)}>1 Min</button>
        <button onClick={() => setPreset(5)}>5 Min</button>
        <button onClick={() => setPreset(30)}>30 Min</button>
      </div>

      {/* Custom Timer */}
      <div style={styles.row}>
        <input
          type="number"
          placeholder="Custom Min"
          value={customMin}
          onChange={(e) => setCustomMin(e.target.value)}
          style={styles.input}
        />
        <button onClick={setCustomTimer}>Set</button>
      </div>

      {/* Controls */}
      <div style={styles.row}>
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Stop</button>
        <button
          onClick={() => {
            setIsRunning(false);
            setSeconds(0);
          }}
        >
          End
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "320px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    background: "#f4f4f4",
  },
  time: {
    fontSize: "40px",
    margin: "20px 0",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "15px",
  },
  input: {
    width: "120px",
    padding: "5px",
  },
};

export default Stopwatch;
