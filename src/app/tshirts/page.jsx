import React from 'react'



//import Testnavber2 from "../../components/Testnavber2/page";
import Prodact from "@/componenttshirts/Prodact/page";
import Prodact2 from "@/componenttshirts/Prodact2/page";
import Prodact3 from "@/componenttshirts/Prodact3/page";
import Viduo from "@/componenttshirts/Viduo/page";
import Phot from "@/componenttshirts/Phot/page";
import Phot2 from "@/componenttshirts/Phot2/page";
import Phot3 from "@/componenttshirts/Phot3/page";
import Text from "@/componenttshirts/Text/page";
import Footre from "@/componenttshirts/Footer/page";
import Testnavber3 from "@/components/Testnavber3/page";
//import ted

export default function Tshirts() {
  return (
   
<main>


<div className='md:block hidden'>
    <Testnavber3 />
<Prodact/>
<Prodact2/>
<Prodact3/>
<Viduo />
<Phot/>
<Phot2 />
<Phot3/>
<Text/>
<Footre/>

</div>

</main>
  )
}
