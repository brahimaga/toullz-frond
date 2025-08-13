import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Page() {
  return (

    <div className="relative">

<header className=" top-0 left-0 w-full z-10 flex items-center justify-between px-10 py-1">
  <img 
    className="w-[110.94px] h-[26.35px] object-cover" 
    alt="toullz logo" 
    src="logodesktop.svg" 
  />
  
  <div className="flex items-center gap-4">
    
    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-full bg-[#2e2e2e] text-[#f3f3f3] border-[#dddddd]">
    <Link href={"/"}>

      <span className="[font-family:'PP_Neue_Montreal-Medium',Helvetica] font-medium text-[17px]">
        Home
      </span>
      </Link>

    </button>
 
    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-full border-[#dddddd]">
    <Link href={"/allproduact"}>

      <span className="[font-family:'PP_Neue_Montreal-Medium',Helvetica] font-medium text-[#2e2e2e] text-[17px]">
        All produact
      </span>
      </Link>
    </button>
    


    {/* <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-full border-[#dddddd]">
    <Link href={"/hoodies"}>

      <span className="[font-family:'PP_Neue_Montreal-Medium',Helvetica] font-medium text-[#2e2e2e] text-[17px]">
        Hoodies
      </span>
      </Link>

    </button> */}
  </div> 
  
  <div className="flex items-center gap-4">
  <Link href={"/"}>

    <img 
      className="w-[35px] h-[35px]" 
      alt="shop" 
      src="/shop.svg" 
    />
</Link>
<Link href={"/"}>

    <img 
      className="w-[35px] h-[35px]" 
      alt="maeun" 
     src="/meun.svg"
    />
    </Link>
  </div>
</header>
</div>
)
}