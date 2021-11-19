import React, { useState } from "react";
import { CarouselData } from "./CarouselData";
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'

const Carousel = () => {
    const [current, setCurrent] = useState(0)
    const length = CarouselData.length

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }
    
    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }

    console.log(current)

    if (!Array.isArray(CarouselData) || length <= 0) {
        return null;
    }

    return(
       <section className="relative h-full flex items-center justify-center z-0">
           <FaChevronLeft className="absolute inset-y-1/2 left-7 font text-5xl text-black z-20 cursor-pointer select-none opacity-40" onClick={prevSlide} />
           <FaChevronRight className="absolute inset-y-1/2 right-7 font text-5xl text-black z-20 cursor-pointer select-none opacity-40" onClick={nextSlide}/>
            {CarouselData.map((slide,index) => {
                return (
                    <div className={index === current ? 'slide active ' : 'slide'} key={index}>
                        {index === current && (<img src={slide.image} alt={slide.alt} className="w-full h-3/4 z-10" />)}
                        
                    </div>
                )
            })}

       </section>
    )
};
export default Carousel