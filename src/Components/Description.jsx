import React from 'react';
import { FaBookOpen, FaClock ,FaArtstation } from 'react-icons/fa';
import { FcGraduationCap } from 'react-icons/fc';
import { MdLiveTv } from 'react-icons/md'; // Import the MdLiveTv icon
import '../Styles/Description.css';

export default function Description() {
  return (
    <div className='description'>
      <div className='head'>
        <h1>
          Access Curated Course Worth <br />₹ 18,500 at just <span className="green-text"> ₹ 99 </span>
          per year
        </h1>
      </div>
      <div className='desc'>
        <div className='row'>
          <FaBookOpen className='icon' />
          <h2> <span className='green-text'>100+</span> Job relevant courses</h2>
        </div>
        <div className='row'>
          <FaClock className='icon' />
          <h2> <span className='green-text'>20,000+</span> Hours of content</h2>
        </div>
        <div className='row'>
          <MdLiveTv className='icon' /> {/* Use the MdLiveTv icon */}
          <h2> <span className='green-text'>Exclusive</span> webinar access</h2>
        </div>
        <div className='row'>
          <FcGraduationCap  className='icon' />
          <h2> Scholarship worth <span className='green-text'>₹ 94,500</span></h2>
        </div>
        <div className='row'>
          <FaArtstation className='icon' />
          <h2><span className='green-text'>Ad Free</span>learning experience</h2>
        </div>
      </div>
    </div>
  );
}
