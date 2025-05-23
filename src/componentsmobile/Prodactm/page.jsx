import { div } from 'framer-motion/client'
import React from 'react'
import Image from 'next/image';

export default function Page() {
  const text1 = "Offers Right Now";
  const text2 = "134.00 Dhs";
  const text3 = "Hoodies Blockout Unique";
  const text4 = "Style & Edition";
  const promo = "-43%";

  return (
    <div>
      <h1 className="text-black font-bold text-[25px] ml-[90px] mt-[50px]">
        {text1}
      </h1>

      <div className="bg-[#F5F5F5] w-full h-[2309px] relative">

        {/* أزرار التمرير */}
        <div className="absolute flex gap-[10px] mt-[420px] ml-[20px]">
          <button className="bg-white rounded-full w-[51.56px] h-[51.56px]">
            <img className="ml-3" src="phone/yasar.svg" alt="icona yasar" />
          </button>
          <button className="bg-white rounded-full w-[51.56px] h-[51.56px]">
            <img className="ml-4" src="phone/yamin.svg" alt="icona yamin" />
          </button>
        </div>

        {/* أيقونات وصور */}
        <img className="absolute ml-[320px] mt-[20px]" src="phone/icona.svg" alt="icona" />
        <img className="mt-[40px] p-1" src="phone/ph1.png" alt="ph1" />
        <img className="absolute mt-1 ml-[340px]" src="phone/shop.svg" alt="shop" />
        
        {/* النصوص */}
        <h1 className="absolute text-black text-[32px] ml-[330px] mt-[150px]">
          {promo}
        </h1>

        <h1 className="w-full text-[32px] text-black ml-[10px] mt-[20px]">
          {text2}
        </h1>

        <h1 className="text-[27px] ml-[10px] text-[#878787] mt-[20px]">
          {text3}
          <br />
          {text4}
        </h1>
      






{/* ph2*/}






      <div className="absolute flex gap-[10px] mt-[420px] ml-[20px]">
          <button className="bg-white rounded-full w-[51.56px] h-[51.56px]">
            <img className="ml-3" src="phone/yasar.svg" alt="icona yasar" />
          </button>
          <button className="bg-white rounded-full w-[51.56px] h-[51.56px]">
            <img className="ml-4" src="phone/yamin.svg" alt="icona yamin" />
          </button>
        </div>

        {/* أيقونات وصور */}
        <img className="absolute ml-[320px] mt-[20px]" src="phone/icona.svg" alt="icona" />
        <img className="mt-[40px] p-1" src="phone/ph2.png" alt="ph2" />
        <img className="absolute mt-1 ml-[340px]" src="phone/shop.svg" alt="shop" />
        
        {/* النصوص */}
        <h1 className="absolute text-black text-[32px] ml-[330px] mt-[150px]">
          {promo}
        </h1>

        <h1 className="w-full text-[32px] text-black ml-[10px] mt-[20px]">
          {text2}
        </h1>

        <h1 className="text-[27px] ml-[10px] text-[#878787] mt-[20px]">
          {text3}
          <br />
          {text4}
        </h1>
      








{/* ph3 */}





        <div className="absolute flex gap-[10px] mt-[420px] ml-[20px]">
          <button className="bg-white rounded-full w-[51.56px] h-[51.56px]">
            <img className="ml-3" src="phone/yasar.svg" alt="icona yasar" />
          </button>
          <button className="bg-white rounded-full w-[51.56px] h-[51.56px]">
            <img className="ml-4" src="phone/yamin.svg" alt="icona yamin" />
          </button>
        </div>

     
        <img className="absolute ml-[320px] mt-[20px]" src="phone/icona.svg" alt="icona" />
        <img className="mt-[40px] p-1" src="phone/ph3.png" alt="ph3" />
        <img className="absolute mt-1 ml-[340px]" src="phone/shop.svg" alt="shop" />
        
     
        <h1 className="absolute text-black text-[32px] ml-[330px] mt-[150px]">
          {promo}
        </h1>

        <h1 className="w-full text-[32px] text-black ml-[10px] mt-[20px]">
          {text2}
        </h1>

        <h1 className="text-[27px] ml-[10px] text-[#878787] mt-[20px]">
          {text3}
          <br />
          {text4}
        </h1>
      








</div>
    </div>
  );
}
