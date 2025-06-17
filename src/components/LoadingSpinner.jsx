import React from 'react';
import tileBack from '../assets/tile-back.jpg'
import './LoadingSpinner.css';

const LoadingSpinner = ({ message = "" })  => {
  return (
    <section className="section-loadingspinner">
      <h3 className='loader-title'>{message}</h3>
      <div className="loadingspinner">
        <div id="square1"><img className="image" src={tileBack} alt="" /></div>
        <div id="square2"><img className="image" src={tileBack} alt="" /></div>
        <div id="square3"><img className="image" src={tileBack} alt="" /></div>
        <div id="square4"><img className="image" src={tileBack} alt="" /></div>
        <div id="square5"><img className="image" src={tileBack} alt="" /></div>
      </div>
    </section>
  );
};

export default LoadingSpinner;
