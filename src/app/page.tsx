import React from 'react'
import Home from "@/app/home/page";
//import { div, main } from 'motion/react-client';
import Prodact from "@/componenttshirts/Prodact/page";
import Viduo from "@/componenttshirts/Viduo/page";
import Phot from "@/componenttshirts/Phot/page";
import Homem from "@/componentsmobile/Homem/page";
import Prodact2 from "@/componenttshirts/Prodact2/page";
import Phot2 from "@/componenttshirts/Phot2/page";
import Prodact3 from "@/componenttshirts/Prodact3/page";
import Phot3 from "@/componenttshirts/Phot3/page";
import Footer from "@/componenttshirts/Footer/page";
import Text from '@/componenttshirts/Text/page';
import Testnavber from "@/components/Testnavber/page";
import Prodactm from '@/componentsmobile/Prodactm/page';
import Viduom from "@/componentsmobile/Viduom/page";
import Photm from  "@/componentsmobile/Photm/page";

export default function Page() {
  return (
    









<main>

<div className='md:hidden block'>

<Homem />
<Prodactm />
<Viduom />
<Photm />

</div> 






<div className='md:block hidden'>
  <Testnavber />
<Home />

  <h1 className="flex items-center justify-center font-medium text-[20px] leading-[36px] text-black">
  Offers Right Now

  </h1>


  <Prodact />
<Viduo />

<Phot />
<Prodact2 />
<Phot2 />
<Prodact3/>
<Phot3 />
<Text />
<div className='mt-[100px]'>
<Footer/>
</div>
</div>
</main>


  )
}

