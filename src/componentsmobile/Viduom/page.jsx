'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';

export default function Viduom() {
  const text1 = "The Art Of";
  const text2 = "Streetwear QUALITY &";
  const text3 = "STYLE REDEFINED";

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
      <div className='p-1 relative'>
        {/* Text Content */}
        <div className='text-center mb-8'>
          <h1 className='text-black text-[23px] font-[PP_Neue_Montreal]'>
            {text1}
          </h1>
          <h1 className='text-black text-[23px]'>
            {text2}
          </h1>
          <h1 className='text-black text-[23px]'>
            {text3}
          </h1>
        </div>

        {/* Video Container */}
        <div className='flex items-center justify-center relative'>
          <video
            src="/video.mp4"
           //. controls
            ref={videoRef}
            muted
            playsInline
            loop
            className='w-full rounded-[200px] max-w-[394px] h-[606px] object-cover'
          />
        
          {!isPlaying && ( 
            <div
              onClick={handlePlay}
              className='absolute cursor-pointer'
            >
              <Image
                src="/play.svg" 
                alt="Play button" 
                width={50} // You need to specify width and height for Next.js Image
                height={50}
              />
            </div>
          )}
        </div>

        {/* Social Icons */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-20">
          <div className="bg-white rounded-full w-[51.56px] h-[51.56px] flex items-center justify-center">
            <img src="/s.svg" alt="Social media icon" />
          </div>
          <div className="bg-white rounded-full w-[51.56px] h-[51.56px] flex items-center justify-center">
            <img src="/m.svg" alt="Messaging icon" />
          </div>
        </div>
      </div>
    );
  };

  // Don't forget to render the HeroSection component
  return <HeroSection />;
}