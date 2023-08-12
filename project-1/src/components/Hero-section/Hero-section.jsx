import React from 'react'

import "./Hero-section.css"

const Herosection = () => {
  return (
    <div className="main">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="buttons">
          <button className="btn first">Shop Now</button>
          <button className="btn second">Category </button>
        </div>
        <div className='available'>
          <p>Also Available On</p>
        </div>
        <div className="logos">
            <img src="/images/flipkart.png" alt="Flipkart" />
            <img className='right-logo' src="/images/amazon.png" alt="Amazon" />
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="" />
      </div>
    </div>
  );
}

export default Herosection
