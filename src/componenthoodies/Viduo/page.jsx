import { div } from 'motion/react-client'
import React from 'react'
import Image from 'next/image'



const text1 = "The Art Of ";
const text2 = "Streetwear";
const text3 = "QUALITY &";
const text4 = "STYLE REDEFINED";

const text11 = 'text1';
const text22 = 'text2';
const text33 = "text3";
export default function Viduo() {
  return (


<div className='mt-[40px] '>
<div className='flex items-center justify-center ' >
<h1 className='text-black text-[10px] font-bold'>{text11}</h1>
<h1 className='text-[10px] text-black font-bold '>{text22}</h1>
<h1 className='text-[10px] text-black font-bold'>{text33}</h1>

</div>


<div className="relative">
  <img 
className='inline-flex items-center justify-center '
src="/son.svg" alt="son" />


    <button >



<img 
className=' inline-flex items-center justify-center'
src="/viduo/play.svg" alt="play" />


</button>

<div className="absolute items-center justify-center  top-[550px] h-[74px] w-full">
  <div className="absolute translate-x-[-40px] bg-white rounded-full w-[74px] h-[74px]">
    <img 
    className=' ml-3 mt-3.5 '
    src="/s.svg" alt="s" />
  </div>


  <div className="absolute translate-x-[40px] bg-white rounded-full w-[74px] h-[74px]">

    <img 
    className=' ml-3 mt-3.5 '
    src="m.svg" alt="m" />
  </div>
</div>





<img 
className='p-2 mt-[40px] w-[1434px] h-[598] rounded-[40px]'
src="/hoodies/viduo/viduo.png" alt="vido" />


</div>

</div>


    
  )
}
