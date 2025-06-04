import { div } from 'motion/react-client'
import React from 'react'
import Image from 'next/image'

const text1 = "The Art Of ";
const text2 = "Streetwear";
const text3 = "QUALITY &";
const text4 = "STYLE REDEFINED";


export default function Viduo() {
  return (
    <div className='mt-[40px] '>
 <div className="flex items-center justify-center">
    <h1 className="text-black text-[42px]">{text1}</h1>
    </div>
    <div className="flex items-center justify-center">

    <h1 className="text-[42px] text-black ">{text2}</h1>

    <h1 className="text-[42px] text-black font-bold">{text3}</h1>
    </div>
    <div className="flex items-center justify-center">
    <h1 className="text-[42px] text-black font-bold">{text4}</h1>
    
</div>

      <div className="relative flex flex-col items-center ">
        <div className="relative">
          <img 
            className='absolute mt-[50px] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10'
            src="/viduo/play.svg" 
            alt="play" 
          />
          
          <img 
            className='w-[1434px] h-[598px] mt-[40px] rounded-[40px] object-cover'
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