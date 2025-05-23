"use client"; 
import React, { useRef } from 'react'; 
import { motion, useScroll, useTransform } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';

const text1 = "Super Hoodies"; 
const text2 = "The Art Of Streetwear."; 
const nbr = "134.00 Dhs"; 
const nbr1 = "199.00 Dhs"; 
const name = "299.00 Dhs ";

export default function Phot() {
  const containerRef = useRef(null); 
  const { scrollYProgress } = useScroll({ 
    target: containerRef, 
    offset: ["start start", "end end"] 
  }); 

  // Image movement based on scroll
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]); 
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]); 
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]); 

  // Animation for elements when they appear
  const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: false }); 
  const [ref2, inView2] = useInView({ threshold: 0.1, triggerOnce: false }); 
  const [ref3, inView3] = useInView({ threshold: 0.1, triggerOnce: false }); 

  return ( 
    <div ref={containerRef} className='bg-[#252525] mt-[40px] w-full h-[200vh]'>
      <div>
        <motion.img 
          initial={{ x: 0, y: -106, rotate: 0 }}
          animate={{ x: 100, y: 900, rotate: 200 }}
          transition={{ duration: 1, delay: 12, ease: "easeInOut" }}
          ref={ref2}
          className='absolute w-[499.06px] h-[640.03px] ml-[200px] mt-[420px]'
          src="/hoodies/phot/im3.png" 
          alt="prodact3"
        />
        <motion.img 
          initial={{ x: 0, y: -106, rotate: 0 }}
          animate={{ x: 100, y: 900, rotate: 200 }}
          transition={{ duration: 1, delay: 10, ease: "easeInOut" }}
          ref={ref2}
          className='absolute ml-[300px] mt-[360px]'
          src="/hoodies/phot/im2.png" 
          alt="prodact2"
        />
      </div>

      <motion.img 
        initial={{ x: 0, y: -106, rotate: 0 }}
        animate={{ x: 100, y: 900, rotate: 200 }}
        transition={{ duration: 1, delay: 8, ease: "easeInOut" }}
        ref={ref2}
        className='absolute w-[616px] h-[790px] ml-[600px] mt-[300px]'
        src="/hoodies/phot/im1.png" 
        alt="prodact1"
      />
      
      <motion.img 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='absolute ml-[1130px] mt-[900px] w-[70px] h-[70px]'
        src="/phot/shop.svg" 
        alt="shop"
      />

      <h1
       
      
        className='absolute mt-[900px] text-white text-[32px] ml-[620px]'
      >
        {nbr}
      </h1>

      <h1 
     
        className='absolute mt-[880px] text-[#FEFEFE]/40 text-[22px] ml-[620px]'
      >
        {nbr1}
      </h1>
    </div>
  );
}