"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Pot2() {
  const [progress, setProgress] = useState(0); // [-1,1] progress tracking

  const images = [
    {
      src: "hoodies/phot2/ph1.png",
      width: "w-[616px]",
      height: "h-[790px]",
      top: "top-[258px]",
      left: "left-1/2",
      z: "z-10",
      rotateBase: -5,
      rotateMultiplier: 20,
      xMultiplier: 100,
    },
    {
      src: "hoodies/phot2/ph3.png",
      width: "w-[374px]",
      height: "h-[480px]",
      top: "top-[580px]",
      left: "left-[178px]",
      rotateBase: -29.27,
      rotateMultiplier: 15,
      xMultiplier: 60,
    },
    {
      src: "hoodies/phot2/ph2.png",
      width: "w-[499px]",
      height: "h-[640px]",
      top: "top-[405px]",
      left: "left-[342px]",
      rotateBase: -14.01,
      rotateMultiplier: 10,
      xMultiplier: 80,
    },
  ];

  return (
    <section className="relative w-full h-[1664px] bg-gray-200 overflow-hidden perspective-[1000px]">
      {/* Text Content */}
      <div className="relative z-10 pt-[138px] text-center">
        <h3 className="text-[32px] leading-[48px] font-medium text-gray-500 font-['PP_Neue_Montreal']">
          Super Hoodies
        </h3>
        <h2 className="mt-[38px] text-[42px] leading-[48px] font-normal text-black font-['PP_Neue_Montreal']">
          The Art Of Streetwear.
        </h2>
      </div>

      {/* Swiper with all images together */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        modules={[Navigation]}
        onProgress={(swiper) => {
          setProgress(swiper.progress * 2 - 1); // convert [0,1] -> [-1,1]
        }}
        className="absolute inset-0 w-full h-full"
      >
        <SwiperSlide>
          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img.src}
              alt={`hoodie-${index}`}
              className={`absolute ${img.width} ${img.height} ${img.left} ${img.top} rounded-[40px] object-cover ${img.z ?? ""}`}
              style={{
                rotate: img.rotateBase + progress * img.rotateMultiplier,
                x: progress * img.xMultiplier,
                transformStyle: "preserve-3d",
              }}
            />
          ))}
        </SwiperSlide>
      </Swiper>
    </section>
  );
}