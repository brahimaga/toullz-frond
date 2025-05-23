"use client";


import { div, h1 } from 'framer-motion/client'
import { LoadableContext } from 'next/dist/shared/lib/loadable-context.shared-runtime';
//import React from 'react'
import Image from 'next/image'
//import React, { useState } from 'react';
import { useState, useEffect } from 'react'; 


export default function Homem() {

     const [showOverlay, setShowOverlay] = useState(false);
     const [showOverlaye, setShowOverlaye] = useState(false);


  useEffect(() => {
    if (showOverlay) {
      const overlayContent = document.querySelector('.transform');
      if (overlayContent) {
        overlayContent.classList.remove('translate-y-full');
        overlayContent.classList.add('translate-y-0');
      }
    } else {
      const overlayContent = document.querySelector('.transform');
      if (overlayContent) {
        overlayContent.classList.remove('translate-y-0');
        overlayContent.classList.add('translate-y-full');
      }
    }
  }, [showOverlay]);



const text = "Exprimez Votre Style avec Audace | Hoodies, T-Shirts & Parfums";
const start = "Start Shopping";
const text1 = "Product Info";
const text2 = "Hoodies Blockout Unique "; 
const text3 = "Style & Edition";
const text4 = "134.00 Dhs";
const text5 = "Hoodies Blockout Uniq...";
const text6 = "Hoodies Blockout Uniq...";
const text7 = "Delivery";
const total = "Total";
const totalnbr = "268.00 Dhs";

return (
<div>


<button className='absolute   bg-white w-[74px] h-[74px] rounded-[40px] ml-[276px] mt-[580px]'>
    
    <img 
    className='ml-5'
    src="/home/mobile/iconc.svg" alt="start" />
</button>

<button className='absolute text-[#2E2E2E] text-[17px] bg-white w-[253px] h-[65px] rounded-[40px] ml-[20px] mt-[580px] '> 
{start}
</button>









<h1 className='absolute text-white text-[27px] mt-[450px] ml-[20px]  '>
    {text}
</h1>



<button

className='absolute w-[51.56px] h-[51.56px] bg-white rounded-[40px] ml-[30px] mt-[60px]'>

    <img 
    className='ml-3'
    src="/home/mobile/iconb.svg" alt="yasar" />

</button>


<button

className='absolute w-[51.56px] h-[51.56px] bg-white rounded-[40px] ml-[90px] mt-[60px]'>


<img 
    className='ml-4'
    src="/home/mobile/icona.svg" alt="yamin" />

</button>


<img
className='absolute ml-[270px] mt-[70px]'
src="/home/mobile/logo.svg" alt="logo" />



<img
src="/home/mobile/back.jpg"
width={'410px'}
height={"782px"}
className='rounded-[40px] mt-[20px] p-2'
/>

  <>
      <button
        onClick={() => setShowOverlay(true)}
        className='bg-red-600 w-[50px] h-[50px] rounded-[40px]'
      >
        test
      </button>




      {showOverlay && (
<div className="fixed inset-0 flex bg-black/50 justify-center items overflow-hidden   z-100">
            <button
              onClick={() => setShowOverlay(false)}
              className=' absolute  text-white w-[60px] h-[60px] ml-[320px] mt-0 rounded-full'
            >
                <img src="/exit.svg" alt="exit" />
           
            </button>



             <div className='bg-white w-full h-[249px] rounded-[40px] mt-[50px]' >

<h1 
className='absolute font-bold text-[#141414] ml-[10px] mt-[30px] text-[12px]'
>{text1}</h1>


<button
className='absolute rounded-full bg-[#2F2F2F] w-[47px] h-[20px] text-white mt-[30px] ml-[90px] text-[10px]'
>
Hoodies
</button>


<h1 className='absolute text-[#878787] text-[17px] mt-[50px] ml-[10px]'>

    {text2}
    </h1>

    <h1 className='absolute text-[#878787] text-[17px] mt-[65px] ml-[10px]'>

    {text3}

</h1>


<h1 className='absolute font-montreal  text-black text-[27px] ml-[10px]  mt-[90px] '>
    {text4}
</h1>



<div className='absolute ml-[20px] mt-[140px] flex gap-1'>
  <button className='rounded-full bg-[#0D0D0D] w-[27px] h-[27px] text-white'>S</button>
  <button className='rounded-full text-[#DDDDDD] w-[30px] h-[27px] white-[#2E2E2E]'>M</button>
  <button className='rounded-full text-[#DDDDDD] w-[26px] h-[27px] white-[#2E2E2E]'>L</button>
  <button className='rounded-full text-[#DDDDDD] w-[35px] h-[27px] white-[#2E2E2E]'>XL</button>
  <button className='rounded-full text-[#DDDDDD] w-[48px] h-[27px] white-[#2E2E2E]'>Over</button>
</div>



<div className='absolute ml-[20px] mt-[190px] flex gap-1'>
<button className='bg-[#464445] rounded-full w-[27px] h-[27px] '></button>
<button className='bg-[#030303] rounded-full w-[27px] h-[27px]'></button>
<button className='bg-[#BBBBBB] rounded-full w-[27px] h-[27px] '></button>
<button className='bg-[#115123] rounded-full w-[27px] h-[27px] '></button>
<button className='bg-[#6A200C] rounded-full w-[27px] h-[27px] '></button>

</div>




<div className=" absolute ml-[220px] mt-[180px] flex gap-1">
  <button className="rounded-[10px] bg-[#ECECEC] w-[42px] h-[42px]">-</button>
  <button className="rounded-[10px] bg-[#ECECEC] w-[53px] h-[42px]">02</button>
  <button className="rounded-[10px] bg-[#ECECEC] w-[42px] h-[42px]">-</button>
</div>





<img 
className='ml-[220px] mt-[10px]'
src="/imgn.svg" alt="n" />



             </div>





             <div className='absolute bg-white w-full h-[148px] rounded-[40px] mt-[300px] '>
                



               

               <h1 className='absolute text-[#878787] text-[11px] ml-[10px] mt-[20px] '>
                {text5}
               </h1>




               <h1
               className='absolute text-[#878787] text-[11px] ml-[10px] mt-[45px]'>
                {text5} 
               
               </h1>
                

                <h1 className='absolute text-[#878787] text-[11px] ml-[10px] mt-[75px] '>

                    {text7}
                </h1>

<h1 className='absolute text-[#878787] text-[11px] ml-[350px] mt-[75px] '>Free</h1>

                <div className="absolute w-[349px] h-0 ml-[10px] mt-[95px] border border-dashed border-[#E3E3E3]"></div>


           <h1 className='absolute text-[#363434] text-[11px] ml-[20px] mt-[105px] font-medium  '>
            {total}
            </h1>

            <h1 className='absolute text-[#363434] text-[15px] ml-[300px] mt-[100px] font-medium'>
              {totalnbr}
            </h1>



                   <div className='absolute mt-[20px] ml-[170px] flex gap-1'> 
                    <button className='bg-[#0D0D0D] rounded-full w-[19px] h-[19px] text-white text-[11px]'>S</button>
                    <button className='bg-[#464445] rounded-full w-[19px] h-[19px] '></button>
                   </div>

                   <div className='absolute mt-[40px] ml-[170px] flex gap-1'> 
                    <button className='bg-[#0D0D0D] rounded-full w-[21px] h-[19px] text-white text-[11px]'>XL</button>
                    <button className='bg-[#464445] rounded-full w-[19px] h-[19px] '></button>
                   </div>


                    <div className='mt-[20px] ml-[240px] '>
                      <h1 className='absolute text-[#878787] text-[11px]'>01</h1>
                      <img 
                      className='absolute ml-[40px]'
                      src="/laiter.svg" alt="delet" />
                      <img 
                      className='absolute ml-[80px]'
                      src="delet.svg" alt="delet" />
                      <h1 className='absolute text-[11px] font-medium text-[#878787] ml-[100px]'>134.00</h1>
                    </div>
                     
                     
                       <div className='mt-[40px] ml-[240px] '>
                      <h1 className='absolute text-[#878787] text-[11px]'>01</h1>
                        <img 
                      className='absolute ml-[40px]'
                      src="/laiter.svg" alt="delet" />
                      <img 
                      className='absolute ml-[80px]'
                      src="delet.svg" alt="delet" />
                     <h1 className='absolute text-[11px] font-medium text-[#878787] ml-[100px]'>134.00</h1>

                    </div>


</div>



             <div className='absolute bg-white w-full h-[326px] rounded-[40px] mt-[450px]' >

              






<div className="relative">

  <div className="mb-6">
    <label className="block font-['PP_Neue_Montreal'] font-medium text-[13px] leading-[16px] text-black mb-1">
      Full Name
    </label>
    <div className="relative">
      <input 
        className="w-full h-[50px] border border-[#ECECEC] rounded-[11px] px-4 font-['PP_Neue_Montreal'] font-medium text-[15px] leading-[18px] text-black"
        placeholder="Nom Complet"
      />
    </div>
  </div>


  <div className="mb-6">

    <label className="block font-['PP_Neue_Montreal'] font-medium text-[13px] leading-[16px] text-black mb-1">
      Full Adresse
    </label>
    <div className="relative">
      <input 
        className="w-full h-[50px] border border-[#ECECEC] rounded-[11px] px-4 font-['PP_Neue_Montreal'] font-medium text-[15px] leading-[18px] text-black"
        placeholder="Ville, Adress"
      />
    </div>
  </div>

  <div className="mb-6">

    <label className="block font-['PP_Neue_Montreal'] font-medium text-[13px] leading-[16px] text-black mb-1">
      Phone Number
    </label>
    <div className="relative">
      <input 
        className="w-full h-[50px] border border-[#ECECEC] rounded-[11px] px-4 font-['PP_Neue_Montreal'] font-medium text-[15px] leading-[18px] text-black"
        placeholder="+212 666-666666"
      />
    </div>
  </div>
</div>
  
<div className='mt-[80px]'>
  <button className='bg-[#161616] w-[259px] h-[70px]  ml-[10px]  rounded-[40px]'></button>
<button className='bg-[#161616] w-[68px] h-[68px] ml-[1px]  rounded-full' ></button>


</div>









             </div>









</div>







          
      )}
    </>

</div>
      )
    }
