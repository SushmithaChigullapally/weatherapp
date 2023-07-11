import React from 'react';
import './Hbutton.css';

const Hbutton = () => {
  return (
    <div className="container">
      <h1 className="title">Welcome to the Weather App</h1>
      <div className="content">
        <h4 className="description">To predict the weather condition using an image, go to Image Processing</h4>
        <h4 className="description">To predict the weather condition in a particular city, go to Weather API</h4>
      </div>
    </div>
  );
};

export default Hbutton;
