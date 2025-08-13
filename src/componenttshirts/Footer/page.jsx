
"use client";

import React from 'react'
import Image from 'next/image'
import { Averia_Serif_Libre } from 'next/font/google'
import { motion } from "framer-motion" 
const averia = Averia_Serif_Libre({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})

const Footer = () => {
  return (
    <div className="relative flex flex-col p-[10px] items-center w-full overflow-hidden">
      <div className="relative w-full h-[706px] p-[20px] py-[20px]">
        <Image 
          src="/footre32.jpg" 
          alt="background" 
          fill
          className="rounded-[40px] object-cover"
          quality={100}
        />

        {/* Motion logo from top to bottom */}
        <motion.img
          initial={{ y: -500, opacity: 0 }}
          animate={{ y: 0, opacity: 1  }}
          transition={{ duration: 10.2, ease: "easeOut" }}
          className="absolute inset-0 mx-auto my-auto"
          src="/logoanim.svg"
          alt="logo"
        />

        <div className={`${averia.className} absolute mt-[540px] inset-0 flex flex-col items-center justify-center`}>
          <h1 className="text-white text-[41px] text-center leading-tight">
            Timeless Elegance,<br />
            <span>Crafted for you.</span>
          </h1>
          <p className="text-[19px] text-white">© 2025 All right reserved</p>
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
        <div className={averia.className}></div>
      </div>
    </div>
  )
}

export default Footer
