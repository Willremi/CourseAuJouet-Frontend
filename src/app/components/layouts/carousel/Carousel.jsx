import React, { useState, useEffect, useRef } from "react";
import { CarouselData } from "./CarouselData";
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'
import { Link } from "react-router-dom";

const delay = 3000;

function Slideshow() {
  const [index, setIndex] = useState(0);
  const length = CarouselData.length
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setIndex(index === length -1 ? 0 : index + 1)
}

const prevSlide = () => {
    setIndex(index === 0 ? length -1 : index - 1)
}


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
          prevIndex === CarouselData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
        resetTimeout()
    };
  }, [index]);

  return (
    <div className="h-3/5 relative m-auto overflow-hidden">
        <FaChevronLeft className="absolute inset-y-1/2 left-6 sm:left-1 md:left-3 font text-5xl text-black z-20 cursor-pointer select-none opacity-40" onClick={prevSlide} />
        <FaChevronRight className="absolute inset-y-1/2 right-6 sm:right-1 md:right-3 font text-5xl text-black z-20 cursor-pointer select-none opacity-40" onClick={nextSlide}/>


      <div
        className="whitespace-nowrap transition ease-in-out duration-1000"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {CarouselData.map((slide, index) => (
            <Link to={slide.link}>
                <div
                    className="inline-block bg-cover bg-center h-60vh w-full"
                    key={index}
                    style={{backgroundImage: "url(" + slide.image + ")"}}
                />           
            </Link>

        ))}
      </div>

      <div className="-mt-12 text-center">
        {CarouselData.map((_, idx) => (
          <div key={idx}
          className={`${index === idx ? " bg-black" : "bg-nav-greyClar  "} inline-block h-2 w-10 cursor-pointer mt-4 mx-2 opacity-50`}
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