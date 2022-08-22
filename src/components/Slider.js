import React, { useState, useEffect, useRef } from "react";

import FullWidthImage from "./FullWidthImage";

import './styles/slider.scss'

const Slider = ({ sliderData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const lengthData = sliderData.length;

  const calcNextIndex = () => {
    console.log('lengthData', lengthData);
    if (currentIndex + 1 === lengthData) {
      return 0;
    }
    return currentIndex + 1;
  };
  console.log('currentIndex', currentIndex);
  //setTimeout(() => setCurrentIndex((currentIndex + 1) % lengthData), 5000);
  const imgRef = useRef(null);

  const images = sliderData.map((slide, index) => <FullWidthImage key={index} image={slide.image} />)

  return (
    <div
      ref={imgRef}
      className="slider-wrapper">
      <div className={'slider'}>{images[currentIndex]}</div>
      <div className={'slider'}>{images[calcNextIndex()]}</div>
    </div>
  )
}

export default Slider;