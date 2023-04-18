import React, { useState } from 'react';
import './slider.scss';

import left from '../../images/slider/left.svg';
import right from '../../images/slider/right.svg';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    require('../../images/slider/slide-1.jpg'),
    require('../../images/slider/slide-2.jpg'),
    require('../../images/slider/slide-3.jpg'),
    require('../../images/slider/slide-4.jpg'),
    require('../../images/slider/slide-5.jpg'),
    require('../../images/slider/slide-1.jpg'),
    require('../../images/slider/slide-2.jpg'),
    require('../../images/slider/slide-3.jpg'),
    require('../../images/slider/slide-4.jpg'),
    require('../../images/slider/slide-5.jpg'),
  ];

  const moveLeft = () => {
    const w = document.querySelector('.slider__slide').offsetWidth;
    console.log(w, 'w');
  setCurrentSlide((currentSlide - 1 + images.length) % images.length);
    console.log(currentSlide, 'click');
        const tr = (document.querySelector('.slider__track').scrollLeft -= w);


}

  const moveRight = () => {
      const w = document.querySelector('.slider__slide').offsetWidth;
    console.log(w, 'w');
    const tr = document.querySelector('.slider__track');
      tr.scrollLeft += w;
  setCurrentSlide((currentSlide + 1) % images.length);
  console.log(currentSlide, 'click');
}
  
  return (
    <div className="container ">
      <section className="section galery">
        <h2 className="section__title">CHOOSE LOOKS</h2>
        <div className="galery__arrows">
          <button
            type="button"
            className="galery__arrow galery__arrow--left"
            onClick={moveLeft}
          >
            <img src={left} alt="left" />
          </button>
          <button
            type="button"
            className="galery__arrow galery__arrow--right"
            onClick={moveRight}
          >
            <img src={right} alt="right" />
          </button>
        </div>
        <div className="slider">
          <div
            className="slider__track"
          >
            {images.map((image, index) => (
              <div className="slider__slide" key={`slide ${index}`}>
                <img src={image} alt={`Image ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slider;