import React, { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minuits, setMinutes] = useState(0);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem('seconds')) {
      localStorage.setItem('seconds', JSON.stringify(seconds));
    } else if (!localStorage.getItem('minuits')) {
      localStorage.setItem('minuits', JSON.stringify(minuits));
    } else if (!localStorage.getItem('hour')) {
      localStorage.setItem('hour', JSON.stringify(hour));
    } else {
      setHour(JSON.parse(localStorage.getItem('hour')));
      setMinutes(JSON.parse(localStorage.getItem('minuits')));
      setSeconds(JSON.parse(localStorage.getItem('seconds')));
    }
  }, []);

  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      localStorage.setItem('seconds', JSON.stringify(seconds + 1));
      if (seconds === 59) {
        setMinutes(minuits + 1);
        localStorage.setItem('minuits', JSON.stringify(minuits + 1));
        setSeconds(0);
      } else if (minuits === 59) {
        setHour(hour + 1);
        setMinutes(0);
        localStorage.setItem('hour', JSON.stringify(hour + 1));
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div className='  flex justify-items-center z-[500] '>
      <div className=' '>
        <h1>
          {hour < 10 ? '0' + hour : hour}:
          {minuits < 10 ? '0' + minuits : minuits}:
          {seconds < 10 ? '0' + seconds : seconds}
        </h1>
      </div>
    </div>
  );
}

export default Timer;
