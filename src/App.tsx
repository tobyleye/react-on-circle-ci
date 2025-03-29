import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(10);
  const interval = useRef(-1);
  const [gameOver, setGameOver] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    interval.current = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  useEffect(() => {
    if (seconds === 0 && interval.current !== -1) {
      clearInterval(interval.current);
      setGameOver(true);
    }
  }, [seconds]);

  const handleClick = () => {
    clearInterval(interval.current);
    setClicked(true);
  };

  return (
    <div>
      <h3>A useless app</h3>
      {clicked ? (
        <p>Nice, you were quick enough</p>
      ) : gameOver ? (
        <p>No way... you loose!</p>
      ) : (
        <button onClick={handleClick}>click me in {seconds} seconds</button>
      )}
    </div>
  );
}

export default App;
