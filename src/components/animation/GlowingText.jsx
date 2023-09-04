import React from 'react';
import './animation.css'
import { Link } from 'react-router-dom';
const GlowingText = () => {
  return (
    <div className=''>
      <Link to="/">
      <h2><span>To</span><span>bb</span><span>ie</span> </h2>
      </Link>
      
    </div>
  );
}

export default GlowingText;
