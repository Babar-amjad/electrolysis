import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import "./style.css"


const Carousel = () => {
    const slides = [
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZVqe5sg7XtFOh6oH7IxPkiVJQf6i0XCq9Q&s',
        },
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGH5oj0Kbw94l8z0TKM1ATWLuH0EdLGiC0aQ&s',
        },
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY64zLcqP9706JYlzE4hM7q0YHKmDbceIRMA&s',
        },
    
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-fyoxMbzTCEbHuUv4zKyLd2W3pXTkAWUjUg77UN1eXg&s',
        },
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_dcTfdkrbi8ETzDCPH7cZ_--hOF9iM_6-aQ&s',
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
  return (
    <div className='carosol m-auto relative group'>
    <div
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      className='w-full h-full bg-center bg-cover duration-500'
    ></div>
    {/* Left Arrow */}
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-[#432818] text-white cursor-pointer'>
      <BsChevronCompactLeft onClick={prevSlide} size={30} />
    </div>
    {/* Right Arrow */}
    <div className='aerrow hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-[#432818] text-white cursor-pointer'>
      <BsChevronCompactRight onClick={nextSlide} size={30} />
    </div>
    <div className='flex mb-32 object-cover  justify-center'>
      {slides.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className='text-2xl  cursor-pointer slides-count'
        >
          <RxDotFilled />
        </div>
      ))}
    </div>
  </div>
);
}
  


export default Carousel