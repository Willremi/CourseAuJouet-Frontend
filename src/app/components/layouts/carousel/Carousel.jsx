import React, { useState } from "react";
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
        <section className="flex w-screen">

            {/* mapage des données */}
                {CarouselData.map((slide,index) => {
                    return (
                        <div className="h-screen w-full">

                            {/* TODO: Trouver d'où vient l'overflow-x et la barre de scroll-x
                                
                            */}
                            {/* ceci est l'image */}
                            <div className={index === current 
                                ? "relative opacity-1 transition duration-1000 hover:opacity-90 h-2/3 w-screen overflow-hidden rounded-b-xl bg-center bg-cover" 
                                : "opacity-40 transition duration-1000 ease-in hidden"}key={index} style={{ backgroundImage: `url(${slide.image})` }}>

                                    {/* les deux cheuvrons servant à manipuler le carousel */}
                                    <FaChevronLeft className="absolute inset-y-1/2 left-7 font text-5xl text-black z-20 cursor-pointer select-none opacity-40" onClick={prevSlide} />
                                    <FaChevronRight className="absolute inset-y-1/2 right-7 font text-5xl text-black z-20 cursor-pointer select-none opacity-40" onClick={nextSlide}/>
                                
                                {/* la div contenant les infos et le lien correspondant à l'image */}
                                <div className={index === current 
                                    ? " opacity-1 transition duration-1000 absolute top-20 left-20  text-center" 
                                    : "opacity-0"} key={index}>
                                    <p className="text-3xl sm:text-black text-yellow-400 text-center">
                                    { index === current && slide.text}
                                    </p>
                                    <Link to={slide.link} >  
                                        <button className="sm:bg-nav-blueClar bg-yellow-400 hover:bg-yellow-500 rounded-full px-7 py-2 mt-2">
                                            Voir plus
                                        </button>
                                    </Link>
                                </div>
                            </div>  
                        </div>

                    )
                })}
       </section>
    )
};
export default Carousel