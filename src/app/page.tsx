import React from 'react'
import Home from "@/app/home/page";
//import { div, main } from 'motion/react-client';
import Prodact from "@/components/Prodact/page";
import Viduo from "@/components/Viduo/page";
import Phot from "@/components/Phot/page";
import Homem from "@/componentsmobile/Homem/page";
import Prodact2 from "@/components/Prodact2/page";
import Phot2 from "@/components/Phot2/page";
import Prodact3 from "@/components/Prodact3/page";
import Phot3 from "@/components/Phot3/page";
import Footer from "@/components/Footer/page";
import Text from '@/components/Text/page';
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
<Testnavber/>
<Home />

  <h1 className="w-[222px] h-[36px] ml-[600px] font-medium text-[20px] leading-[36px] text-black">
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

