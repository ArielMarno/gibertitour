import React, { useRef, useEffect } from "react";
import '../styles/transfersanimation.css';

import slider1 from '../assets/transfers/car0.webp';
import slider2 from '../assets/transfers/car1.webp';
import slider3 from '../assets/transfers/car2.webp';
import slider4 from '../assets/transfers/car3.webp';
import slider5 from '../assets/transfers/car4.webp';
import slider6 from '../assets/transfers/car5.webp';

const TransfersAnimation = () => {
    
      //agregar y remover la clase .active para modificar el valor de opacity en css
      const sliderRef = useRef(null);
    
      useEffect(() => {
        const slider = sliderRef.current;
        const slides = slider.querySelectorAll("img");
        let currentSlide = 0;

        slides[currentSlide].classList.add("active");

        const slideInterval = setInterval(() => {
          slides[currentSlide].classList.remove("active");
          currentSlide = (currentSlide + 1) % slides.length;
          slides[currentSlide].classList.add("active");
        }, 5000);

        return () => clearInterval(slideInterval);
      }, []);

  return (
        <div className='transfers-animation'>
            <div className="cars" ref={sliderRef}>
                <img src={slider1} alt="slider1" />
                <img src={slider2} alt="slider2" />
                <img src={slider3} alt="slider3" />
                <img src={slider4} alt="slider4" />
                <img src={slider5} alt="slider5" />
                <img src={slider6} alt="slider6" />
            </div>
        </div>
  )
}

export default TransfersAnimation;

