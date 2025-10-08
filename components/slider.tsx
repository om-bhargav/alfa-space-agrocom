"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Slide {
  id: number;
  image: string;
  alt: string;
}

const Slider: React.FC = () => {
  const slides: Slide[] = [
    { id: 1, image: "/slide1.png", alt: "Premium Quality Rice" },
    { id: 2, image: "/slide2.png", alt: "Fresh Wheat" },
    { id: 3, image: "/slide3.png", alt: "Fine Wheat Flour" },
    { id: 4, image: "/slide4.png", alt: "Healthy Pulses" },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const nextSlide = (): void => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = (): void => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const currentSlide = slides[currentSlideIndex];

  return (
    <div className="relative w-full h-[300px] md:h-[600px] overflow-hidden">
      {/* Current Slide */}
      <div className="relative w-full h-full">
        <Image
          src={currentSlide.image}
          alt={currentSlide.alt}
          layout="fill"
          className="w-full h-full transition-opacity duration-700"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">{currentSlide.alt}</h2>
        </div> */}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#7c2528] text-white p-2 rounded-full shadow-lg hover:bg-[#5e1c1f]"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#7c2528] text-white p-2 rounded-full shadow-lg hover:bg-[#5e1c1f]"
      >
        &#8594;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlideIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlideIndex ? "bg-[#7c2528]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;