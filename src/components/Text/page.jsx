import { div } from 'framer-motion/client'
import React from 'react'

export default function Text() {
const text1 = "About Us.";
const text2 = "We Are Qavo Brand.";

const t1 = "Lorem ipsum dolor sit amet consectetur. In";
const t2 = "donec quis etiam molestie eleifend. Quam ";
const t3 = "eu amet a in fringilla turpis etiam id. Amet ";
const t4 = "neque duis morbi blandit nec. Commodo";
const t5 = " neque dignissim et amet pulvinar enim.";


  return (







    <div className="relative container mx-auto px-4 py-20">







<img
     className='absolute ml-[750px] mt-[10px]'
     src="/text1/img1.png" alt="1" />

<img
     className='absolute ml-[80px] mt-[200px]'
     src="/text1/img2.png" alt="2" />

<img
     className='absolute ml-[1100px] mt-[250px]'
     src="/text1/img3.png" alt="3" />

<img
     className='absolute ml-[400px] mt-[440px]'
     src="/text1/img4.png" alt="4" />








      {/* About Us. */}
      <h2 className=" font-medium ml-[240px] text-[30px] text-[#BABABA] mb-4">
        {text1}
      </h2>

      {/* We Are Qavo Brand. */}
      <h1 className=" font-normal text-[50px] ml-[240px] text-[#BABABA] mb-8">
{text2}
      </h1>

      {/* Lorem ipsum paragraph */}
      <h1 className=" text-[50px] leading-[59px] ml-[200px] text-black  ">
  {t1}
  <br />
{t2}
<br />
{t3}
<br />
 {t4}
 <br />
  {t5}
     </h1>






    </div>
    


  );
};


