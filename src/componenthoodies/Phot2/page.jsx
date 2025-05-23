import React from 'react'


export default function Pot2() {
 
      return (
        <section className="relative w-full h-[1664px]  bg-gray-200 overflow-hidden">
          {/* Container */}
          <div className="container relative h-full mx-auto">
            {/* Text Content */}
            <div className="relative z-10 pt-[138px] text-center">
              <h3 className="text-[32px] leading-[48px] font-medium text-gray-500 font-['PP_Neue_Montreal']">
                Super Hoodies
              </h3>
              <h2 className="mt-[38px] text-[42px] leading-[48px] font-normal text-black font-['PP_Neue_Montreal']">
                The Art Of Streetwear.
              </h2>
            </div>
    
            {/* Images */}
            <div className="relative w-full h-full">
              {/* Main centered image */}
              <img
                src="hoodies/phot2/ph1.png"
                alt="Streetwear fashion"
                className="absolute w-[616px] h-[790px] left-[800px] -translate-x-1/2 top-[258px] rounded-[40px] object-cover z-10"
              />
    

  {/* Rotated image 2 */}
  <img
                src="hoodies/phot2/ph3.png"
                alt="Streetwear fashion"
                className="absolute w-[374px] h-[480px] left-[178px] top-[580px] rounded-[40px] object-cover -rotate-[29.27deg]"
              />
    


              {/* Rotated image 1 */}
              <img
                src="hoodies/phot2/ph2.png"
                alt="Streetwear fashion"
                className="absolute w-[499px] h-[640px] left-[342px] top-[405px] rounded-[40px] object-cover -rotate-[14.01deg]"
              />
    
             
              {/* Group 164189 */}
              <div className="absolute w-[70px] h-[69px] left-[1146px] top-[946px]">
                {/* Add group content here */}
              </div>
    
              {/* Group 164190 */}
              <div className="absolute w-[157px] h-[64px] left-[681px] top-[935px]">
                {/* Add group content here */}
              </div>
            </div>
          </div>
        </section>
   
    
  
  )
}
