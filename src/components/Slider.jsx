import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { ApiSlides } from "../apifolder/ApiSlides";
import './Slider.css';
import {React, useState } from "react";

function Slider() {

// useState
    const [slides] =useState(ApiSlides)
    const[activeSlide, setActiveSlide] = useState(0)

    // style
  const arrowStyle =
    "rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer";
    const nextSlide = ()=>{
      if(activeSlide === slides.length - 1){
        setActiveSlide(0)
      }else{
        setActiveSlide(activeSlide + 1)
      }
    }

const prevSlide = () =>{
  if(activeSlide === 0){
    setActiveSlide(slides.length -1 )
  }
  else{
    setActiveSlide(activeSlide-1)
  }
}


  return (
    <div className="parentDiv h-[540px] bg-white flex items-center justify-between mobile:hidden">
      {/* LeftArrowDiv */}
      <div className={arrowStyle}>
        <ArrowLeftOutlined style={{ fontSize: "50px" }} onClick ={prevSlide} />
      </div>
      {/* Slider */}
      {slides.map((slide, index)=>{
          if(index=== activeSlide){
           return(
            <div className={`wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg boder-[#c0c0c0] borer-10px overflow-hidden relative ` + slide.background}>
            <div className="slide flex items-center justify-center h-[100%]">
              <div className="forImage flex flex-1 justify-center items-center h-[100%]">
                <img
                  className="h-[100%] object-cover"
                  src={slide.src}
                  alt="slideImage"
                />
              </div>
              <div className="des flex flex-col flex-1 justify-center -ml-11 place-items-start">
                <h2 className="text-[55px]">{slide.content.h2}</h2>
                <p className="text-[30px]">{slide.content.p}</p>
                <button className="btn">Shop Now</button>
              </div>
            </div>
          </div>
           )
          }
      })}
      {/* rightArrow */}
      <div className={arrowStyle}>
        <ArrowRightOutlined style={{ fontSize: "50px" }} onClick = {nextSlide} />
      </div>
    </div>
  );
}

export default Slider;
