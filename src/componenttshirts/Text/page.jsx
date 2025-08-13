'use client'; 
import React from 'react';
import { Averia_Serif_Libre, Bricolage_Grotesque } from 'next/font/google';
import { motion } from "motion/react"

const averia = Averia_Serif_Libre({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-averia'
});



export default function OffersSection() {
  return (
    <div className="relative w-full min-h-[1000px] bg-white">
      {/* Offers Right Now */}
      <h2 className="absolute left-1/2 top-[377px] -translate-x-1/2 text-[30px] leading-[36px] font-['PP Neue Montreal'] font-bold text-black">
        Offers Right Now
      </h2>

      {/* We Are toullz Brand. */}
      <div className={averia.className} >
      <h3 className="absolute left-1/2 top-[406px] -translate-x-1/2 w-[512px] text-center text-[50px] leading-[60px] font-averia text-[#BABABA]">
  We Are toullz Brand.
</h3>
</div>

      {/* Description Text */}
      <p className="absolute left-1/2 top-[583px] -translate-x-1/2 w-[1136px] text-center text-[40px] leading-[60px] text-black">
        Lorem ipsum dolor sit amet consectetur. In donec quis etiam molestie eleifend. Quam eu amet a in fringilla turpis etiam id. Amet neque duis morbi blandit nec. Commodo neque dignissim et amet pulvinar enim.
      </p>






      {/* Image 1 */}
      <img
        className="absolute top-[726px] flex-col left-[1300px] "
       src="/image3.svg"
      />

      {/* Image 2 */}
      <img
        className="absolute top-[792px] flex-col  left-[679px] "
        src="image2.svg" 
      />

      {/* Image 3 */}
      <img
        className="absolute top-[583px] flex-col  left-[200px] "
        src="image1.svg" 
      />

      {/* Image 4 */}
      <img
        className="absolute top-[442px] flex-col  left-[870px] "
        src="image0.svg" 
      />
    </div>
  );
}
