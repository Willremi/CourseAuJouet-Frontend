import { Form } from "formik";
import React, { useState } from "react";
import { CarouselData } from "./CarouselData";
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'

const Carousel = () => {
    const [current, setCurrent] = useState(0)
    const length = CarouselData.length

    const nextSlide = () => {
        s
    }

    if (!Array.isArray(CarouselData) || length <= 0) {
        return null;
    }

    return(
       <section className="relative h-full flex items-center justify-center">
           <FaChevronLeft className="absolute inset-y-1/2 left-7 font text-5xl text-black z-10 cursor-pointer select-none" />
           <FaChevronRight className="absolute inset-y-1/2 right-7 font text-5xl text-black z-10 cursor-pointer select-none" />
            {CarouselData.map((slide,index) => {
                return <img src={slide.image} alt={slide.alt} className="w-full h-3/4" />
            })}

       </section>
    )
};
export default Carousel