'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';

const txt1 = "The Art Of";
const txt2 = "Streetwear";
const txt3 = "QUALITY &";
const txt4 = "STYLE REDEFINED";

const HeroSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="mt-5">
      {/* Title */}
      <div className="flex items-center justify-center">
        <div className="w-[421px] h-[144px] font-['PP_Neue_Montreal'] font-normal text-[42px] leading-[48px] text-center text-black">
          <span>{txt1} </span>
          <span className="font-bold">{txt2}</span><br />
          <span>{txt3} </span>
          <span>{txt4}</span>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative mt-1 flex justify-center">
        <div className="relative w-[1434px] h-[598px] rounded-[40px] overflow-hidden">
          <video
            ref={videoRef}
            src="/video.mp4"
            width={1434}
            height={598}
            className="w-full h-full rounded-[800px] object-cover"
            muted
            loop
            playsInline
            controls 
          />







          {!isPlaying && (
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
              onClick={handlePlay}
            >
              <Image
                src="/viduo/play.svg"
                alt="Play button"
                width={80}
                height={80}
                className="hover:scale-125 transition-transform"
              />
            </div>
          )}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex  items-center justify-center absolute  mb-[500px] mt-4">
        <div className="flex space-x-16">
          <button className="bg-white rounded-full w-[74px] h-[74px] flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
            <Image src="/s.svg" alt="Previous" width={32} height={32} />
          </button>

          <button className="bg-white rounded-full w-[74px] h-[74px] flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
            <Image src="/m.svg" alt="Next" width={32} height={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
