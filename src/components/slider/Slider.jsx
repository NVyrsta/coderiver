import React, {useEffect} from 'react';
import './slider.scss';

import left from '../../images/slider/left.svg';
import right from '../../images/slider/right.svg';

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

const Slider = () => {
  
useEffect(() => {
  let box = document.querySelector('.slider__track');
  if (box) {
    box.scrollLeft = 115;
  }
}, []);

const slidePrev = () => {
  let box = document.querySelector('.slider__track');
  if (box) {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  }
};

const slideNext = () => {
  let box = document.querySelector('.slider__track');
  if (box) {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  }
};
  return (
    <div className="container">
      <section className="section galery">
        <h2 className="section__title">CHOOSE LOOKS</h2>
        <div className="slider">
          <button
            className="slider__arrow slider__arrow--left"
            onClick={slidePrev}
          >
            <img src={left} alt="left" />
          </button>
          <button
            className="slider__arrow slider__arrow--right"
            onClick={slideNext}
          >
            <img src={right} alt="right" />
          </button>

          <div className="slider__track ">
            {images.map((image, ind) => (
              <div
                className="slider__slide"
                cardno="1"
                key={`${image} + ${ind}`}
              >
                <img src={image} alt="slide" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slider;
