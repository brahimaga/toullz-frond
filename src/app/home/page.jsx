'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [count, setCount] = useState(0);

  const homes = [
    {
      id: 1,
      images: [
        '/home/back.png',
        '/prodact2/prodact2.png',
        '/prodact2/prodact3.png',
      ],
    },
  ];

  const images = homes[0].images;
  const currentImage = images[count];

  const handleNext = () => {
    setCount((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCount((prev) => (prev - 1 + images.length) % images.length);
  };

  const text1 = "Exprimez Votre Style ";
  const text2 = "avec Audace | Hoodies,";
  const text3 = " T-Shirts & Parfums";

  return (
    <div className="relative">
      {/* Background Image */}
      <img
        className="p-3.5 w-full h-full"
        src={currentImage}
        alt={`Product image ${count + 1}`}
      />

      {/* Text */}
      <h1 className="absolute text-pretty text-white text-[57px] left-[150px] top-[280px]">
        {text1}
        <br />
        {text2}
        <br />
        {text3}
      </h1>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-[170px] left-[150px] bg-white rounded-[40px] w-[51.56px] h-[51.56px]"
      >
        <img className="ml-3" src="/home/iconb.svg" alt="prev" />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-[170px] left-[210px] bg-white rounded-[40px] w-[51.56px] h-[51.56px]"
      >
        <img className="ml-3" src="/home/icona.svg" alt="next" />
      </button>

      {/* Logo Icon */}
      <img
        className="absolute top-[260px] left-[150px]"
        src="/home/iconlogo.svg"
        alt="logo"
      />

      {/* Main Button */}
      <button className="absolute bg-white w-[299px] h-[70px] rounded-[40px] left-[150px] text-[17px] top-[580px]">
        Start Shopping
      </button>

      {/* Round Icon Button */}
      <button className="absolute bg-white left-[450px] top-[580px] rounded-[40px] w-[74px] h-[74px]">
        <img className="ml-5" src="/footer/icona.svg" alt="icona" />
      </button>
    </div>
  );
}
