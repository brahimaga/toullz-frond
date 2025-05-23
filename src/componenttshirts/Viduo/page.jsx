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
<h2 
  className=" ml-[500px] top-[100px] font-['PP_Neue_Montreal-Regular'] font-normal text-black text-[42px] leading-[48px]"
>
  <span className='ml-[100px]'>The Art Of <br />Streetwear</span>
  <span className="font-['PP_Neue_Montreal-Medium'] font-medium "> QUALITY & <br />
  <h1 className='ml-[30px]'>STYLE REDEFINED</h1>
  
  </span>
</h2>


<div className="relative">

    
<img 
className='absolute   ml-[580px] top-[300px]'
src="/viduo/play.svg" alt="play" />

<div className="flex items-center justify-center relative top-[550px] h-[74px] w-full">
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
