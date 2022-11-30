import React from 'react';
import  {Time} from '../Time/Time';
import './Map.css';

export default function MapHouston() {
  return (
    <div className='maps'>
      <h2>Houston-Balta</h2>
      <div className='globe'>
        <img src={`${process.env.PUBLIC_URL}/globe.jpg`} alt="globe" />
      </div>
      <Time/>
      <div className="map-wrapper">

      <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2905885.145531841!2d-96.91470895298819!3d31.267417925303103!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX%2C%20USA!5e0!3m2!1sen!2sua!4v1669800598860!5m2!1sen!2sua"
      style={{width: 600, height: 450, border: 0 }} loading="lazy"  referrerPolicy="no-referrer-when-downgrade" ></iframe>
      <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42764.90718885823!2d29.586997173153296!3d47.94012267654934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cc2f261757eb55%3A0x1d9b4421f6bed414!2sBalta%2C%20Odessa%20Oblast%2C%2066100!5e0!3m2!1sen!2sua!4v1669803602756!5m2!1sen!2sua"
      style={{width: 600, height: 450, border: 0 }} loading="lazy"  referrerPolicy="no-referrer-when-downgrade" ></iframe>
      </div>

    </div>
  );
}

