import "../styles/slider.css";
import React, { useRef, useEffect } from "react";

import slider1 from "../assets/home/home1.webp";
import slider2 from "../assets/home/home2.webp";
import slider3 from "../assets/home/home3.webp";

const Slider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    //intervalo para la transición automática cada 5 segundos
    const slideInterval = setInterval(() => {
      //se aplica la transición de desplazamiento a la izquierda
      slider.style.transition = "transform 1s ease-in-out";
      slider.style.transform = "translateX(-100vw)";
    }, 5000);

    //cuando termina la transición, se reubica la imagen y se reinicia la posición
    const handleTransitionEnd = () => {
      slider.style.transition = "none";
      slider.append(slider.querySelector("img:first-child"));
      slider.style.transform = "translateX(0)";
    };

    slider.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      clearInterval(slideInterval);
      slider.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, []);

  return (
    <div className="slider-layout">
      <div className="banner">
        <div className="slider" ref={sliderRef}>
          <img src={slider1} alt="slider1" />
          <img src={slider2} alt="slider2" />
          <img src={slider3} alt="slider3" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
