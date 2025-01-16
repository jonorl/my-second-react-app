import { useState, useEffect } from 'react';

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function Clock({ time }) {
    return (
      <>
        <h1>The time is: {time}</h1>
      </>
    );
  }

  export default function TellTime() {
    const time = useTime();
    return (
      <Clock time={time.toLocaleTimeString()} />
    );
  }
  