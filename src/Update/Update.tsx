import { useState, useEffect } from 'react';

//https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks
export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  //const [isActive, setIsActive] = useState(false);
  const [message, setMessage] = useState('Last Updated: Just now');

  // function toggle() {
  //   setIsActive(!isActive);
  // }

  function reset() {
    setSeconds(0);
    setMessage('Last Updated: Just now');
    //setIsActive(false);
  }

  useEffect(() => {
    let interval: any ;
    //if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    //} else if (!isActive && seconds !== 0) {
      //clearInterval(interval);
    if (seconds === 10) {
      setMessage(`Last Updated: ${seconds} seconds ago`);
    } else if (seconds >= 60) {
      setMessage(`Last Updated: ${Math.floor(seconds / 60)} minutes ago`);
    }
    //}

    return () => clearInterval(interval);
  }, [seconds]);return (

      <div className="time">
        {/* {seconds}s  */}
        <h4>{message}</h4>
        {/* <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button> */}
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>

  );
};
