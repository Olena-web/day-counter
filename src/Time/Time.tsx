import React from 'react';
import './Time.css';

export const Time = () => {
  const timeDavid = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });
  const timeOlena = new Date().toLocaleString('en-US', { timeZone: 'Europe/Kiev' });

  return (
    <div className='time-wrapper'>
      <div>David's time: {timeDavid}</div>
      <div>Olena's time: {timeOlena}</div>
    </div>
  );
};
