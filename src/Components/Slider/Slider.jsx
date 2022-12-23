import React, { useState } from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import "./Slider.scss";

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://images.unsplash.com/photo-1603191659812-ee978eeeef76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        "https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/4498138/pexels-photo-4498138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];

    const prevSlide = () =>{
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
    }

    const nextSlide = () =>{
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
    }

  return (
    <div className='slider'>
        <div className='container' style ={{transform: `translateX(-${currentSlide * 100}vw )`}}>
            <img src={data[0]} alt="sliderImg"/>
            <img src={data[1]} alt="sliderImg"/>
            <img src={data[2]} alt="sliderImg"/>
        </div>
        <div className='icons'>
            <div className='icon' onClick={prevSlide}>
                <ArrowBackIosNewOutlinedIcon/>
            </div>
            <div className='icon' onClick={nextSlide}>
                <ArrowForwardIosOutlinedIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider
