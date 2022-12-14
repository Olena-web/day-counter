import React, { useEffect, useMemo } from 'react';
import './Time.css';
import Weather from '../Weather/Weather';
import { getTimeOfDay } from '../helpers';

export const Time = () =>  {
  const timeDavid = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });
  const timeOlena = new Date().toLocaleString('en-US', { timeZone: 'Europe/Kiev'});

  const[greeting1, setGreeting1] = React.useState('good morning');
  const[greeting2, setGreeting2] = React.useState('good morning');
  const[style1, setStyle1] = React.useState('');
  const [style2, setStyle2] = React.useState('');
  const[time1, setTime1] = React.useState(new Date(timeDavid).toLocaleTimeString());
  const[time2, setTime2] = React.useState(new Date(timeOlena).toLocaleTimeString());
  const [date1, setDate1] = React.useState(new Date(timeDavid).toDateString());
  const [date2, setDate2] = React.useState(new Date(timeOlena).toDateString());

  const greetingDavid = getTimeOfDay(new Date(timeDavid));
  const greetingOlena = getTimeOfDay(new Date(timeOlena));


  useEffect(() => {
  setGreeting1(greetingDavid[0]);
  setGreeting2(greetingOlena[0]);
  setStyle1(greetingDavid[1]);
  setStyle2(greetingOlena[1]);
  setDate1(new Date(timeDavid).toDateString());
  setDate2(new Date(timeOlena).toDateString());
  }, [greeting1, greeting2, greetingDavid, greetingOlena, timeDavid, timeOlena]);

useMemo(() => {
  const timeDavidObj = new Date(timeDavid);
  const timeOlenaObj = new Date(timeOlena);
    setTimeout(() => {
    setTime1(timeDavidObj.toLocaleTimeString());
  }, 1000);
  setTimeout(() => {
    setTime2(timeOlenaObj.toLocaleTimeString());
  }, 1000);
}, [timeDavid, timeOlena]);


  return (
    <>
    <div className='time-wrapper'>
      <div style={{ backgroundImage: `url(${style1})`, backgroundRepeat:'no-repeat', backgroundPosition: '50% 60%'}}>
      <span>Today: {date1}</span>
      <span>David's time: </span>
      <span>{time1} </span>
      <span>{greeting1} </span>
      </div>
      {/* <img src={style1} alt="daytime" className='day-time'/> */}

      <div style={{ backgroundImage: `url(${style2})`, backgroundRepeat:'no-repeat', backgroundPosition: '50% 60%'}}>
        <span>Today: {date2}</span>
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



