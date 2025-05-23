import React from 'react';
import Image from 'next/image';

const text1 = "Exprimez Votre Style ";
const text2 = "avec Audace | Hoodies,";
const text3 = " T-Shirts & Parfums";

export default function Home() {
  
  return (
<div className="relative">

 
<img 
className='p-3.5 w-full h-full'
src="/home/back.png" alt="back" />

<h1 className='absolute text-white text-[57px] left-[150px] top-[280px]'> 
  {text1}
  <br />
  {text2}
  <br />
  {text3}
</h1>

<div>

<button
className='absolute top-[170px] left-[150px] bg-white rounded-[40px] w-[51.56px] h-[51.56px]'
>

  <img
  className='ml-3'
  src="/home/iconb.svg" alt="b" />

</button>





<button
className='absolute top-[170px] left-[210px] bg-white rounded-[40px] w-[51.56px] h-[51.56px]'
>

<img
  className='ml-3'
  src="/home/icona.svg" alt="a" />


</button>



<img 
className='absolute  top-[260px] left-[150px]'
src="/home/iconlogo.svg" alt="logo" />
</div>







<button
  className='absolute bg-white w-[299px] h-[70px] rounded-[40px] left-[150px] text-[17px] top-[580px]'
   >  Start Shopping
   </button>







  <button className='absolute bg-white left-[450px] top-[580px] rounded-[40px]  w-[74px] h-[74px]' >

    <img
    className='ml-5'
    src="footer/icona.svg" alt="icona" />

  </button>






    </div>
  )
}
