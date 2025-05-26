'use client';

import React, { useState, useEffect } from 'react';
import Form from '@/components/Form/page';

export default function Page() {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const overlayContent = document.querySelector('.transform');
    if (overlayContent) {
      if (showOverlay) {
        overlayContent.classList.remove('translate-y-full');
        overlayContent.classList.add('translate-y-0');
      } else {
        overlayContent.classList.remove('translate-y-0');
        overlayContent.classList.add('translate-y-full');
      }
    }
  }, [showOverlay]);

  return (
    <div className="rounded-xl border text-card-foreground border-none shadow-none bg-transparent">
      <div className="p-0 relative">
        <div className="relative h-[598px]">
          <img
            className="w-full h-full rounded-[40px] object-cover"
            alt="Product 1"
            src="/prodact/prodact.png"
          />

          <div className="absolute top-[29px] right-[29px]">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow hover:bg-primary/90 w-[55px] h-[55px] rounded-full bg-white border border-[#dcdcdc] p-0">
              <img
                className="w-9 h-[35px]"
                alt="Favorite"
                src="/prodact/icona.svg"
              />
            </button>
          </div>

          <div className="absolute bottom-[25px] top-[490px] left-[25px] flex gap-1">
            <button className="absolute bg-white rounded-[40px] w-[74px] h-[74px]">
              <img
                className="inline-flex items-center justify-center gap-2  w-[42.43px] h-[42.43px]"
                alt="Previous"
                src="/s.svg"
              />
            </button>
            <button className="absolute bg-white rounded-[40px]  left-[100px] w-[74px] h-[74px]">
              <img
                className="inline-flex items-center justify-center gap-2   w-[42.43px] h-[42.43px]"
                alt="Next"
                src="/m.svg"
              />
            </button>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center gap-2">
                <span className="[font-family:'PP_Neue_Montreal-Medium',Helvetica] font-medium text-black text-[32px]">
                  134.00 Dhs
                </span>
                <div className="relative">
                  <span className="[font-family:'PP_Neue_Montreal-Medium',Helvetica] font-medium text-[#a1a1a1] text-[22px]">
                    199.00 Dhs
                  </span>
                  <div
                    data-orientation="horizontal"
                    role="none"
                    className="shrink-0 bg-border h-[1px] absolute top-3.5 w-full"
                  ></div>
                </div>
              </div>
            </div>

            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow hover:bg-primary/90 w-[70px] h-[69px] rounded-full bg-[#ffffff42] backdrop-blur-[17px] p-0">
              <div className="w-[55px] h-14 bg-white rounded-full border-[0.5px] border-[#dcdcdc] flex items-center justify-center">
                <button onClick={() => setShowOverlay(true)}>
                  <img className="" alt="Cart" src="/prodact/shop.svg" />
                </button>
              </div>
            </button>
          </div>

          <p className="absolute ml-[330px] mt-[5px] text-black text-[32px]">-43%</p>

          <p className="mt-2 [font-family:'PP_Neue_Montreal-Medium',Helvetica] font-medium text-[#868686] text-[27px] leading-normal">
            Hoodies Blockout Unique <br /> Style & Edition
          </p>
        </div>
      </div>

      {/* Overlay (optional) */}
      {showOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transform transition-transform duration-500 translate-y-full">
          <div className="bg-white p-4 rounded-xl">
            <Form />
            <button
              onClick={() => setShowOverlay(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
