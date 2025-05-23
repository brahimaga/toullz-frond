import React from 'react'
import Image from 'next/image'
import { Averia_Serif_Libre } from 'next/font/google'

const averia = Averia_Serif_Libre({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})

const text1 = "Timeless Elegance,";
const text2 = " Crafted for you.";
const text3 = " Crafted for you.";
const text4 = " 100% Client Satisfaction";
const text5 = "Get offers and news";
const text6  = "© 2025 All right reserved";
export default function Footre() {

 
  return (
<div className="relative">
  <img 
    src="hoodies/footer/back.svg" 
    alt="background" 
    className=" object-cover p-1.5 " 
  />

  <div className={averia.className}>
  <h1 className="absolute left-[50px] top-[1px]  text-white text-[91px]">
  {text1}
  <br />
{text2}
<p className='absolute text-white text-[31px]'>
 {text4}
  </p>


  </h1>
  </div>


  <p className='absolute left-[50px] text-white  top-[450px] text-[27px]'>
 {text5}
  </p>


<p className='absolute left-[1000px]  text-white  top-[50px] text-[25px]'>
  {text6}
</p>

<div>
  <input 
  className='absolute bg-white w-[299px] h-[70px] rounded-[40px] left-[50px] top-[500px]'
  type="text" />
  <button className='absolute bg-white left-[350px] top-[500px] rounded-[40px]  w-[74px] h-[74px]' >
    <img
    className='ml-5'
    src="/footer/icona.svg" alt="icona" />

  </button>

  <img
  className='absolute left-[1100px] top-[500px]'
  src="/footer/logo.svg" alt="logo" />
</div>


</div>
  )
}
