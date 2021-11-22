import React, { useState } from "react";
import { Transition } from '@headlessui/react'
import { CarouselData } from "./CarouselData";
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'
import { Link } from "react-router-dom";

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
                    <div className={index === current ? "opacity-1 transition duration-1000 hover:opacity-90" : "opacity-50 transition duration-1000 ease-in"} key={index}>
                        {index === current && (<img src={slide.image} alt={slide.alt} className="min-w-full h-3/4 rounded-b-xl" />)}
                        <div className="absolute top-10 left-10 ">
                            { index === current && slide.text}
                            <Link to={slide.link} >
                                <button className="bg-yellow-400 rounded-xl p-6">
                                    Voir plus
                                </button>
                            </Link>
                        </div>
                        
                    </div>
                )
            })}

       </section>
    )
};
export default Carousel