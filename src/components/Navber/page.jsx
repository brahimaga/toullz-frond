import React from 'react'
import Image from 'next/image'
import { button, div } from 'motion/react-client'
import Link from 'next/link';
export default function Navber() {

  const btn1 = " Hoodies";
  const btn2 = " T Shirts";
  const btn3 = " Hoodies";

  return (
    <div className="relative">
    <img
    src="/navber/logo.svg"
    alt="Qavo Logo"
    className="absolute w-[79px] h-[22px] left-[30px] top-8 "
  />





  <button className="absolute flex flex-row justify-center items-center py-2 px-[15px] gap-[10px] w-[93px] h-[36px] left-[820px] top-4 border border-[#DDDDDD] rounded-[100px]">
    <span className="w-[63px] h-[20px]  font-medium text-[17px] leading-[20px] text-[#2E2E2E] flex-none order-0 flex-grow-0">
     {btn1}
    </span>
  </button>



  <Link href={"/"}>
  <button className="absolute flex flex-row justify-center items-center py-2 px-[15px] gap-[10px] w-[88px] h-[36px] left-[709px] top-4 border border-[#DDDDDD] rounded-[100px]">
    

    <span className="w-[58px] h-[20px]  font-medium text-[16px] leading-[20px] text-[#2E2E2E] flex-none order-0 flex-grow-0">
    {btn2}
    </span>
  
  </button>
  </Link>
 

  <Link href={"/"}>
  <button className="absolute flex flex-row justify-center items-center py-2 px-[15px] gap-[10px] w-[92px] h-[36px] left-[595px] top-4 bg-[#2F2F2F] rounded-[100px]">
    <span className="w-[62px] h-[20px]  font-medium text-[17px] leading-[20px] text-[#F3F3F3] flex-none order-0 flex-grow-0">
      {btn3}
    </span>
  </button>
</Link>









<div className="flex items-center justify-end gap-2 pr-8">

  <button className="p-1 mt-4 ">
    <img 
      className="w-[35px] h-[35px]" 
      src="shop.svg" 
      alt="Shopping cart" 
    />
  </button>
  

  <button className="p-1 mt-4  ">
    <img
      className="w-[35px] h-[35px]"
     src="menu.svg"
      alt="Menu"
    />
  </button>
</div>
</div>



  )
}
