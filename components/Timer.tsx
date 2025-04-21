import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(25 * 60); // 25 минут в секундах

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        clearInterval(interval);
        alert('Time is up!');
      }
    }, 1000);

    return () => clearInterval(interval); // Очистка интервала при размонтировании
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div>
      <h2>Pomodoro Timer</h2>
      <p>{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</p>
    </div>
  );
};

export default Timer;
