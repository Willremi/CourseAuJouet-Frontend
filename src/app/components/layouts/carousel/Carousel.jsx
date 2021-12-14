import React, { useState, useEffect, useRef } from "react";
import { CarouselData } from "./CarouselData";
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'
import { Link } from "react-router-dom";

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 15000;

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
      resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
        resetTimeout()
    };
  }, [index]);

  return (
    <div className="slideshow w-full">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {CarouselData.map((slide, index) => (
          <div
            className="slide"
            key={index}
          >
              <img src={slide.image} />
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {CarouselData.map((_, idx) => (
          <div key={idx}
          className={`slideshowDot${index === idx ? " active" : ""}`}
          onClick={() => {
            setIndex(idx);
          }}
           ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow