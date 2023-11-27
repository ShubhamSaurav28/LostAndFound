import React from 'react'
import { Carousel } from "@material-tailwind/react";
import loff from '../assets/loff.webp';
import lofff from '../assets/lofff.webp';
import lofffo from '../assets/lofffo.webp';


export default function StartImg() {
  return (
    <Carousel
      className="h-[75vh]"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      autoplay="true"
      loop="true"
    >
      <img
        src={loff}
        alt="image 1"
        className="h-full w-full "
      />
      <img
        src={lofff}
        alt="image 2"
        className="h-full w-full"
      />
      <img
        src={lofffo}
        alt="image 3"
        className="h-full w-full"
      />
    </Carousel>
    
  )
}


