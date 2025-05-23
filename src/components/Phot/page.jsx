"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const text1 = "Super Hoodies";
const text2 = "The Art Of Streetwear.";
const nbr = "134.00 Dhs";
const nbr1 = "199.00 Dhs";

export default function Phot() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // حركة الصور بناءً على التمرير
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // أنيميشن للعناصر عند ظهورها
  const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: false });
  const [ref2, inView2] = useInView({ threshold: 0.1, triggerOnce: false });
  const [ref3, inView3] = useInView({ threshold: 0.1, triggerOnce: false });

  return (
    <div ref={containerRef} className='bg-[#252525] mt-[40px] w-full h-[200vh]'>

      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        animate={inView1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        ref={ref1}
        className='absolute font-PP Neue Montreal ml-[600px] text-[32px] text-[#626262] mt-[50px]'
      >
        {text1} 
      </motion.h1>
      
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        animate={inView1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className='absolute text-[42px] text-white ml-[500px] mt-[100px]'
      >
        {text2} 
      </motion.h1>

      <div>
        <div>
          <motion.img 
            style={{ y: y1 }}
            initial={{ opacity: 0, x: -100 }}
            animate={inView2 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            
            ref={ref2}
            className='absolute w-[499.06px] h-[640.03px] ml-[150px] mt-[450px]'
            src="/phot/pro3.png" 
            alt="prodact3" 
          />

          <motion.img 
            style={{ y: y2 }}
            initial={{ opacity: 0, x: -100 }}
            animate={inView2 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='absolute ml-[300px] mt-[360px]'
            src="/phot/pro2.png" 
            alt="prodact2" 
          />
        </div>

        <motion.img 
          style={{ y: y3 }}
          initial={{ opacity: 0, x: -100 }}
          animate={inView3 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          ref={ref3}
          className='absolute w-[616px] h-[790px] ml-[600px] mt-[300px]'
          src="/phot/pro1.png" 
          alt="prodact1" 
        />

        <motion.img 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='absolute ml-[1130px] mt-[900px] w-[70px] h-[70px]'
          src="/phot/shop.svg" 
          alt="shop" 
        />

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={inView3 ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className='absolute mt-[900px] text-white text-[32px] ml-[620px]'
        >
          {nbr}
        </motion.h1>

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={inView3 ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className='absolute mt-[880px] text-[#FEFEFE]/40 text-[22px] ml-[620px]'
        >
          {nbr1}
        </motion.h1>
      </div>
    </div>
  );
}  