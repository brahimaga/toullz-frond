import React from "react";
import Image from "next/image";


export default function Buynow(){

    return(
          <div>
      <div className="flex items-center justify-center mt-[100px]">
          <div className="bg-[#F5F5F5] w-[74px] h-[74px]  rounded-full" ></div>
          <h1 className="text-[30px] text-black font-medium">Checkout Your Oder</h1>
           </div>


           <div className="flex items-center justify-center gap-[50px] mt-[100px]">
               <button className="bg-[#FEB93C] text-white text-[19px] rounded-full w-[176px] h-[61px]"></button>
               <img src="khat.svg" alt="" />
               <button className="border border-[#FEB93C] text-black text-[19px] w-[176px] h-[61px] rounded-full"></button>
               <img src="khat.svg" alt="" />
               <button className="border border-[#E3DDDD] text-[#E3DDDD] text-[19px] w-[176px] h-[61px] rounded-full"></button>
                </div>


                
               <div className="flex items-center justify-center gap-[100px] mt-[100px] " >
                   <div className=" bg-[#f7f7f7] w-[556px] h-[344px] rounded-[60px] " >

                      <div className="flex px-[30px] p-[10px] mt-[30px] gap-[40px] ">
                          <div className="border border-[#E0E0E0] w-[300px] h-[59px] rounded-full " ></div>
                          <div className="border border-[#E0E0E0] w-[300px] h-[59px] rounded-full " ></div>
                      </div>
                      

                      <div className="flex px-[20px] p-[120px] gap-[50px]">
                          <div className="border border-[#E0E0E0] w-[300px] h-[50px] rounded-full "></div>
                          <button className="bg-[#FEB93C] w-[252px] h-[79px] rounded-full text-white text-[29px]">
                              Buy Now
                              <img src="buynow.svg" alt="" />
                              </button>


                      </div>


</div>
                   <div className=" bg-[#f7f7f7] w-[795px] h-[677px] rounded-[60px]"></div>
               </div>

               <div className="bg-[#f7f7f7] w-[795px] h-[236px] rounded-[60px]">
                   <div className="flex px-[20px]  p-[100px] gap-3">
                       <button className="bg-[#000000] w-[227px] h-[57px] rounded-full " ></button>
                       <button className="bg-[#EDECEC] w-[227px] h-[57px] rounded-full " ></button>
                       <button className="bg-[#EDECEC] w-[227px] h-[57px] rounded-full " ></button>


                   </div>

               </div>

        </div>
 


    )
}