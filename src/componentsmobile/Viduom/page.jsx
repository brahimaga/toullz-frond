import { div } from 'framer-motion/client'
import { h1 } from 'framer-motion/m'
import React from 'react'
//import Vid from "@/componentsmobile/Viduom/Vid"

export default function Viduom() {

    const text1 = " The Art Of ";
    const text2= "Streetwear QUALITY &";
    const text3 = " STYLE REDEFINED";


  return (
<div className='p-1'>

<h1 
className='text-black text-[23px] ml-[130px] font-[PP_Neue_Montreal]  '
> {text1}</h1>

<h1 
className='text-black text-[23px] ml-[60px] '

>

    {text2}

</h1>

<h1
className='text-black ml-[100px] '
>

{text3}

</h1>












  

  
    <div className='flex items-center justify-items-center'>

       









<div className=" absolute flex items-center justify-center  mt-[450px]  h-[51.56px] w-full">
  <div className="absolute translate-x-[-40px] bg-white rounded-full w-[51.56px] h-[51.56px]">
    <img 
    className=' ml-3 mt-3.5 '
    src="/s.svg" alt="s" />
  </div>


  <div className="absolute translate-x-[40px] bg-white rounded-full w-[51.56px] h-[51.56px]">

    <img 
    className=' ml-3 mt-3.5 '
    src="m.svg" alt="m" />
  </div>
</div>












        <img 
        className='absolute ml-[150px]'
        src="play.svg" alt="play" />

        <img 
        className='w-[394px] h-[606px]'
        src="/Viduom.svg" alt="viduom" />
    </div> 
    </div>
  )


}
