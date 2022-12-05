import React from 'react';
import  {Time} from '../Time/Time';
import './Map.css';

export default function MapHouston() {
  return (
    <div className='maps'>
      <h2>Conroe-Balta</h2>
      <h4>Total distance: 9,742.93 km (6,053.98 mi) - 1/4 length of the equator</h4>
      <div className='globe'>
        {/* <img src={`${process.env.PUBLIC_URL}/globe.jpg`} alt="globe" /> */}
      </div>

      <div className= 'parallax-img' style={{backgroundImage:`url(${process.env.PUBLIC_URL}/globe.jpg)`}}></div>
      <Time />
      <div className="map-wrapper">

      <iframe title="davidFrame" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3445.675659082065!2d-95.48247337705386!3d30.274821227551417!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86473bd4b5fc054d%3A0x23e0de5d18d7c283!2s218%20Torrey%20Bloom%20Lp%2C%20Conroe%2C%20TX%2077304%2C%20USA!5e0!3m2!1sen!2sua!4v1669968141368!5m2!1sen!2sua"
      style={{width: 400, height: 400, border: 0 }} loading="lazy"  referrerPolicy="no-referrer-when-downgrade" ></iframe>
      <iframe title="olenaFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5345.825757832317!2d29.613547637079225!3d47.93806889947009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cc2f2f2c81ff77%3A0x17e085f02b2924e3!2sDom%2C%20Vulytsya%20Vyshneva%2C%201%2C%20Balta%2C%20Odes&#39;ka%20oblast%2C%2066100!5e0!3m2!1sen!2sua!4v1669968431389!5m2!1sen!2sua"
      style={{width: 400, height: 400, border: 0 }} loading="lazy"  referrerPolicy="no-referrer-when-downgrade" ></iframe>
      </div>

    </div>
  );
}



