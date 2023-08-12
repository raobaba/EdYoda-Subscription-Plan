import React from 'react';
import { FaBookOpen, FaClock, FaArtstation } from 'react-icons/fa';
import { FcGraduationCap } from 'react-icons/fc';
import { MdLiveTv } from 'react-icons/md';
import '../Styles/Description.css';

export default function Description() {
  const rows = [
    { icon: <FaBookOpen className='icon' />, text: '100+ Job relevant courses' },
    { icon: <FaClock className='icon' />, text: '20,000+ Hours of content' },
    { icon: <MdLiveTv className='icon' />, text: 'Exclusive webinar access' },
    { icon: <FcGraduationCap className='icon' />, text: 'Scholarship worth ₹ 94,500' },
    { icon: <FaArtstation className='icon' />, text: 'Ad Free learning experience' },
  ];

  return (
    <div className='description'>
      <div className='head'>
        <h1>
          Access Curated Course Worth <br />₹ <span className='strike'>18,500</span> at just <span className="green-text"> ₹ 99 </span>
          per year
        </h1>
      </div>
      <div className='desc'>
        {rows.map((row, index) => (
          <div className='row' key={index}>
            {row.icon}
            <h2> <span className='green-text'>{row.text}</span></h2>
          </div>
        ))}
      </div>
    </div>
  );
}
