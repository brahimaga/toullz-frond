"use client";

import React from "react";
import Image from "next/image";
import { Averia_Serif_Libre } from "next/font/google";
import { motion } from "framer-motion";

const averia = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function FooterMobile() {
  return (
    <div className="relative w-full h-[700px] sm:h-[600px] overflow-hidden flex items-center justify-center bg-black">
      {/* Background Image */}
      <Image
        src="/footrem.jpg"
        alt="footer mobile background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      {/* Overlay SVG */}
      <Image
        src="/tollsvgm.svg"
        alt="overlay"
        width={300}
        height={300}
        className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[90%] max-w-[350px] z-10"
      />

      {/* Text */}
      <div
        className={`${averia.className} absolute bottom-[80px] z-20 text-center px-4`}
      >
        <h1 className="text-white text-[30px] sm:text-[28px] leading-tight">
          Timeless Elegance,
          <br />
          <span className="text-white">Crafted for you.</span>
        </h1>
      </div>

      {/* Footer Note */}
      <p className="absolute bottom-4 text-white text-[15px] z-20 text-center w-full">
        © 2025 All rights reserved
      </p>
    </div>
  );
}
