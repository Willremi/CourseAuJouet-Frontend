import React, { useState } from "react";
import { CarouselData } from "./CarouselData";
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'
import { Link } from "react-router-dom";
import { TransitionGroup, CSSTransition} from 'react-transition-group';
const Carousel = () => {
    const [current, setCurrent] = useState(0)
    const length = CarouselData.length
    
    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }

    if (!Array.isArray(CarouselData) || length <= 0) {
        return null;
    }

    return(
        <section>
            {/* mapage des données */}
                {CarouselData.map((slide,index) => {
                    return (
                        <div key={index} className={`${index === current ? "w-screen h-screen-40 md:h-screen-40 sm:h-screen-50 relative" : "hidden"}`}>
                            {/* ceci est l'image */}
                            <Link to={slide.link} >
                                <TransitionGroup>
                                    <CSSTransition
                                        key={current}
                                        timeout={1000}
                                        classNames='slide-right'
                                    >
                                        <img src={slide.image} alt="produit" className="w-full h-full object-bottom object-cover"/>
                                    </CSSTransition>
                                </TransitionGroup>
                            </Link>
                                    {/* les deux cheuvrons servant à manipuler le carousel */}
                                    <FaChevronLeft className="absolute inset-y-1/2 left-6 sm:left-1 md:left-3 font text-5xl text-black z-20 cursor-pointer select-none opacity-40" onClick={prevSlide} />
                                    <FaChevronRight className="absolute inset-y-1/2 right-6 sm:right-1 md:right-3 font text-5xl text-black z-20 cursor-pointer select-none opacity-40" onClick={nextSlide}/>
                                
                                {/* la div contenant les infos et le lien correspondant à l'image */}
                                <div className={index === current 
                                    ? "opacity-1 transition duration-1000 absolute sm:static sm:p-10 sm:hidden top-20 left-20 text-center" 
                                    : "opacity-0"} key={index}>
                                    <p className="text-3xl sm:text-blue-400 text-yellow-400 text-center">
                                    { index === current && slide.text}
                                    </p>
                                    <Link to={slide.link} >  
                                        <button className="sm:bg-nav-blueClar bg-yellow-400 hover:bg-yellow-500 rounded-full px-7 py-2 mt-2 sm:mt-4">
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
