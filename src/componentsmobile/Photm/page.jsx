import React from 'react';
import { text } from 'stream/consumers';

export default function Photm() {

    const text1 = "Super Hoodies";
    const text2 = "The Art Of Streetwear.";
    const text3 = "134.00 Dhs";
    const text4 = "199.00 Dhs";
  return (




<div className="relative">

  <div   className=" w-full h-[778px] left-[calc(50%-232px-17px)] top-[4043px] bg-[#252525]">


  <h1 
    className=" ml-[100px] w-[172px] h-[48px] left-[calc(50%-86px)] top-[4092px] font-['PP_Neue_Montreal'] font-medium text-[22px] leading-[48px] text-center text-[#626262]"
  >
    {text1}
  </h1>


  <h1 
    className="  ml-[10px] w-[328px] h-[48px] left-[calc(50%-164px)] top-[4123px] font-['PP_Neue_Montreal'] font-normal text-[30px] leading-[48px] text-center text-[#E1E1E1]"
  >
    {text2}
  </h1>

<div className='flex items-center justify-center mt-[40px]'>
<img 
className='absolute'
src="/imgmobil1.png" alt="prodact1" />
  
  <img 
className='mr-[100px]'
src="/imgmobil2.png" alt="prodact2" />








<img 
className='absolute ml-[230px] mt-[400px]'
src="shp.svg" alt="shp" />


<h1 
className='absolute text-white text-[29px] mr-[160px] mt-[400px] '
>{text3}</h1>

<h1
className='absolute text-[16px] mr-[160px] mt-[350px] text-[#A2A2A2]'
>{text4}</h1>
  

  </div>

 


    </div>



  

</div>
  )
}
