import React, { useEffect } from 'react';
import './Time.css';
import Weather from '../Weather/Weather';
import { getTimeOfDay } from '../helpers';

export const Time = () =>  {
  const timeDavid = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago', hour12: false });
  const timeOlena = new Date().toLocaleString('en-US', { timeZone: 'Europe/Kiev'});

  const timeDavidObj = new Date(timeDavid);
  const timeOlenaObj = new Date(timeOlena);

  const[greeting1, setGreeting1] = React.useState('good morning');
  const[greeting2, setGreeting2] = React.useState('good morning');
  const[style1, setStyle1] = React.useState('');
  const [style2, setStyle2] = React.useState('');
  const[time1, setTime1] = React.useState(timeDavidObj.toLocaleTimeString());
  const[time2, setTime2] = React.useState(timeOlenaObj.toLocaleTimeString());

  const greetingDavid = getTimeOfDay(timeDavidObj);
  const greetingOlena = getTimeOfDay(timeOlenaObj);


  useEffect(() => {
  setGreeting1(greetingDavid[0]);
  setGreeting2(greetingOlena[0]);
  setStyle1(greetingDavid[1]);
  setStyle2(greetingOlena[1]);
  setTimeout(() => {
    setTime1(timeDavidObj.toLocaleTimeString());
  }, 1000);
  setTimeout(() => {
    setTime2(timeOlenaObj.toLocaleTimeString());
  }, 1000);
  }, [greeting1, greeting2, greetingDavid, greetingOlena, timeDavidObj, timeOlenaObj]);

  return (
    <>
    <div className='time-wrapper'>
      <div style={{ backgroundImage: `url(${style1})`, backgroundRepeat:'no-repeat', backgroundPosition: '50% 60%'}}>
      <span>David's time: </span>
      <span>{time1} </span>
      <span>{greeting1} </span>
      </div>
      {/* <img src={style1} alt="daytime" className='day-time'/> */}

      <div style={{ backgroundImage: `url(${style2})`, backgroundRepeat:'no-repeat', backgroundPosition: '50% 60%'}}>
        <span>Olena's time:</span>
        <span>{time2}</span>
        <span>{greeting2}</span>
        </div>
      {/* <img src={style2} alt="daytime" className='day-time'/> */}
    </div>
    <div className="weather-wrapper" style={{ backgroundImage: "url(/winter.jpg)" }}>
      {Weather('Conroe')}
      {Weather('Balta')}
    </div>
    </>
  )};



