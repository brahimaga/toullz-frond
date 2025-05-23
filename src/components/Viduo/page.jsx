import { div } from 'motion/react-client'
import React from 'react'
import Image from 'next/image'

const text1 = "The Art Of ";
const text2 = "Streetwear";
const text3 = "QUALITY &";
const text4 = "STYLE REDEFINED";

export default function Viduo() {
  return (
    <div className='flex flex-col items-center justify-center mt-[40px]'>
      <h2 className="font-['PP_Neue_Montreal-Regular'] font-normal text-black text-[42px] leading-[48px] text-center">
        <span>The Art Of <br />Streetwear</span>
        <span className="font-['PP_Neue_Montreal-Medium'] font-medium block mt-4"> 
          QUALITY & <br />
          <span className='ml-[30px]'>STYLE REDEFINED</span>
        </span>
      </h2>

      <div className="relative flex flex-col items-center ">
        <div className="relative">
          <img 
            className='absolute mt-[50px] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10'
            src="/viduo/play.svg" 
            alt="play" 
          />
          
          <img 
            className='w-[1434px] h-[598px] rounded-[40px] object-cover'
            src="/viduo/viduo.png" 
            alt="video" 
          />
        </div>

        <div className="flex items-center justify-center gap-16 mt-8">
          <div className="bg-white rounded-full w-[74px] h-[74px] flex items-center justify-center">
            <img 
              className='w-8 h-8'
              src="/s.svg" 
              alt="s" 
            />
          </div>

          <div className="bg-white rounded-full w-[74px] h-[74px] flex items-center justify-center">
            <img 
              className='w-8 h-8'
              src="/m.svg" 
              alt="m" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}