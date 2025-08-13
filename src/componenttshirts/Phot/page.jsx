"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

export default function Phot() {
  const containerRef = useRef(null);

  // Scroll-based transforms for parallax-like effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yTransforms = [
    useTransform(scrollYProgress, [0, 1], [0, -300]),
    useTransform(scrollYProgress, [0, 1], [0, -200]),
    useTransform(scrollYProgress, [0, 1], [0, -150]),
  ];

  const [refPrice, inViewPrice] = useInView({ threshold: 0.1, triggerOnce: true });
  const [progress, setProgress] = useState({}); // Track slide progress for rotation

  const slides = [
    { src: "/hoodies/phot/im1.png", yTransform: yTransforms[0] },
    { src: "/hoodies/phot/im2.png", yTransform: yTransforms[1] },
    { src: "/hoodies/phot/im3.png", yTransform: yTransforms[2] },
    { src: "/hoodies/phot/im1.png", yTransform: yTransforms[3] },
    { src: "/hoodies/phot/im2.png", yTransform: yTransforms[4] },
    { src: "/hoodies/phot/im3.png", yTransform: yTransforms[5] },
  ];

  return (
    <div
      ref={containerRef}
      className="bg-[#252525] mt-10 w-full h-[200vh] relative overflow-hidden perspective-[1000px]"
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        modules={[Navigation]}
        onProgress={(swiper) => {
          const newProgress = {};
          swiper.slides.forEach((slide, index) => {
            newProgress[index] = slide.progress; // -1 to 1 as slides enter/leave viewport
          });
          setProgress(newProgress);
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.img
              className="mx-auto mt-[420px] w-[300px] md:w-[500px] h-auto"
              src={slide.src}
              alt={`product${index + 1}`}
              style={{
                y: slide.yTransform,
                rotate: progress[index] ? progress[index] * 20 : 0, // rotate up to ±20 degrees
                transformStyle: "preserve-3d",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Price Text */}
      <motion.div
        ref={refPrice}
        initial={{ opacity: 0, y: 50 }}
        animate={inViewPrice ? {
          opacity: 1,
          y: 0,
          transition: { type: "spring", damping: 20, delay: 0.7 }
        } : {}}
        className="absolute bottom-[100px] left-1/2 -translate-x-1/2 text-center z-10"
      >
        <motion.h1 className="text-white text-[32px]">134.00 Dhs</motion.h1>
        <motion.h1 className="text-[#FEFEFE]/40 text-[22px] line-through">199.00 Dhs</motion.h1>
      </motion.div>
    </div>
  );
}
