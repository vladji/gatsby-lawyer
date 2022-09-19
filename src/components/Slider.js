import React, { useEffect, useRef } from "react";

import FullWidthImage from "./FullWidthImage";

const Slider = ({ sliderData }) => {
  const sliderRef = useRef(null);
  const lengthData = sliderData.length;

  let currentIndex = 0;
  let nextIndex = 1;
  const calcNextIndex = () => {
    if (nextIndex + 1 === lengthData) {
      currentIndex = lengthData - 1;
      nextIndex = 0;
      return;
    }
    if (currentIndex + 1 === lengthData) {
      currentIndex = 0;
      nextIndex += 1;
      return;
    }
    currentIndex += 1;
    nextIndex += 1;
  };

  const images = sliderData.map((slide, index) => <FullWidthImage key={index} image={slide.image} />);

  useEffect(() => {
    const elementsArr = Array.from(sliderRef.current.childNodes);
    elementsArr[currentIndex].classList.add("next");

    const timerId = setInterval(() => {
      elementsArr[currentIndex].classList.remove("next");
      elementsArr[currentIndex].classList.add("prev");
      elementsArr[nextIndex].classList.remove("prev");
      elementsArr[nextIndex].classList.add("next");
      calcNextIndex();
    }, 10000);

    return () => clearInterval(timerId);
  });

  return (
    <div className="padding-top-3">
      <div
        ref={sliderRef}
        className="slider-wrapper">
        {images.map((image, index) => (
          <div key={index} className="slide">
            {image}
            <span className="text">{sliderData[index].text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;